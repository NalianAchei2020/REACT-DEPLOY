import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import "./form.css";
import {useRef, useState, useEffect} from 'react'
import {useForm} from 'react-hook-form';
//import jsPDF from 'jspdf';
import {useReactToPrint}  from 'react-to-print';
import {ChevronLeft} from '@material-ui/icons';
import 'chart.js/auto';
import {Chart} from 'react-chartjs-2';
 export const Multistep = ()=>{
     //connect to backend
     //set variables
     const [comname, setcomname] = useState('')
    const [adress, setadress] = useState('')
    const [city, setcity] = useState('')
    const [country, setcountry] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [website, setwebsite] = useState('')
    const [ceoname, setceoname] = useState('')
    const [company, setcompany] = useState('')
    const [employee, setemployee] = useState('')
    //business info
    const [month, setmonth] = useState('');
    const [year, setyear] = useState('');
    const [legalinfo, setlegalinfo] = useState('')
    const [biztype, setbiztype] = useState('')
//past performance
const [revenue, setrevenue] = useState('')
const [profit, setprofit] = useState('')
const [balance, setbalance] = useState('')
//product/service
const [productService, setproductService] = useState('')
const [currencySymbol, setcurrencySymbol] = useState('')
const [year1 , setyear1] = useState('')
const [year2 , setyear2] = useState('')
const [year3 , setyear3] = useState('')
//revenue
const [yr1, setyr1] = useState('')
const [yr2, setyr2] = useState('')
const [yr3, setyr3] = useState('')
//problem solved
const [problem, setproblem] = useState('')
const [solution, setsolution] = useState('')
//marketing
const [targetcustomers, settargetcustomers] = useState('')
const [advantage, setadvantage] = useState('')
const [objective ,setobjective] = useState('')
const [step1 ,setstep1] = useState('')
const [step2 ,setstep2] = useState('')
const [step3 ,setstep3] = useState('')
//finance
const [startcash, setstartcash] = useState()
const [payable, setpayable] = useState()
const [receivable, setreceivable] = useState()
const [accpayable, setaccpayable] = useState()
const [percentage, setpercentage] = useState()
const [year11, setyear11] = useState(Number)
const [year12, setyear12] = useState(Number)
const [year13, setyear13] = useState(Number)
//contributions, loans and draws
const [year21, setyear21] = useState(Number)
const [year22, setyear22] = useState(Number)
const [year23, setyear23] = useState(Number)
//draws
const [year31, setyear31] = useState()
const [year32, setyear32] = useState()
const [year33, setyear33] = useState()
const [loanamount, setloanamount] = useState()
const [interest, setinterest] = useState()
const [month1, setmonth1] = useState()
const [loanyear, setloanyear] = useState()
//asset
const [assetname, setassetname] = useState('')
const [cost, setcost] = useState()
const [asset1, setasset1] = useState()
const [cost1, setcost1] = useState()
const [asset2, setasset2] = useState()
const [cost2, setcost2] = useState()

//addition 
 const draws = parseInt(year31) + parseInt(year32) + parseInt(year33); 
 const cashin1 = parseInt(yr1)+parseInt(year21);   
 const cashin2 = parseInt(yr2)+parseInt(year22); 
 const cashin3 = parseInt(yr3)+parseInt(year23); 
 const cashout1 = parseInt(cost1) + parseInt(cost2) + parseInt(cost) + parseInt(year31) + parseInt(year11) + parseInt(year1);
 const cashout2 = parseInt(cost1) + parseInt(cost2) + parseInt(cost) + parseInt(year32) + parseInt(year12) + parseInt(year2);
 const cashout3 = parseInt(cost1) + parseInt(cost2) + parseInt(cost) + parseInt(year33) + parseInt(year13) + parseInt(year3);
    
   
   const contri = parseInt(year21) + parseInt(year22) + parseInt(year23)
   const cashbal1 = parseInt(year21) + parseInt(loanamount) + parseInt(startcash)
   const cashbal2 = parseInt(year22) + parseInt(loanamount) + parseInt(startcash)
   const cashbal3 = parseInt(year23) + parseInt(loanamount) + parseInt(startcash)
   const netcash1 = cashin1 - cashout1
   const netcash2 = cashin2 - cashout2
   const netcash3 = cashin3 - cashout3
   

   
    
    
    const totalexpense = parseInt(year11) + parseInt(year12) + parseInt(year13);
    const totalasset = parseInt(cost) + parseInt(cost1) + parseInt(cost2);
    const COGS = parseInt(year1)+ parseInt(year2) +parseInt(year3);
    const totalrevenue = parseInt(yr1) + parseInt(yr2) + parseInt(yr3); 
    const gross = parseInt(totalrevenue) - parseInt(COGS);
    const net = parseInt(totalrevenue) - parseInt(totalexpense);
    const avegross = parseInt(gross)/3;
    const averevenue = parseInt(totalrevenue)/3;
    const grossmargin = (parseInt(avegross)/parseInt(averevenue))*100;

    const gross1 = parseInt(yr1) -parseInt(year1);
    const gross2 = parseInt(yr2) - parseInt(year2);
    const gross3 = parseInt(yr3) - parseInt(year3);
    const net1 = parseInt(yr1) - parseInt(year11);
    const net2 = parseInt(yr2) - parseInt(year12);
    const net3 = parseInt(yr3) - parseInt(year13);

 const [formStep, setformStep] = useState(0);
 const {register, formState:{errors}} = useForm({mode:'onChange'});

         const completeformStep = ()=>{
             setformStep(cur => cur + 1);
         }
const previousStep = () =>{
    setformStep(cur => cur-1);
}

   const MAX_STEPS = 9; 

   //chart
   const data = {
    labels: ["Year 1", "Year 2", "Year 3"],
    datasets: [{
        label: 'Sales Forcast',
        data: [[yr1],[yr2], [yr3],],
        backgroundColor: ["pink", "green", "red"],
        borderColor: ["blue", "purple","black"],
        borderWidth: 1
    }],
};

const d1 = {
    labels:["Year One", "Year Two", "Year Three"],
    datasets: [{
        label: 'Profit and loss',
        data: [[net1],[net2], [net3],],
        backgroundColor: ["pink", "green", "red"],
        borderColor: ["blue", "purple","black"],
        borderWidth: 1
    }],
};

    
   //pdf generator,
  const componentRef = useRef();
 
  const print = useReactToPrint({
    content:()=>componentRef.current,
  });
  

    return(
        <>
        <div className="container-fliud" style={{backgroundColor:"lightblue" }}>
            {formStep<MAX_STEPS && (
                <section>
                <div className="formheading">
                <h4>Write your business plan with EasyPlan</h4>
                <small><p>Its easy and free</p></small>
                <p>Fill the form below and generate your plan</p>
            </div><hr/>
                </section>
            )}
             {formStep<MAX_STEPS && (
            <section>
        <form className="form-group"><br/><br/>
        <div className="container-lg" id="maincontainer" >
                <center>
            {formStep<MAX_STEPS &&  (<p id="max"  className="row">
               {formStep>0 && (<p className="col-sm-2"> <button onClick={previousStep} type="button"><ChevronLeft></ChevronLeft> </button></p>)} 
            <p className="col-sm-8"><h6>Step {formStep+1} of {MAX_STEPS}</h6></p>
                </p>)}
                </center>
                { formStep===0 &&(  
                <section>
                    <center>
                <div className="sample-form">
                    <center>
                <h4 style={{fontFamily:"sans-serif "}} className="head1"><b>COMPANY CONTACT INFORMATION</b></h4></center><br/><br/>    
                    <input type="text" name="comname" {...register('comname',{required:{value:true, message:"Please fill field"}})}
                     placeholder="Company Name" className="form-control" value={comname} onChange={(e)=>{setcomname(e.target.value);}}/><br/><br/>
                     {errors.comname && <p>{errors.comname.message}</p>}
                    <input type="text" name="adress" {...register('adress',{required:{value:true, message:"Please fill field"}})}
                     placeholder="Company Address" className="form-control" value={adress} onChange={(e)=>{setadress(e.target.value);}}/><br/><br/>
                    <input type="text" name="city"{...register('city',{required:{value:true, message:"Please fill field"}})}
                     placeholder="City" className="form-control" value={city} onChange={(e)=>{setcity(e.target.value);}}/><br/><br/>
                    <input type="text" name="country" placeholder="Country" className="form-control" value={country} onChange={(e)=>{setcountry(e.target.value);}}/><br/><br/>
                    <input type="text" name="phone" placeholder="Telephone" className="form-control" value={phone} onChange={(e)=>{setphone(e.target.value);}} /><br/><br/>
                    <input type="text" name="email" placeholder="Email" className="form-control" value={email} onChange={(e)=>{setemail(e.target.value);}}/><br/><br/>
                    <input type="url" name="website" placeholder="Website"  className="form-control" value={website} onChange={(e)=>{setwebsite(e.target.value);}}/><br/><br/>
                    <input type="text" name="ceoname" placeholder="Pricipal(CEO) Name" className="form-control" value={ceoname} onChange={(e)=>{setceoname(e.target.value);}}/><br/><br/>
                    <select name="company" id="company" className="form-control" value={company} onChange={(e)=>{setcompany(e.target.value);}}>
                        <option value="startup">Company as:</option>
                        <option value="startup"></option>
                        <option value="startup">Start-Up</option>
                        <option value="growth">Growth</option>
                        <option value="expansion">Expansion </option>
                    </select>
                    <br/><br/>
                    <center><input type="number" name="employee" placeholder="Number of employee" className="form-control" value={employee} onChange={(e)=>{setemployee(e.target.value);}}/><br/><br/>
                    <button type="button" className="new-btn" onClick={completeformStep}>
                     NEXT</button><br/><br/></center>
                    </div>
                    </center>
                    </section>
                 )}
                                  {formStep===1 &&(  
                     <section>
                    <div className="sample-form">
                     <center><h4 style={{fontFamily:"sans-serif "}}className="head1"><b>BUSINESS INFORMATION</b></h4></center><br/><br/>
                     <p>* Starting month and year of business plan</p>        
                              <enter>  <select id ="month" name="month" className="form-control" value={month} onChange={(e)=>{setmonth(e.target.value);}}>
                                    <option value="startMonth">Month</option>
                                    <option value="jan">January</option>
                                    <option value="feb">February</option>
                                    <option value="mar">March</option>
                                    <option value="april">April</option>
                                    <option value="may">May</option>
                                    <option value="june">June</option>
                                    <option value="july">July</option>
                                    <option value="aug">August</option>
                                    <option value="sep">September</option>
                                    <option value="oct">October</option>
                                    <option value="nov">Novermber</option>
                                    <option value="dec">December</option>
                                </select><br/><br/><br/>
                                <select id ="year" name="year" className="form-control" value={year} onChange={(e)=>{setyear(e.target.value);}}>
                                    <option value="startMonth">Year</option>
                                    <option value="2025">2025</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </select></enter>
                    <br/><br/>
                        <div>
                        <p>* Legal information</p>
                       <enter> <select  name="legalInfo" className="form-control" value={legalinfo} onChange={(e)=>{setlegalinfo(e.target.value);}}>
                            <option value=""></option>
                            <option value="sole proprietor">Sole Proprietorship</option>
                            <option value="limited">Limited liability company</option>
                            <option value="partner">Partnership</option>
                            <option value="corp">Corporation</option>
                        </select></enter>
                        </div><br/><br/>
                            <div>
                                <p>* Does business provide a service, manufacture products or both?</p>
                                <center><select id ="biztype" name="biztype" className="form-control" value={biztype} onChange={(e)=>{setbiztype(e.target.value);}}>
                                    <option value=""></option>
                                    <option value="Service Provider">Service provider</option>
                                    <option value="Manufactur Products">Product Manufacturer</option>
                                    <option value="Service Provider and Product Manufacturer">Both</option>
                                    </select></center>
                            </div><br/><br/>
         <label><p>*What problem is your business solving?</p></label> 
      <center><textarea row="60" col="50" name="problem" className="form-control" value={problem} onChange={(e)=>{setproblem(e.target.value);}}></textarea></center><br/> <br/>
      <label><p>* How does it solve the problem?</p></label>
     <center> <textarea row="60" col="50" name="solution"className="form-control" value={solution} onChange={(e)=>{setsolution(e.target.value);}}></textarea></center><br/> <br/>
                                <center>
                            <button type="button" className="new-btn" onClick={completeformStep}
                            >NEXT</button></center>
                            </div>
                            </section>)}

        {formStep===2 &&( 
         <section>
          <div className="sample-form">   
         <center><h4 className="head1"><b>PAST PERFOMANCE</b></h4><br/><br/>
         <p><small>(This section will not appears if business is a startup)</small></p>
<input type="text" name="revenue" va placeholder="Revenue" className="form-control" value={revenue} onChange={(e)=>{setrevenue(e.target.value.replace(/\D/g, ''));}}/><br/><br/>

<input type="text" name="profit" placeholder="Net profit" className="form-control" value={profit} onChange={(e)=>{setprofit(e.target.value.replace(/\D/g, ''));}}/><br/><br/>

<input type="text" name="balance" placeholder="Cash Balance" className="form-control" value={balance} onChange={(e)=>{setbalance(e.target.value.replace(/\D/g, ''));}}/><br/><br/>
<button type="button" className="new-btn" onClick={completeformStep}>NEXT</button></center>
</div>    
         </section>   
         )} 
  {formStep===3 && (
      <section>
     <div className="sample-form">     
         <center> <h4 className="head1"><b>PRODUCT/SERVICE</b></h4></center><br/><br/>
          <p>* Add a product/service offer</p>
        <center><input type="text" name="productService" placeholder="Product/service" className="form-control" value={productService} onChange={(e)=>{setproductService(e.target.value);}}/><br/><br/>
        <input type="text" name="currencySymbol" className="form-control" placeholder="Currency Symbol"  value={currencySymbol} onChange={(e)=>{setcurrencySymbol(e.target.value);}}/><br/><br/></center>
        <p>* Cost of Goods</p>
        <center><input type="number" name="year1" placeholder="Year 1" className="form-control" value={year1} onChange={(e)=>{setyear1(+e.target.value);}}/><br/><br/>
        <input type="number" name="year2" placeholder="Year 2" className="form-control" value={year2} onChange={(e)=>{setyear2(+e.target.value);}}/><br/><br/>
        <input type="number" name="year3" placeholder="Year 3" className="form-control" value={year3} onChange={(e)=>{setyear3(+e.target.value);}}/><br/><br/>
        </center>
        <p>* Revenue Expected</p>
        <center><input type="number" name="yr1" placeholder="Year 1" className="form-control" value={yr1} onChange={(e)=>{setyr1(+e.target.value);}}/><br/><br/>
        <input type="number" name="yr2" placeholder="Year 2" className="form-control" value={yr2} onChange={(e)=>{setyr2(+e.target.value);}}/><br/><br/>
        <input type="number" name="yr3" placeholder="Year 3" className="form-control" value={yr3} onChange={(e)=>{setyr3(+e.target.value);}}/><br/><br/>
        <button type="button" className="new-btn" onClick={completeformStep}>NEXT</button></center>
        </div>
      </section>
  )}   
  
  {formStep===4 && (
      <section>
      <div className="sample-form">    
     <center><h4 className="head1"><b>MARKETING EXPENSE AND TARGET CUSTOMERS</b></h4></center><br/><br/>
     <p>* Who are your target customers?</p>
    <center><textarea row="60" col="50" name="targetcustomers" className="form-control"
    value={targetcustomers} onChange={(e)=>{settargetcustomers(e.target.value);}}></textarea></center><br/><br/>
    <p>* Competitive advantage</p>
   <center> <textarea row="60" col="50" name="advantage" className="form-control"
   value={advantage} onChange={(e)=>{setadvantage(e.target.value);}}></textarea></center><br/><br/>
   <p><label for="objective">*What is the objective of your company</label></p>
 <center><textarea row="60" col="50" name="objective" value={objective} onChange={(e)=>{setobjective(e.target.value);}}
  placeholder="Objective" className="form-control" ></textarea></center> <br/><br/>
   <p>* Enter strategic steps to achieve business objective</p>
   <center>
       <input type="text" name="step1" placeholder="Step One" className="form-control"
       value={step1} onChange={(e)=>{setstep1(e.target.value);}}/><br/><br/>
       <input type="text" name="step2" placeholder="Step Two" className="form-control"
       value={step2} onChange={(e)=>{setstep2(e.target.value);}}/><br/><br/>
       <input type="text" name="step3" placeholder="Step Three" className="form-control"
       value={step3} onChange={(e)=>{setstep3(e.target.value);}}/><br/><br/>
    <button type="button" className="new-btn" onClick={completeformStep}>NEXT</button></center>
    </div>
          </section>
  )}  
  {formStep===5 && (
      <section>
          <div className="sample-form">
          <center><h4 className="head1"><b>FINANCIAL OVERVIEW</b></h4></center><br/><br/>
          <p>* Company cash balance on the you start the business</p>
        <center><input type="number" name="startcash" className="form-control" 
        value={startcash} onChange={(e)=>{setstartcash(+e.target.value);}} required/></center><br/><br/>
        <p>* How many days do you wait to pay bills (account payable)</p>
       <center> <input type="number" name="payable" className="form-control"  
       value={payable} onChange={(e)=>{setpayable(+e.target.value);}} required/></center><br/><br/>
        <p>* Days credit given to customers (account receivable)</p>
       <center> <input type="number" name="receivable" className="form-control" 
       value={receivable} onChange={(e)=>{setreceivable(+e.target.value);}} required/></center><br/><br/>
        <p>* Days credit given by supplier</p>
       <center> <input type="number" name="accpayable" className="form-control"
       value={accpayable} onChange={(e)=>{setaccpayable(+e.target.value);}} required/></center><br/><br/>
        <p>* Percentage of customers you extend credit to %</p>
        <center><input type="percentage" name="percentage" className="form-control"
        value={percentage} onChange={(e)=>{setpercentage(e.target.value);}}  required/></center><br/><br/>
        <p>* Total amount spend on expenses in each year</p>
        <center><input type="number" name="year11" placeholder="Year one" className="form-control"
        value={year11} onChange={(e)=>{setyear11(e.target.value);}} required/><br/><br/>
        <input type="number" name="year12" placeholder="Year Two" className="form-control" 
        value={year12} onChange={(e)=>{setyear12(e.target.value);}} required/><br/><br/>
         <input type="number" name="year13" placeholder="Year Three" className="form-control"
         value={year13} onChange={(e)=>{setyear13(e.target.value);}} required/><br/><br/>
         <button type="button" className="new-btn" onClick={completeformStep}>NEXT</button><br/><br/></center>
          </div>
          </section>
  )}  
  {formStep===6 && (
      <section>
       <div className="sample-form">
         <center><h4 className="head1"><b>CONTRIBUTIONS,LOANS AND DRAWS</b></h4></center><br/><br/>
         <p>* How much cash are the owers contributing each year?</p>
         <center>
         <input type="number" name="year21" placeholder="Year one" className="form-control"
         value={year21} onChange={(e)=>{setyear21(+e.target.value);}} required/><br/><br/>
        <input type="number" name="year22" placeholder="Year Two" className="form-control"
        value={year22} onChange={(e)=>{setyear22(+e.target.value);}} required/><br/><br/>
        <input type="number" name="year23" placeholder="Year Three" className="form-control"
        value={year23} onChange={(e)=>{setyear23(+e.target.value);}} required/><br/><br/>
        </center>
        <p>* How much cash are the owner withdrawing each year?</p>
        <center>
        <input type="number" name="year31" placeholder="Year one" className="form-control"
        value={year31} onChange={(e)=>{setyear31(+e.target.value);}} required/><br/><br/>
        <input type="number" name="year32" placeholder="Year Two" className="form-control"
        value={year32} onChange={(e)=>{setyear32(+e.target.value);}} required/><br/><br/>
        <input type="number" name="year33" placeholder="Year Three" className="form-control"
        value={year33} onChange={(e)=>{setyear33(+e.target.value);}} required/><br/><br/>
        </center>
        <h6>Loan Details</h6>
        <center><input type="number" name="loanamount" placeholder="Total amount of loan" className="form-control"
        value={loanamount} onChange={(e)=>{setloanamount(+e.target.value);}} required/></center><br/><br/>
        <p>* Interest type</p>
        <center><select name="interest" className="form-control"
        value={interest} onChange={(e)=>{setinterest(e.target.value);}} required>
        <option value=""></option>
        <option value="Simple">Simple</option>
        <option value="compound">Compound</option>
        </select><br/><br/></center>
        <p>* When are expecting to receive the fund?</p><br/>
        <p>. Month</p>
        <center>
        <select  name="month1" className="form-control"
        value={month1} onChange={(e)=>{setmonth1(e.target.value);}} required >
        <option value="startMonth"></option>
        <option value="Januay">January</option>
        <option value="Februry">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">Novermber</option>
        <option value="December">December</option>  
        </select><br/>
        </center>
        <p>. Year</p>
        <center>
        <select  name="loanyear" className="form-control"
        value={loanyear} onChange={(e)=>{setloanyear(e.target.value);}} required>
        <option value="startMonth"></option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        </select>
        </center><br/><br/>
        <center>
        <button type="button" className="new-btn" onClick={completeformStep}>NEXT</button>
</center>
           </div>   
      </section>
  )} 

  {formStep===7 && (
      <section>
          <div className="sample-form">
              <center><h4 className="head1"><b>ASSETS AND OTHER ASSETS</b></h4></center><br/><br/>
              
              <center><input type="text" name="assetname" placeholder="Asset Name" className="form-control"
              value={assetname} onChange={(e)=>{setassetname(e.target.value);}}/></center><br/><br/>
              
            <center><input type="number" name="cost"  placeholder="Cost" className="form-control"
            value={cost} onChange={(e)=>{setcost(+e.target.value);}}/></center><br/><br/>
            <h6>Other Asset</h6>
             <p>* Asset one</p>
             <cnter><input type="text" name="asset1" id="asset1" placeholder="Name" className="form-control"
             value={asset1} onChange={(e)=>{setasset1(e.target.value);}}/><br/><br/>
             <input type="number" name="cost1" id="cost1" placeholder="Cost" className="form-control"
             value={cost1} onChange={(e)=>{setcost1(+e.target.value);}}/></cnter><br/><br/>
             <p>* Asset Two</p>
             <center><input type="text" name="asset2"placeholder="Name" className="form-control" 
             value={asset2} onChange={(e)=>{setasset2(e.target.value);}}/><br/><br/>
             <input type="number" name="cost2" id="cost2" placeholder="Cost" className="form-control"
             value={cost2} onChange={(e)=>{setcost2(+e.target.value);}}/><br/><br/>
             <button type="submit" className="new-btn" onClick={completeformStep}
>NEXT</button></center><br/><br/>
          </div>
      </section>
  )} 
  
       {formStep===8 &&(
           <section>
                <center><b><h4 className="head1">Review your information</h4></b></center><br/>
                <hr/>
                <p>Company Contact Info</p><Link to=''>Edit</Link>
                <div className="row" id="row1">
                <div className="col-md 6">
                    <p>Company Name<br/>
                        <b>{comname}</b></p>
                        <p>Company Adress<br/>
                        <b>{adress}</b></p>
                        <p>City<br/>
                        <b>{city}</b></p>
                        <p>Country<br/>
                        <b>{country}</b></p>
                        <p>Telephone<br/>
                        <b>{phone}</b></p>
                </div>
                <div className="col-md-6">
                <p>Email<br/>
                        <b>{email}</b></p>
                        <p>Website<br/>
                        <b>{website}</b></p>
                        <p>Ceo Name<br/>
                        <b>{ceoname}</b></p>
                        <p>Company As<br/>
                        <b>{company}</b></p>
                        <p>Number of employees<br/>
                        <b>{employee}</b></p>
                </div>
                </div>
                <p>Business information</p><Link to=''>Edit</Link>
                <div className="row align-items-start" id="row1">
                 <div className="col">
                     <p>Legal information<br/>
                     <b>{legalinfo}</b></p>
                     </div>
                 <div className="col">
                 <p>Does business provide a service, manufacture products or both?<br/>
                     <b>{biztype}</b></p>
                 </div>
                </div>
                <p>Product/Service</p><Link to=''>Edit</Link>
                <div className="row" id="row1">
                 <div className="col-md 6">
                     <p>Product/Service<br/>
                     <b>{productService}</b></p>
                     <p>Currency Symbol<br/>
                     <b>{currencySymbol}</b></p>
                     <p>Cost of goods</p>
                    <p> Year one <br/>
                     <b>{year1}</b></p>
                     <p>Year Two<br/>
                     <b>{year2}</b></p>
                     </div>
                 <div className="col-md 6">
                     <p>Year Three<br/>
                     <b>{year3}</b></p>
                     <p>Revenue Expected</p>
                     <p>Year One<br/>
                     {yr1}</p>
                     <p>Year Two<br/>
                     {yr2}</p>
                     <p>Year Three<br/>
                     {yr3}</p>
                 </div>
                </div>
                <p>Marketing expensse and target customers</p>
                <div className="row" id="row1">
                    <div className="col-md 6">
                        <p>Who are your target customers?<br/>
                        {targetcustomers}</p>
                        <p>Competitive advantage<br/>
                     {advantage}</p>
                     <p>Objective<br/>
                     {objective}</p>
                    </div>
                    <div className="col-md 6">
                        <p>Strategic steps to acheive business objective</p>
                        <p>step one<br/>
                     {step1}</p>
                     <p>step Two<br/>
                     {step2}</p>
                     <p>step Three<br/>
                     {step3}</p>
                    </div>
                </div>
                <b><p>Financial Overview</p><Link to=''>Edit</Link></b>
                <div className="row" id="row1">
                    <div className="col-md 6">
                    <p>Company's cash balance on the you start business<br/>
                     {startcash}</p>
                     <p>How many days do wait to pay bills?<br/>
                     {payable}</p>
                     <p>Days credit given to customer<br/>
                     {receivable}</p>
                     <p>Days credit given by supplier<br/>
                     {accpayable}</p>
                    </div>
                    <div className="col-md 6">
                        <p>Percentage of customer you extend credit to<br/>
                        <b>{percentage}</b></p>
                        <p>Total amount spend on expenses in each year</p>
                    <p>Year One<br/>
                     {year11}</p>
                     <p>Year Two<br/>
                     {year12}</p>
                     <p>Year Three<br/>
                     {year13}</p>
                    </div>
                </div><br/>
               <center> <button type="button" className="new-btn" onClick={completeformStep}>View Plan</button></center><br/><br/><br/>
                 </section>
       )}
       </div>
        </form><br/><br/>
        </section>
             )}
        
      {formStep===9 && (
          <section>
              <center>
              <br/><br/>
        <div className="container-lg"id="textplan">
          <div  id="content" ref={componentRef}>
          <h3>{comname}</h3>
          <p>Address: {adress}</p>
          <p>City: {city}</p>
          <p>Country: {country}</p>
          <p>Tel: {phone}</p>
          <p>Email:{email}</p>
          <p>Website: {website}</p>
          <p>CEO: {ceoname}</p><br/><br/><br/>
           <p>Three Years Business Plan</p><br/><br/><br/><br/>
           <p>
           <h4>Executive Summary</h4>
           <p>{comname} offers {productService} to {targetcustomers} in {city}. The business
           has a strong market position and  a coherent strategy. It has established clear steps to
           acheive its objective of {objective} in the next three years.
           </p>
           <p>
           {comname} has set targets that they are committed about acheiving in the next three years.
           The business sales forcast is {yr1}{currencySymbol} in the first year, {yr2}{currencySymbol} in the second year,
           and {yr3}{currencySymbol} in the third year. By the final year of this plan, the business will be
           acheiving a net profit of {currencySymbol}. This will represent a good return and provide sufficient
           retained for future development plans. The starting date of this business plan is {month} {year}.
           </p>
           </p>
           <p>
               <h4>The Business</h4>
               <p>
               {comname} is a {company} business wth {employee} employees that operates as a {biztype} and it is form as a {legalinfo} form of
               business. This is an appropriate legal structure for this type of business and will fit well
               with its objectives. The business is owned by {ceoname}, who has experince in this industry. 
               The ceo with his management team will review this structure as the business develops. 
               </p>
               <p>
                   {comname} is well placed to offer {productService} in {city}. The management have the experince
                   and competencies to deliver the target they have set themselves.
               </p>
               <p>
                   The management team are committed in growing the business by providing excellent
                   customer service and building a strong credible brand. This will be demonstrated through
                   their trustworthy relations with customers and other stakeholders. The management team will 
                   take their responsibility seriously and committed to ethical approach to business. 
               </p>
               <p>
                   In summary, {comname} has the appropriate legal form, resources, values and management team to
                   succeed. The combined effect of these factors provides a strong foundation to achieve a rebust
                   and profit business.
               </p>
           </p>

           <p>
               <h4>The Market</h4>
               <p>
                {comname} intends to target {targetcustomers} with its {productService}. This Market
                represent a good opportunity for the business to capitalise on its {advantage} competitive advantage. This will provide
                a strong market position to the business.
               </p>
               <p>
                   {comname} has been able to discover its main competitors and their weaknesses in this attractive market. 
                   This will restrict it capacity to compete. {comname} will be able to exploit the weaknesses of its 
                   competitors to gain market position.
               </p>
               <p>
                   In summary, the high demand for the {comname} offer and the weaknesses identified in its main competitors 
                   provide an attractive market opportunity.
               </p>
           </p>

           <p>
               <h4>Marketing strategy</h4>
               <p>
                   {comname} has an objective of {objective} over the next three years. The management team 
                   has identified key steps to achieve the three year objective and exploit the identified opportunities 
                   this will be systematically implemented over the period. Some of the identified key steps are:<br/>
                   .{step1}<br/>
                   .{step2}<br/>
                   .{step3}<br/>
                   The selection and the sequence of these anctions has been carefully choosen to produce the full potential 
                   of the business opportunity and ensure that the target are achieved. The management team will continuously 
                   monitor the business performance against the targets and make necessary adjustments. At all time, the focus 
                   will achieving the key objectives.
               </p>
               <p>
                   In summary, {comname} has clearly identified opportunities and a systematic plan with clearly articulated
                   stages to achieve its three years objective.
               </p>
           </p>

           <p>
               <h4>Sales Forcast</h4>
               <p>
               The sales forecast indicates that growth will be slow but steady. Growth will be slow because of 
               the time and effort needed to develop the customers. Production or servicing is not the slowing 
               element as the management team of {comname} has experience in this industry.
               </p>
               <p>
               There are a few risks that could have a negative impact on sales. One of these risks inlude inflation. A high rate 
               of inflation will leads to lower level of consumer spending and a fall in sales too. {comname} is able to 
               minimize these risks as much as possible. 
               </p>
               <p>
                   <h6>Table: Sales Forcast</h6><br/>
                   <table className="table">
                       <thead>
                        <tr>
                            <th>Sales</th>
                            <th>Year 1</th>
                            <th>Year 2</th>
                            <th>Year 3</th>
                        </tr>
                        <tr>
                            <td>{productService}</td>
                            <td>{yr1}{currencySymbol}</td>
                            <td>{yr2}{currencySymbol}</td>
                            <td>{yr3}{currencySymbol}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>{yr1}{currencySymbol}</td>
                            <td>{yr2}{currencySymbol}</td>
                            <td>{yr3}{currencySymbol}</td>
                        </tr>
                       </thead>
                   </table>
               </p>
               <Chart type='bar' data={data} height={100} width={150} options={{
                   maintainAspectRation: false
               }}/>
              
           </p><br/>

           <p>
               <h4>Finanacial Forcast</h4>
               <p>
                   {comname} has a starting cash of {startcash}{currencySymbol}. The owers plan to contribute{contri}{currencySymbol} 
                   in capital funding and take out {draws}{currencySymbol} in draws.
               </p>
               <p>
                   Account payables are set {payable} days, while account receivables are set to{receivable} days.  
                   {comname} is forcasting that {percentage} will be on credit.
               </p>
               <p>
                   The business has a loan for a total outstanding debt of {loanamount}{currencySymbol}. In addition, 
                   {comname} is forcasting {totalexpense}{currencySymbol} in total expenses and {totalasset}{currencySymbol} in 
                   the first three years of operation. 
               </p>
               <p>All forcast in business plan utilize Accrual Basis accounting.</p>
               <p>
                   <table className="table">
                       <thead>
                           <tr>
                               <th>Expenses</th>
                               <th>Year 1</th>
                               <th>Year 2</th>
                               <th>Year 3</th>
                           </tr>
                       </thead>
                       <tr>
                           <td>Total expenses</td>
                           <td>{year11}{currencySymbol}</td>
                           <td>{year12}{currencySymbol}</td>
                           <td>{year13}{currencySymbol}</td>
                       </tr>
                       <tr></tr>
                   </table>
               </p><br/>
               <p>
                   <table className="table">
                       <thead>
                           <tr>
                               <th>Fixed Asset</th>
                               <th>Cost</th>
                           </tr>
                       </thead>
                       <tr>
                           <td>{assetname}</td>
                           <td>{cost}{currencySymbol}</td>
                       </tr>
                       <tr>
                           <td>{asset1}</td>
                           <td>{cost1}{currencySymbol}</td>
                       </tr>
                       <tr>
                           <td>{asset2}</td>
                           <td>{cost2}{currencySymbol}</td>
                       </tr>
                       <tr></tr>
                   </table>
               </p><br/>
               <p>
                   <table className="table">
                       <thead>
                           <tr>
                               <th>Owners contributions and Draws</th>
                               <th>Year 1</th>
                               <th>Year 2</th>
                               <th>Year 3</th>
                           </tr>
                       </thead>
                       <tr>
                           <td>Contributions</td>
                           <td>{year21}{currencySymbol}</td>
                           <td>{year22}{currencySymbol}</td>
                           <td>{year23}{currencySymbol}</td>
                       </tr>
                       <tr>
                           <td>Draws</td>
                           <td>{year31}{currencySymbol}</td>
                           <td>{year32}{currencySymbol}</td>
                           <td>{year33}{currencySymbol}</td>
                       </tr>
                       <tr></tr>
                   </table>
               </p><br/>
               <p>
                   <table className="table">
                       <thead>
                           <tr>
                               <th>Loan</th>
                               <th>Amount</th>
                           </tr>
                       </thead>
                       <tr>
                           <td>Capital</td>
                           <td>{loanamount}{currencySymbol}</td>
                       </tr>
                       <tr></tr>
                   </table>
                   </p><br/>
               </p>
               <p>
                   <h4>Profit And Loss</h4>
                   <p>
                       {comname} is forcasting Gross Profit for the first Year of operations at {gross1}{currencySymbol}, increasing 
                       to {gross2}{currencySymbol} in the second year and increasing to {gross3}{currencySymbol} in the third year.
                   </p>
                   <p>
                       The average Gross Margin is {grossmargin}%.
                   </p>
                   <p>
                       Net Profit after all expenses including taxes is projected at {net1}{currencySymbol} in the first year, 
                       {net2}{currencySymbol} in the second year and {net3}{currencySymbol} in the third year.  
                       The owners plan to take a draw or divident of {year31}{currencySymbol} in the first year, 
                       {year32}{currencySymbol} in the second year, and {year33}{currencySymbol} in the third year. 
                   </p>
                   <p>
                       <table className="table">
                           <thead>
                               <tr></tr>
                               <tr>
                                   <th>Profit And Loss Forcast</th>
                                   <th>Year 1</th>
                                   <th>Year 2</th>
                                   <th>Year 3</th>
                               </tr>
                           </thead>
                           <tr>
                               <td><b>Revenue</b><br/>
                               Sales<br/>
                               COGS<br/>
                               Gross Profit
                               </td>
                               <td>
                                   <br/>
                                   {yr1}{currencySymbol}<br/>
                                   {year1}{currencySymbol}<br/>
                                   {gross1}{currencySymbol}
                               </td>
                               <td>
                                   <br/>
                                   {yr2}{currencySymbol}<br/>
                                   {year2}{currencySymbol}<br/>
                                   {gross2}{currencySymbol}
                               </td>
                               <td>
                                   <br/>
                                   {yr3}{currencySymbol}<br/>
                                   {year3}{currencySymbol}<br/>
                                   {gross3}{currencySymbol}
                               </td>
                           </tr>
                           <tr>
                              <td><b>Total</b><br/>
                              Total operating Expenses<br/>
                              Owners Draws/Divident<br/>
                              Net Profit
                              </td> 
                              <td>
                                  <br/>
                              {year11}{currencySymbol}<br/>
                              {year31}{currencySymbol}<br/>
                              {net1}{currencySymbol}<br/>
                              </td>
                              <td>
                                  <br/>
                              {year12}{currencySymbol}<br/>
                              {year32}{currencySymbol}<br/>
                              {net2}{currencySymbol}<br/>
                              </td>
                              <td>
                                  <br/>
                              {year13}{currencySymbol}<br/>
                              {year33}{currencySymbol}<br/>
                              {net3}{currencySymbol}<br/>
                              </td>
                           </tr>
                           <tr></tr>
                       </table>
                   </p>
                   <Chart type='bar' data={d1} height={100} width={150} options={{
                   maintainAspectRation: false
               }}/>
               </p><br/>
               <p>
                   <h4>Cash Flow</h4>
                   <p>
                       The owners have invested a total of {contri}{currencySymbol} and have or are seeking for loans  
                       totaling {loanamount}{currencySymbol}. {comname} is forcasting a net cash flow
                   </p>
                    <p>
                        <table className="table">
                            <thead>
                               <tr></tr>
                                <tr>
                                    <th>Cash Flow Forcast</th>
                                    <th>Year 1</th>
                                    <th>Year 2</th>
                                    <th>Year 3</th>
                                </tr>
                            </thead>
                            <tr>
                                <td><b>Cash In</b><br/>
                                Sales <br/>
                                Contributions<br/>
                                Total cash in
                                </td>
                                <td>
                                {yr1}{currencySymbol}<br/>
                                {year21}{currencySymbol}<br/>
                                {cashin1}{currencySymbol}
                                </td>
                                <td>
                                {yr2}{currencySymbol}<br/>
                                {year22}{currencySymbol}<br/>
                                {cashin2}{currencySymbol}
                                </td>
                                <td>
                                {yr3}{currencySymbol}<br/>
                                {year23}{currencySymbol}<br/>
                                {cashin3}{currencySymbol}
                                </td>
                            </tr>
                            <tr>
                                <td><b>Cash Out</b><br/>
                                COGS <br/>
                                Cash paid for assets<br/>
                                Expenses <br/>
                                Owners draws <br/>
                                Total cash out
                                </td>
                                <td>
                                    
                                    {year1}{currencySymbol}<br/>
                                    {totalasset}{currencySymbol}<br/>
                                    {year11}{currencySymbol}<br/>
                                    {year31}{currencySymbol}<br/>
                                    {cashout1}{currencySymbol}
                                </td>
                                <td>
                                    
                                    {year2}{currencySymbol}<br/>
                                    {totalasset}{currencySymbol} <br/>
                                    {year12}{currencySymbol}<br/>
                                    {year32}{currencySymbol}<br/>
                                    {cashout2}{currencySymbol}
                                </td>
                                <td>
                                    
                                    {year3}{currencySymbol}<br/>
                                    {totalasset}{currencySymbol} <br/>
                                    {year13}{currencySymbol}<br/>
                                    {year33}{currencySymbol}<br/>
                                    {cashout3}{currencySymbol}
                                </td>
                            </tr>
                            <tr>
                            <td><b>Net Cash and Balance</b><br/>
                            Starting Cash Balance<br/>
                            Ending Cash Balance
                            </td>
                            <td>
                                {cashbal1}{currencySymbol}<br/>
                                {netcash1}{currencySymbol}<br/>
                            </td>
                            <td>
                                {cashbal2}{currencySymbol}<br/>
                                {netcash2}{currencySymbol}<br/>
                            </td>
                            <td>
                                {cashbal3}{currencySymbol}<br/>
                                {netcash3}{currencySymbol}<br/>
                            </td>
                            </tr>
                            <tr></tr>
                        </table>
                    </p>

               </p>
               <br/><br/><br/>
          </div>
          <center>
              
              <button style={{width:"100px"}} onClick={print}>Print PDF</button>
              
               </center>
          </div><br/><br/><br/>
          </center>
          </section>
      )}
      </div>

        </>
    );
}
export default Multistep;