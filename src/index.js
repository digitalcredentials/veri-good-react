'use client';
import React from 'react';
import {useRef, useEffect} from 'react'
import '@digitalcredentials/veri-good'

const VeriGood = ({vc, children, issuerDids}) => {
  const wcRef = useRef(null);

  /*
  * if a vc is passed in on the 'vc' prop then verify it
  */
  useEffect(() => {
     if (vc && wcRef.current && typeof wcRef.current.verify === 'function') {
      wcRef.current.verify(vc);
    }
  }, [vc]); 

  /*
  * if a did list is passed in on the 'issuerDids' prop then set it
  */
  useEffect(() => {
     if (issuerDids && wcRef.current && typeof wcRef.current.setIssuerDids === 'function') {
      wcRef.current.setIssuerDids(issuerDids)
    }
  }, [issuerDids]); 

  return (
    <div>
      <veri-good ref={wcRef}>
        {children}
      </veri-good>
    </div>
  );
};

export default VeriGood