import React , {useState} from 'react';
import { auth } from '../../firebase';
import {toast} from 'react-toastify';
import {  sendSignInLinkToEmail } from "firebase/auth";



const Register = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = async (e)=> {
        e.preventDefault(); 
        console.log( process.env.REACT_APP_REGISTER_REDIRECT_URL);
        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL ,
            handleCodeInApp : true ,
        };

        await sendSignInLinkToEmail(auth , email, config);
        toast.success(`Email is sent to ${email} , click the link to complete your registeration`) ;
   //save user email in local storage
        window.localStorage.setItem('emailForRegistration', email)
        
        //clear state 
        setEmail("");

    };
    const registerForm= () => 
    <form onSubmit={handleSubmit}>
      <input type="email" className="form-control" value={email} onChange={e=> setEmail(e.target.value)} autoFocus/>
      <button type='submit' className='btn btn-raised'>Register</button>
        
    </form>
    return (
        <div className="container p-5 ">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4> Register</h4>
                    {registerForm()}
                </div>
                
            </div>
            
        </div>
    )
}



export default Register ; 