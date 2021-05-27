import { ErrorMessage, Field } from 'formik';
import React from 'react';
import Form2 from './Form2';

export default function Form3(props) {
  return (
    <div>
      <Form2 {...props} />
      <Field type='phone' name='phone' maxLength={10} />
      <ErrorMessage name='phone' />
      <Field type='checkbox' name='isupdate' /> getupdate on Whatsapp phone
      <br />
      <Field type='text' name='cuname' />
      <ErrorMessage name='cuname' />
      <br />
      <Field type='text' name='remarks' />
      <ErrorMessage name='remarks' />
    </div>
  );
}
