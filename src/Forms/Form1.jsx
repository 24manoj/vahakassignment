import React from 'react';
import { Field, ErrorMessage, Form } from 'formik';

export default function Form1() {
  return (
    <>
      <div>
        <div>
          <Field name='source' id='source' type='text' />
          <ErrorMessage name='source' />
        </div>
        <div>
          <Field name='destination' id='destination' type='text' />
          <ErrorMessage name='destination' />
        </div>
      </div>
      <div>
        <Field as='select' name='cartype'>
          {['HatchBack', 'Sedan', 'Suv'].map(i => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </Field>

        <ErrorMessage name='carType' />
      </div>
      <div>
        <Field name='travellers' id='travellers' type='number' />
        <ErrorMessage name='travellers' />
      </div>
    </>
  );
}
