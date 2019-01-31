var mam = require('mam.ts');

export const REQUEST_GLUCOSE = 'REQUEST_GLUCOSE';
export const RECEIVE_GLUCOSE = 'RECEIVE_GLUCOSE';

export const requestGlucose = () => ({
    type: REQUEST_GLUCOSE
});

export const receiveGlucose = (json) => ({
    type: RECEIVE_GLUCOSE,
    resource: json
});

export const fetchGlucose = () => dispatch => {
    dispatch(requestGlucose());

    var reader = new mam.MamReader(
        "https://node04.iotatoken.nl:443", 
        "FEQVD9ATTXAHMGFKXZAWDSHNHNBGNDLXYMXN9PIENQVSPA9JADKEZPNCDMCJTNLXE9SUHXVJTLNKDBYKP", 
        mam.MAM_MODE.RESTRICTED,
        "FAXFOZORGGACJZADQPDTWSLFFIHBJDIEKYMYKURAHYGBMRKARLKCXMMBIMQGG9FA9DHEXZPDIFEN9KSUI"
    );
    
    return dispatch(fetchStream(reader, 0));
};

const fetchStream = (reader, i) => dispatch => {
    reader.fetchSingle()
        .then(
            resource => {
                if (resource !== null && i < 20) {
                    i++;
                    dispatch(receiveGlucose(JSON.parse(resource)))
                    dispatch(fetchStream(reader, i))
                } else {
                    return Promise.resolve();
                }
            }
        ).catch();
}