import './App.css';
import schemaValidation from './components/validation';
import { Formik, Form } from 'formik';
import Form1 from './Forms/Form1';
import Form2 from './Forms/Form2';
import Form3 from './Forms/Form3';
import Form4 from './Forms/Form4';
import Summary from './Forms/Summary';
import initialValues from './components/initialvalues';
import { useState } from 'react';

const getRenderingForm = step => {
  switch (step) {
    case 0:
      return <Form1 />;
    case 1:
      return <Form2 />;
    case 2:
      return <Form3 />;
    case 3:
      return <Form4 />;
    case 4:
      return <Summary />;
    default:
      <div>404 ERROR</div>;
  }
};
const App = () => {
  const [activeStep, setactiveStep] = useState(0);

  const hadleSubmit = (values, actions) => {
    console.log('dsfdfdf');
    if (activeStep === 4) {
      alert('last step');
    } else {
      setactiveStep(activeStep + 1);

      console.log('eles');
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };
  return (
    <div className='app'>
      {console.log(schemaValidation[activeStep], initialValues)}

      <Formik initialValues={initialValues} validationSchema={schemaValidation[activeStep]} onSubmit={hadleSubmit}>
        <Form>
          {getRenderingForm(activeStep)}
          <button type='submit'>submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default App;
