import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import type { IContactForm } from '../types/form'
import { Field, Form, Formik, type FormikHelpers } from 'formik'
import * as Yup from "yup";
const initialValue: IContactForm = {
    name: "",
    email: "",
    message: ""
}
// Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

export const ContactForm = () => {
    const handleSubmit = (values: IContactForm, { resetForm }: FormikHelpers<IContactForm>) => {
        console.log("values", values);
        resetForm();
    }
    return (
        <>
            <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant='h5' gutterBottom>Contact Us</Typography>
                <Formik
                    initialValues={initialValue}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {({ errors, touched, resetForm, handleBlur }) => {
                        console.log("touched", touched);
                        return (
                            <Form>

                            <Stack spacing={2}>
                                {/* <TextField
                                    name='name'
                                    // value={values.name}
                                    // onChange={handleChange}
                                    placeholder='Name'
                                    size='small'
                                    // onBlur={handleBlur} // This apparently updates `touched`?
                                    error={touched.name && !!errors.name}
                                    helperText={touched.name && errors.name}
                                /> */}
                                <Field 
                                    name='name'
                                    as={TextField}
                                    placeholder='Name'
                                    size='small'
                                    error={touched.name && !!errors.name}
                                    helperText={touched.name && errors.name}
                                />
                                <Field
                                    as={TextField}
                                    name='email'
                                    placeholder='Email'
                                    size='small'
                                    error={touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}

                                />
                                <Field
                                    as={TextField}
                                    name='message'
                                    placeholder='Message'
                                    multiline
                                    rows={3}
                                    size='small'
                                    error={touched.message && !!errors.message}
                                    helperText={touched.message &&errors.message}
                                />
                                <Stack direction="row" spacing={2} justifyContent="center">
                                    <Button type='submit' variant='contained'>Submit</Button>
                                    <Button type='reset' variant='outlined' onClick={()=>resetForm()}>Reset</Button>
                                </Stack>
                            </Stack>
                        </Form>
                    )}
                }
                </Formik>
            </Paper>
        </>
    )
}
