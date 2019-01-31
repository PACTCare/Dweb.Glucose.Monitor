# Dweb.page for remote glucose monitoring

> https://pactcare.online/ipfs/QmdaLzE7KjupXb3z9MP1zxDbcxWWeKUYQJej8E32vfpxQC

## Motivation
Exchanging glucose data with your doctor or family can be quite a challenge, even nowadays. The purpose of this project is to demonstrate a free and decentralized glucose monitoring approach, through which glucose data can be accessed everytime as long as you have access to the internet.

Use cases for this not only include a very comfortable way of exchanging glucose data with your diabetes consultant or doctor, but also remote monitoring possibilities for parents (e.g. for kids in school or similar).

## How it works
Getting the data from a device includes 2 steps. In this example no glucose monitoring device, but fictitious data was used.

### Generating data
Due to the nature of this example, let's just assume that we were able to get glucose data from a device. This data was processed to a FHIR® conform resource.

>FHIR solutions are built from a set of modular components called "Resources". These resources can easily be assembled into working systems that solve real world clinical and administrative problems at a fraction of the price of existing alternatives. FHIR is suitable for use in a wide variety of contexts – mobile phone apps, cloud communications, EHR-based data sharing, server communication in large institutional healthcare providers, and much more.

The FHIR conform records were then published to the Tangle by using PACTs FHIR-to-MAM adapter (https://github.com/PACTCare/Pact.Fhir)

### Reading data
Since the FHIR glucose resources are published as JSON onto the MAM stream, the stream can easily be read by using the TypeScript MAM library (https://www.npmjs.com/package/mam.ts)

## Further Information
This project was hosted via dWeb.page (https://pact.online). You can read more about that [here](https://blog.florence.chat/tutorial-how-to-create-your-own-distributed-website-in-just-a-few-seconds-5100ccf068bc)

## License

[MIT License](https://github.com/PACTCare/Dweb.Glucose.Monitor/blob/master/LICENSE) © PACT Care B.V.