import{useState,useEffect} from 'react'
const useForm = (callback,validate) =>{
   const[values,setValues] = useState({
    username:'',
    email:'',
    password:'',
    password2:'',
    description:'',
    select:''
   }) 
const[errors,setErrors] = useState({})
   const[isSubmitting,setIsSubmitting] = useState(false)


   const handleChange = (e) =>{
    const{name,value} = e.target
    setValues({
        ...values,
        [name]:value
    })
   }
   const handleSubmit = e => {
    e.preventDefault();
    console.log(values)
    

    setErrors(validate(values));
    setIsSubmitting(true);
   }
  

//display errors
useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting) {
        callback();
    }
},
    [errors]
);
return{handleChange,values,handleSubmit,errors};
}

export{ useForm}