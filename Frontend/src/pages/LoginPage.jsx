import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthImagePattern from '../components/AuthImagePattern';
import { useChatStore } from '../store/useChatStore';

const LoginPage = () => {

  const [showPassword,setShowPassword]=useState(false);
  const [formData,setFormData]=useState({
    email:"",
    password:"",
  });
  const {login,isLoggingIn}=useAuthStore();
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    login(formData);
  };
  
  return (

    <div className="flex flex-col md:flex-row min-h-screen">
   
    {/* // <div className="min-h-screen grid lg:grid-cols-2"> */}

      <div className="w-full md:w-1/2 flex justify-center items-center bg-white p-6">

    {/* left side */}
    
    <div className="flex flex-col justify-center items-center p-6 sm:p-12">
      <div className="w-full max-w-md space-y-8">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex flex-col items-center gap-2 group">

            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            
            <MessageSquare className="size-6 text-primary"/>

            
            </div>

            <h1 className="text-2xl font-bold mt-2">Sign in Account</h1>
            <p className="text-base-content/60">Get started with your free account</p>

          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
              <Mail  className="size-5 text-base-content/40" />
              </div>
              
              <input type="email" className={`input input-bordered w-full pl-10`}
               
              placeholder="you@gmail.com" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
            </div>
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
              <Lock  className="size-5 text-base-content/40" />
              </div>
              
              <input type={showPassword? "text":"password"} className={`input input-bordered w-full pl-10`}
               
              placeholder="........" value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})}/>

              <button
               type="button"
               className="absolute inset-y-0 right-0 pr-3 flex items-center"
               onClick={()=>setShowPassword(!showPassword)}>
                {showPassword ? (<EyeOff className="size-5 text-base-content/40"/>):(<Eye className="size-5 text-base-content/40"/>)}
               </button>
            </div>
          </div>



          <button type="submit" className="btn btn-primary w-full" disabled={isLoggingIn}>
            {
              isLoggingIn?(<><Loader2 className="size-5 animate-spin"/>
              Loading....</>):("Sign In")}
          </button>

        </form>

        <div className="text-center">
          <p className="text-base-content/60">
          Don't have an account?{" "}
          <Link to="/signup" className="link link-primary">
          Create account
          </Link>
          </p>
        </div>
      </div>
    </div>

    {/* right side */}
    {/* <AuthImagePattern
    title="Join Our community"
    subtitle="Connect with friends, share moments, and stay in touch with you"
    
    /> */}

     
  </div>

     <div className="w-full md:w-1/2 flex justify-center items-center bg-base-200 p-6">
    <AuthImagePattern title="Join Our Community" subtitle="Connect with friends, share moments, and stay in touch" />
  </div>


  </div>
  )
};

export default LoginPage
