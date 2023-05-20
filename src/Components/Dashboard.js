//صفحه ی داشبورد که در واقع برای دسترسی به آن کاربر باید لاگین کند
import React,{useState} from 'react'
import Login from './Login'
import SignUp from './SignUp'
import useToken from './app/useToken'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Dashboard = () => {
  const {token, setToken} = useToken() 
    if(!token){
        return <Login setToken={setToken}/>
      
    }
  
}

export default Dashboard