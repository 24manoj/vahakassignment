import { ErrorMessage, Field, useFormikContext } from 'formik';
import React from 'react';
export default function Form2() {
  const {
    values: { source, destination, travellers, cartype },
  } = useFormikContext() || {};

  return (
    <div>
      <div>
        <p>Journy Details</p>
        {source}/{destination}
        <br />
        {travellers}persons,{cartype}
      </div>
      <div>
        <div>
          <Field type='number' name='bidamount' />
          <ErrorMessage name='bidamount' />
        </div>
        <Field type='checkbox' name='isratenegiotable' />
      </div>
    </div>
  );
}
