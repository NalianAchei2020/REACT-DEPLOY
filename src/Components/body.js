
import './body.css';
import {Link} from 'react-router-dom';


export  const Body = ()=>{
    return(
    <div className="div">
<div className="container-fluid p-5  text-white" style={{backgroundColor:"rgb(49, 49, 109)"}}>
<div className="row">
    <div className="col-lg-8" id='text1'>
        <br></br><br></br>
    <h1>Plan and grow your </h1>
    <h1>business with EasyPlan</h1>
    <h6> Write a business plan online for free</h6><br></br><br></br>
    <h3>The automatic business plan generator</h3>
    <h6>Easily write a business plan, secure funding and get insights to help you reach you dreams.</h6><br></br><br/><br/>
    </div>
    <div className='col-lg-8'>
        
    <Link to="/signin">   
   <button type="button" className="btn btn-success btn-lg" id="buttonbody1" >START YOUR PLAN</button></Link>
   <button type="button" className="btn btn-success btn-lg" id='buttonbody2'>WATCH VIDEO</button>
    </div>
</div><br></br>
</div>
</div>
    );
}