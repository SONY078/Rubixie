import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from 'react';



const Form =()=>{

const [name,setName] = useState('');
const [mail,setMail] = useState('');
const [phone,setPhone] = useState();

const onSubmit =(event) => {
  
console.log(event);
  Clear();
}
function Clear()
{
  setName('');
  setMail('');
  setPhone('');
}

const schema = yup.object({
    name: yup.string().required(),
    email:yup.string().required().matches(
        /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,
        "It should be a proper email"
      ),
    phone:yup.string().required().min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
  
  }).required();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });





  return (
    <div id='container'>

        <form onSubmit={handleSubmit(onSubmit)} action="mailto:sonycharles078@gmail.com" method="post" encType="text/plain">
            <div id="subf">
            <h1>GET IN TOUCH</h1>
            <h4>Please complete the form and we will get back to you.</h4>
            </div>
            <hr />
            <div id="sub2">
                <label htmlFor="">Name:</label>
            <input type={"text"}   {...register("name")} onChange={e => setName(e.target.value)} value={name}/> <br></br>
            <p style={{color:"red"}}>{errors.name?.message}</p>
            <br />
            <label htmlFor="">Email:</label>
            <input type={"text"}  {...register("email")} onChange={e => setMail(e.target.value)} value={mail}/> <br></br>
            <p style={{color:"red"}}>{errors.email?.message}</p><br />
            <label htmlFor="">Phone:</label>
            <input type={"text"}  {...register("phone")} onChange={e => setPhone(e.target.value)} value={phone}/> <br></br>
            <p style={{color:"red"}}>{errors.phone?.message}</p>
            <button type='submit'>
                Submit 
            </button>
            </div>





        </form>

    </div>
  )
}

export default Form