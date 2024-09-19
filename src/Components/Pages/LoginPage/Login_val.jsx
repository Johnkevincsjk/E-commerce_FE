import * as Yup from 'yup'


const Login_val = Yup.object({

    mailid: Yup.string().required('Enter mail id'),
    password: Yup.string().required('Enter password')

})


export default Login_val