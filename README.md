# veri-good-react

A react wrapper around [@digitalcredentials/veri-good](https://github.com/digitalcredentials/veri-good) providing entirely in-browser verification of Verifiable Credentials.

You can try out the verifier on the Github Page for veri-good:

[https://digitalcredentials.github.io/veri-good/](https://digitalcredentials.github.io/veri-good/)

## Installation

`npm i @digitalcredentials/veri-good-react`

## Use

```
import VeriGood from "@digitalcredentials/veri-good-react"

const yourIssuerDidList =  {
            "did:web:digitalcredentials.github.io:testDID": {
                "issuerName": "Department of Chemistry",
                "url": "https://chemistry.uni.edu"
            }
          }

export default function YourReactComponent() {
  return (
    <>
        <div>whatever else you have on your page</div>
        <VeriGood issuerDids={issuerDids}></VeriGood>
        <div>whatever else you have on your page</div>
    </>
  )
}
```

The 'issuerDids' property takes a list of [DIDs (Decentralized Identifiers)](https://w3c.github.io/did/).

When verifying a credential the verifier confirms that the DID used to sign the credential is in the list. If it isn't verification fails.

## Header customization

This react component wraps an [HTML Web Component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components). Web components are entirely self-contained components that can't be modified directly. Not their content, not their CSS, nor their behaviour. They can only be customized if the developer has provided options to do so.

veri-good-react provides an option to substitute a different header, which you do by passing in content (which can include react components) in an element, like the div the following example, that has an attribute called 'slot' with value 'header':

```
export default function YourReactComponent() {
  return (
    <>
        <VeriGood issuerDids={issuerDids}>
            <div slot="header">
              <div>A title</div>
              <div>A subtitle</div>
            </div>
        </VeriGood>
    </>
  )
}
```

The underlying web component directly inserts the element into the header. The component applies no styling to 
the element or its contents. You style the contents yourself.

## Directly trigger verification using the vc prop

You can directly pass a credential into the component for verification, like so, using the 'vc' prop:

```
const yourVC = 'https://somwehere.com/vc.json'

export default function YourReactComponent() {
  return (
    <>
        <VeriGood issuerDids={issuerDids} vc={yourVC}>
            <div slot="header">
              <div>A title</div>
              <div>A subtitle</div>
            </div>
        </VeriGood>
    </>
  )
}
```

You can pass either a URL pointing to the json for the VC, or the json itself.

The verifier will automatically fire off verification whenever the vc prop changes value.

You might use this for things like automatically verifying a credential whose url has been passed into
the enclsing page as a request parameter. This approach can make it a bit easier for people to share their credential
without having to explain to someone how to deal with the json. They can simply give out a URL like so:

```https://your-verifier.ex?vc=https://some-site.ex/2334.json```


