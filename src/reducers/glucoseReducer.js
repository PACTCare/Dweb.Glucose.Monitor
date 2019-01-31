import { REQUEST_GLUCOSE, RECEIVE_GLUCOSE } from '../actions/glucoseActions'

const defaultState = {
    isFetching: false,
    data: [],
}

const glucose = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_GLUCOSE:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_GLUCOSE:
            var date = new Date(action.resource.effectivePeriod.start);
            return Object.assign({}, state, {
                isFetching: true,
                data: [
                    ...state.data, 
                    { 
                        time: date.toLocaleTimeString().substring(0, 5), 
                        mgdl: Math.round(action.resource.valueQuantity.value * 18)
                    }
                ]
            });
        default:
            return state;
    }
}

export default glucose;