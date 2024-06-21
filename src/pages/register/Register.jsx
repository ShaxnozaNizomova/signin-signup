import React from 'react'
import { useGetInputValue } from '../../hooks/useGetInputValue'
import axios from '../../api/index'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  UserName: "",
  password: "",
  FirstName: "",
  LastName: "",
  phones: ""
}
const Register = () => {
  const {formData, setFormData, handleChange} = useGetInputValue(initialState)
  const handleCreateUser = e =>{
    formData.phones = [formData.phones]
    e.preventDefault()
    axios
    .post("/auth/user/sign-up", formData)
    .then(res => {
      toast.success("Success");
    })
    .catch(error => {
      toast.error("Error");
    });
    setFormData(initialState)
    console.log(formData)
  }
  return (
    <div className='login'>
      <form onSubmit={handleCreateUser}>
        <input type="text" name='FirstName' placeholder='FirstName' value={formData.FirstName} onChange={handleChange}/>
        <input type="text" name='LastName' placeholder='LastName' value={formData.LastName} onChange={handleChange}/>
        <input type="text" name='UserName' placeholder='UserName' value={formData.UserName} onChange={handleChange}/>
        <input type="password" name='password' placeholder='Password' value={formData.password} onChange={handleChange}/>
        <input type="number" name='phones' placeholder='Phone number' value={formData.phones} onChange={handleChange}/>
        <button>Sign up</button>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Register
