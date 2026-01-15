'use client';
import React from 'react';
import {useRef, useEffect} from 'react'
import '@digitalcredentials/veri-good'

const VeriGood = () => {
  const wcRef = useRef(null);

  useEffect(() => {
    // Example: Call a 'connect' method defined in the web component
   // if (wcRef.current && typeof wcRef.current.connect === 'function') {
  //    wcRef.current.connect();
 //   }
  }, []); // Run once on mount

  const handleClick = () => {
    // Example: Call a 'toggle' method on user interaction
    if (wcRef.current && typeof wcRef.current.verify === 'function') {
      wcRef.current.verify('https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/noRegistry-noStatus-noExpiry.json');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>verify sample</button>
      <veri-good ref={wcRef}></veri-good>
    </div>
  );
};

export default VeriGood