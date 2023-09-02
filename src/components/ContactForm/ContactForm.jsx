import { Formik } from 'formik';
import * as Yup from 'yup';
import { SubmitForm, ErrorMsg, FormField, Styledlabel, SubmitBtn} from './ContactForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    number: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^\d+$/, 'Must only contain digits') 
    .required('Required'),
});


export const ContactForm  = ( {onAdd}) =>{

    return <>
        <div>
        <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, action) => {
        onAdd(values);
        action.resetForm();
      }}
    >
      <SubmitForm>
        <Styledlabel htmlFor="name">Name</Styledlabel>
        <FormField id="name" name="name" 
        placeholder="Draco" 
        />
        <ErrorMsg component="span" name="name" />

        <Styledlabel htmlFor="number">Number</Styledlabel>
        <FormField id="number" 
            name="number"   
            type="tel"
            placeholder="123-45-67"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
         />
          <ErrorMsg component="span" name="number" />
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </SubmitForm>
    </Formik>
         
        </div>
       </>

  
}