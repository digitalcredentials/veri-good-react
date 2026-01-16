'use client';
import React from 'react';
import {useRef, useEffect} from 'react'
import '@digitalcredentials/veri-good'

const VeriGood = ({vc, children, issuerDids}) => {
  const wcRef = useRef(null);

  /*
  if a vc is passed in on the 'vc' prop then verify it
  */
  useEffect(() => {
     if (vc && wcRef.current && typeof wcRef.current.verify === 'function') {
      wcRef.current.verify(vc);
    }
  }, [vc]); 

    /*
  if a did list is passed in on the 'issuerDids' prop then set it
  */
  useEffect(() => {
     if (issuerDids && wcRef.current && typeof wcRef.current.setIssuerDids === 'function') {
      wcRef.current.setIssuerDids(issuerDids)
    }
  }, [issuerDids]); 

  const handleClick = () => {
    // Example: test the verify call
    // TODO: also test the setIssuerDids call here too.
    if (wcRef.current && typeof wcRef.current.verify === 'function') {
      wcRef.current.verify('https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/noRegistry-noStatus-noExpiry.json');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>verify sample</button>
      <veri-good ref={wcRef}>
        {children}
      </veri-good>
    </div>
  );
};

export default VeriGood