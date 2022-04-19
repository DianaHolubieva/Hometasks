import React from 'react';
import {Formik, Form, Field} from 'formik';
import { connect } from 'react-redux';
import { authLogin } from '../../actions';

const LoginForm = (props) => {
    const {authLoginAction} = props;
    const initialUserValues = {
        password: '',
        emailUser: '',
    };
    const submitHandler = (values, formikBag) => {
        authLoginAction(values);
        formikBag.resetForm();
    };
    return(
        <Formik initialValues={initialUserValues} onSubmit={submitHandler}>
            {formikProps => {
                return(
                <Form>
                    <Field type='password' name="password" />
                    <Field name="emailUser" />
                    <button type='submit'>submit</button>
                </Form>
                );
        }}
        </Formik> 
    );
}

const mapStateToProps = state => state.userReducerStates;

 const mapDispatchToProps = dispatch => {
     return{
        authLoginAction: data => {
             dispatch(authLogin(data));
         }
     };
 };

 export default connect(mapStateToProps, mapDispatchToProps) (LoginForm);