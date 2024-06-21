import React from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetInputValue } from '../../hooks/useGetInputValue'
import axios from '../../api'
const initialState = {
  UserName: "",
  password: ""
}
const Login = () => {
  const {formData, setFormData, handleChange} = useGetInputValue(initialState)
  const handleLogin = e => {
    e.preventDefault()
    setFormData(initialState)
    axios
    .post("/auth/sign-in", formData)
    .then(res => {
     localStorage.setItem( "x-auth-token",res.data.data.token),  toast.success("Success");
    })
    .catch(error => {
      toast.error("Wrong Password or Username");
    });
}
  return (
    <div className='login'>
     <form onSubmit={handleLogin}>
      <input value={formData.UserName} onChange={handleChange} type="text" name="UserName" placeholder='Username' />
      <input value={formData.password} onChange={handleChange} type="password" name='password' placeholder='Password'/>
      <button>Login</button>
     </form>
     <ToastContainer/>
    </div>
  )
}

export default Login
