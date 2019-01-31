import React from 'react'

const Description = () => {
    return (
        <div>
            <br />
            <h3>Motivation</h3>
            <div>
                Exchanging glucose data with your doctor or family can be quite a challenge, even nowadays. The purpose of this project
                is to demonstrate a free and decentralized glucose monitoring approach, through which glucose data can be accessed everytime
                as long as you have access to the internet.
                <br />
                <br />
                Use cases for this not only include a very comfortable way of exchanging glucose data with your diabetes consultant or doctor,
                but also remote monitoring possibilities for parents (e.g. for kids in school or similar).
            </div>
            <br />
            <h3>How it works</h3>
                Getting the data from a device includes 2 steps. In this example no glucose monitoring device, but fictitious data was used. 
                <div>
                    <h4>Generating data</h4>
                    Due to the nature of this example, let's just assume that we were able to get glucose data from a device. This data was processed
                    to a FHIR® conform resource.
                    <br />
                    <br />
                    <blockquote>
                        FHIR solutions are built from a set of modular components called "Resources". These resources can easily be assembled into working 
                        systems that solve real world clinical and administrative problems at a fraction of the price of existing alternatives. FHIR is suitable 
                        for use in a wide variety of contexts – mobile phone apps, cloud communications, EHR-based data sharing, server communication in large 
                        institutional healthcare providers, and much more.
                    </blockquote>
                    <br />
                    <br />
                    The FHIR conform records were then published to the Tangle by using PACTs FHIR-to-MAM adapter (<a href="https://github.com/PACTCare/Pact.Fhir">https://github.com/PACTCare/Pact.Fhir</a>)
                    <br />
                    <br />
                    <h4>Reading data</h4>
                    Since the FHIR glucose resources are published as JSON onto the MAM stream, the stream can easily be read by using the TypeScript MAM library
                    (<a href="https://www.npmjs.com/package/mam.ts">https://www.npmjs.com/package/mam.ts</a>)
                </div>
                <br />
            <h3>Further Information</h3>
                <div>
                    This project was hosted via dWeb.page (<a href="https://pact.online">https://pact.online</a>). You can read more about that <a href="https://blog.florence.chat/tutorial-how-to-create-your-own-distributed-website-in-just-a-few-seconds-5100ccf068bc">here</a>.
                </div>
            <br />
            <div>
            </div>
            <h6>Copyright (c) 2019 PACT Care BV
            <br />Herengracht 420, 1017BZ, Amsterdam, Netherlands
            <br />Contact: info@pact.care</h6>
            <br />
            <br />
        </div>
    )
}

export default Description;