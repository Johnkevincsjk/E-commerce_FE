import * as Yup from 'yup'

const Signin_val = Yup.object({

    username: Yup.string().required('Enter full name'),
    mailid: Yup.string().email('Enter valid mail id').required('Enter mail id'),
    password: Yup.string().min(8, "Minimum 8 charectors").required('Enter new password'),
    Cpassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required('re-enter password')
})


export default Signin_val