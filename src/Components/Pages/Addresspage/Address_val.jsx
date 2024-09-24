import * as Yup from 'yup'


const Address_val = Yup.object({

    mailid: Yup.string().email("Enter registered mailid").required('Mail id is required'),
    receiverName: Yup.string().required("Person's Name required"),
    address: Yup.string().required('Enter correct address'),
    state: Yup.string().required('Enter State'),
    pincode:  Yup.string().matches(/^\d{6}$/, "Enter a valid 6-digit pincode").required('Enter Pincode')


})


export default Address_val