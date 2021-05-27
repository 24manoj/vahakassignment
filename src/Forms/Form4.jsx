import { ErrorMessage, Field, useFormikContext } from 'formik';
import React from 'react';

export default function Form4() {
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
        <br />
        we have sent an otp to your mobile number .Please enter it below to submit your bid<strong>{phone}</strong>
        <br />
        <Field type='number' maxLenth={4} name='otp' />
        <ErrorMessage name='otp' />
        <a href=''>Resend OTP Again </a>
      </div>
    </div>
  );
}
