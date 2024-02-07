import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Layout from '@/app/theme/layout';

const Core = (props) => {
  const {
      Content,
  } = props;

  const router = useRouter();

	const [values, setValues] = React.useState({
    showPassword: false,
  })
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, confirmPassword: !values.confirmPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
        confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Email required'),
        password: Yup.string().required('Password required').min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string().required('Confirm Password required').oneOf([Yup.ref('password')], 'Passwords must match'),
    }),
    onSubmit: (values) => {
      const valueToSubmit = {
        ...values,
      };

      handleSubmit(valueToSubmit);
    },
  });

  const handleSubmit = async () => {
    try {
        localStorage.setItem('isLogin', false)
        router.push('/')
        window.toastMessage({
          open: true,
          variant: 'success',
          text: 'Register Success',
        });
    } catch (err) {
      console.log(err)
    }
  };

  return (
  	<>
      <Layout>
  	    <Content
  	    	values={values}
  	    	formik={formik}
  	    	handleChange={handleChange}
  	    	handleClickShowPassword={handleClickShowPassword}
  	    	handleMouseDownPassword={handleMouseDownPassword}
  	    	router={router}
          handleClickShowConfirmPassword={handleClickShowConfirmPassword}
  	    />
      </Layout>
	  </>
   );

};

export default Core;