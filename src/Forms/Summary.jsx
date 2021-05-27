import { useFormikContext } from 'formik';
import React from 'react';

export default function Summary() {
  const {
    values: { source, destination, travellers, cartype, phone, cuname, option },
  } = useFormikContext() || {};
  return (
    <div>
      <div>
        <p>Journey details</p>
        {source}/{destination}
        <br />
        {travellers}persons,{cartype}
      </div>
      <div>
        <p>Bid Details</p>
        {phone}
        <br />
        {cuname}
        <br />
        {option}
      </div>
    </div>
  );
}
