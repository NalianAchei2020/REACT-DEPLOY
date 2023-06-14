/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import "./login.css";
import {Navigate} from 'react-router-dom'
import {useState, useRef, useEffect} from 'react';
import axios from 'axios';

const USER_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

const PASS_REGEX = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/


export const Signin =  (props)=>{
  const userRef = useRef('');
  const errRef = useRef('');
  const loadRef = useRef();

  const [username, setusername] = useState('')
    const [validName, setvalidName] = useState(false);
    
    const [password, setpassword] = useState('');
    const [validPwd, setvalidPwd] = useState(false);
   

    const [errMsg, seterrMsg] = useState('');
    const [success, setsuccess] = useState(false);
    const [loading, setloading] = useState(false)

    useEffect(()=>{
      userRef.current = username;
  }, [username]);
  useEffect(()=>{
      errRef.current = errMsg;
  }, [errMsg]);
  useEffect(()=>{
     loadRef.current = loading;
  }, [loading]);


  useEffect(()=>{
      const result = USER_REGEX.test(username);
      console.log(result);
      console.log(username);
      setvalidName(result);
  }, [username]);

  useEffect(()=>{
      const result = PASS_REGEX.test(password);
      console.log(result);
      console.log(password);
      setvalidPwd(result);
  }, [password]);
  

  useEffect(()=>{
      seterrMsg('');
  }, [username, password]);
  
  const login = async (e) => {
    e.preventDefault();
    const V1 = USER_REGEX.test(username);
    const V2 = PASS_REGEX.test(password);
    if(!V1 || !V2){
        seterrMsg("Invalid Entry");
        return;
    }
    try{
      const response = await axios.post("https://plan-backend.onrender.com/login", 
      JSON.stringify({username:username, password:password}), 
      {
          headers: {'Content-Type': 'application/json'},
          withCredentials: false
      });
      console.log(JSON.stringify(response.data));
      console.log(JSON.stringify(response));
      const accessToken = response?.data?.token;
     
      setusername('');
      setpassword('')
      setsuccess(true);
    
     } catch (error){
        if(!error?.response){
            seterrMsg('No Server Response');
        }
        else if(error.response?.status === 401){
               seterrMsg('User Name Not Found');
        } else {
            seterrMsg('Login Failed')
        }
        errRef.current = errMsg;
     }
  }

  return(
    <>
            {success ? (
            <section>
                
                   <Navigate to="/multi-step"/>
            </section>
        ) : (
    <section className="container-fluid" style={{backgroundColor:"lightblue" }}>
    <div className="main">
      <div className="sub-main">
        <div>
        <div className="imgs">
          <div className="container-image">
            <img src={"images/profile.jpg"} alt="profile" className="profile"/>
          </div>
        </div>
  
        <div>
       <h1>Login</h1><hr/>
       <form >
       <div><br/>
       <p ref={errRef} id="error" className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
       <input type="text" name="email"
        ref = {userRef}
        autoComplete="off"
        required
        aria-invalid = {validName ? "false" : "true"}
        aria-describedby = "uidnote"
        placeholder="Email" className="name" 
        value={username} onChange={(e)=>{setusername(e.target.value);}}/>
       </div><br/>
       <div>
       <input type="password" name="pass" 
       autoComplete="off"
       required
       aria-invalid = {validPwd ? "false" : "true"}
       aria-describedby = "pwdnote"
       placeholder="Password" className="pass"  
       value={password} onChange={(e)=>{setpassword(e.target.value);}}/>
       </div>
       <div className="login-button">
       <button  disabled = {!validName && !validPwd ? true : false} id="button1"
       onClick={login}><b>Login</b></button>
       </div>
       </form>
       <div className="link">
         <p>
           <a href="#">Forget Password?</a>   or    <a href="/registration">Sign Up</a>
         </p>
       </div>
       </div>
        </div>
      </div>
    </div>
    </section>
     )
        }
    </>
  )
}