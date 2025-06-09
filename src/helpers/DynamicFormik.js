import { useFormik } from 'formik';


const DynamicFormik = (initialValues, validationSchema, onSubmit) => {

  return useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
    enableReinitialize: true, // This allows the form to reinitialize when initialValues change
  });
};

export default DynamicFormik;