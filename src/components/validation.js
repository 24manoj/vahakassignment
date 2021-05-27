import * as yup from 'yup';
import fromModel from './formModel';
const { source, destination, travellers, cartype, bidamount, phone, cuname, option, otp } = fromModel || {};
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default [
  yup.object().shape({
    [source.name]: yup.string().required(source.errorMessage),
    [destination.name]: yup.string().required(destination.errorMessage),
    [cartype.name]: yup.string().required(cartype.errorMessage),
    [travellers.name]: yup
      .number()
      .min(1)
      .when('cartype', (car, schema) => {
        return schema.test({
          test: tra => (car === 'Suv' ? tra <= 6 && tra > 0 : tra <= 4 && tra > 0),
          message: car === 'Suv' ? 'Travellers cannot be more then 6' : 'Travellers canntot be more then 4',
        });
      }),
  }),
  yup.object().shape({
    [bidamount.name]: yup.string().required(bidamount.errorMessage),
  }),
  yup.object().shape({
    [bidamount.name]: yup.number().integer().required(bidamount.errorMessage),
    [phone.name]: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(phone.errorMessage),
    [cuname.name]: yup.string().required(cuname.errorMessage),
  }),
  yup.object().shape({
    [otp.name]: yup.number().integer().required(otp.errorMessage),
  }),
];
