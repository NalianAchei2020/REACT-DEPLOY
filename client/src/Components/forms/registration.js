
import {useState, useRef, useEffect } from 'react';
import axios from 'axios';
import {Link, Navigate} from 'react-router-dom';
import {CheckCircle, Clear, ErrorOutline} from '@material-ui/icons';
import './reg.css'

const USER_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

const PASS_REGEX = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/


export const Form =() =>{

    const userRef = useRef('');
    const errRef = useRef('');

    const [username, setusername] = useState('')
    const [validName, setvalidName] = useState(false);
    const [userFocus, setuserFocus] = useState(false);

    const [password, setpassword] = useState('');
    const [validPwd, setvalidPwd] = useState(false);
    const [pwdFocus, setpwdFocus] = useState(false);

    const [matchPwd, setmatchPwd] = useState('');
    const [validMatch, setvalidMatch] = useState(false);
    const [matchFocus, setmatchFocus] = useState(false);

    const [errMsg, seterrMsg] = useState('');
    const [success, setsuccess] = useState(false);

    useEffect(()=>{
        userRef.current = username;
    }, [username]);
    useEffect(()=>{
        errRef.current = errMsg;
    }, [errMsg]);


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
        const match = password === matchPwd;
        setvalidMatch(match)
    }, [password, matchPwd]);
    

    useEffect(()=>{
        seterrMsg('');
    }, [username, password, matchPwd]);
    

const postname = async (e) => {
    e.preventDefault();
    const V1 = USER_REGEX.test(username);
    const V2 = PASS_REGEX.test(password);
    if(!V1 || !V2){
        seterrMsg("Invalid Entry");
        return;
    }
    try{
     const response = await axios.post("https://plan-backend.onrender.com/registration", 
     JSON.stringify({username:username, password:password}), 
     {
         headers: {'Content-Type': 'application/json'},
         withCredentials: false
     });
     console.log(response.data);
     console.log(response.accessToken);
     console.log(JSON.stringify(response));
     setsuccess(true);
     //clear all input fields
    } catch (err){
       if(!err?.response){
           seterrMsg('No Server Response');
       }
       else if(err.response?.status === 409){
              seterrMsg('User Name Taken');
       } else {
           seterrMsg('Registration Failed')
       }
       errRef.current = errMsg;
    }
}
    return(
        <>
        {success ? (
            <section>
        <Navigate to="/multi-step" />; 
            </section>
        ) : (
        
        <section className="container-fuild" style={{backgroundColor:"lightblue" }}><br/>
            <form className="form-group" onSubmit={postname}>
            <div className="container-lg" id="container2" >
             <div>
                 <center>
                 <h4 style={{color:"brown"}} id="regh4">Start palining your business for free</h4><hr/>
                 </center><br/><br/>
             </div>
             <p ref={errRef} id='error' className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
                <div>
                {validName && (
                     <section>
                     <CheckCircle style={{color:"green"}}></CheckCircle>
                 </section>

                ) }
                {userFocus && !validName && username &&(
                    <section>
                        <Clear style={{color:"red"}}></Clear>
                    </section>
                )}

                <input type="text" name="username"
                ref = {userRef}
                autoComplete="off"
                required
                aria-invalid = {validName ? "false" : "true"}
                aria-describedby = "uidnote"
                onFocus={()=> setuserFocus(true)}
                onBlur = {()=> setuserFocus(false)}
                 value={username} 
                 onChange={(e)=>{setusername(e.target.value);}}
                 className="form form-control" placeholder='Email'/><br></br>
                 <p id='uidnote'></p>
                     {userFocus && username && !validName &&
                     (<section style={{color: "red"}}>
                         <p>
                     <ErrorOutline style={{backgroundColor:"grey", color:"white"}}></ErrorOutline>
                     4 to 24 characters  
                     Letters, numbers, underscores and hyphens allowed
                     </p>
                     </section>
                     )}
                 
                 </div>
                 <div className='row'>
                <div className='col-md 6'>
                {validPwd && (
                     <section>
                     <CheckCircle style={{color:"green"}}></CheckCircle>
                 </section>

                ) }
                {pwdFocus && !validPwd && password &&(
                    <section>
                        <Clear style={{color:"red"}}></Clear>
                    </section>
                )}
                <input type="password" name="password"
                autoComplete="off"
                required
                aria-invalid = {validPwd ? "false" : "true"}
                aria-describedby = "pwdnote"
                onFocus={()=> setpwdFocus(true)}
                onBlur = {()=> setpwdFocus(false)} 
                value={password} 
                onChange={(e)=>{setpassword(e.target.value);}}
                className="form form-control" placeholder='Password'></input><br></br>
                                 <p id='uidnote'>
                     {pwdFocus && password && !validPwd &&
                     (<section style={{color: "red"}}> 
                     <ErrorOutline style={{backgroundColor:"grey", color:"white"}}></ErrorOutline>
                     8 to 24 characters <br/>
                     Must include upper and lower case <br/> 
                     letters , numbers and special characters
                     </section>
                     )}
                 </p>
                </div>
                <div className='col-md 6'>
                {validMatch || matchPwd && (
                     <section>
                     <CheckCircle style={{color:"green"}}></CheckCircle>
                 </section>

                ) }
                {matchFocus && !validMatch && !matchPwd &&(
                    <section>
                        <Clear style={{color:"red"}}></Clear>
                    </section>
                )}
                    <input type="password" 
                    autoComplete="off"
                    required
                    aria-invalid = {validPwd ? "false" : "true"}
                    aria-describedby = "confirmnote"
                    onFocus={()=> setmatchFocus(true)}
                    onBlur = {()=> setmatchFocus(false)} 
                    value={password} 
                    onChange={(e)=>{setmatchPwd(e.target.value);}}
                    placeholder='Comfirm Password' name='pass'
                     className='form-control'/><br/>
                      {matchFocus && matchPwd && !validMatch &&
                     (<section style={{color: "red"}}> 
                     <ErrorOutline style={{backgroundColor:"grey", color:"white"}}></ErrorOutline>
                     Must match the<br/> first password
                     </section>
                     )}
                </div>
                </div>
                <div><br/>
                    <div>
                        <p>By clicking you accept our <Link to ='/' style={{textDecoration:"none"}}>Terms</Link></p>
                    </div>
                   <p className='row'>
                       <p className='col-md 6'>
                   <button  className="btn btn-success btn-xxlg"
                   disabled = {!validName && !validPwd && !validMatch ? true : false}
                    >Create Account</button>
                   </p>
                   <p className='col-md 6'>
                   <a href= "/SIGNIN" style={{textDecoration:"none", textAlign:"justify"}}>Have an account?</a>
                   </p>
                   </p>
                 
                </div>
                </div><br/>
            </form>
        </section>
        )}
        </>

    );
}