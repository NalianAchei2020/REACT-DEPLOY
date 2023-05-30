import '../forms/card.css';
import {Link} from 'react-router-dom';
export const Works = () =>{
    return(
        <>
        <div className="container-fuild">
            <section className="sucess">
            <center>
            <h4>Easy, Simple Business Plan Writing Software</h4>
            <p>An online business plan writing and financial forecasting app to create and manage your business plans</p>
           <p><small>Write a business plan for free</small></p>
           <Link to="/signin">
           <button id='button1works'>Write a plan</button>
           </Link>
            </center>
            </section><br/>
            <section className='sucess1'>
                <center>
                <h4>Business plans and financial forecasting are hard.</h4>
                <h4>We make them easy.</h4><br/>
                <h4>Here's how Enloop works.</h4>
                </center>
                <hr/>
            </section>
            <section className='sucess2'>
                <div className='row'>
                    <div className='col-md-6 right-side'>
                        <p><strong>Add your business info</strong></p>
                        <p>Enter your company information into each section. You can choose from over 100 currency symbols and formats to setup your financial reports for your local currency. Invite your team. It's fun.</p>
                    </div>
                    <div className='col col-md-6 left-side'>
                        <img src="images/business-info.png" alt='' className='imageworks'/>
                    </div>
                </div>
                <hr/>
                <div className='row'>
                    <div className='col-md-6 right-side'>
                        <p><strong>Let the app generate your text</strong></p>
                        <p>We generate basic text for each section of your plan.
                    You can edit the text, add images, tables and even insert financial 
                    forecast data into your text that updates automatically whenever you 
                    change your financials. An amazing timesaver.</p>
                    </div>
                    <div className='col col-md-6 left-side'>
                        <img src="images/text.png" alt='' className='imageworks'/>
                    </div>
                </div>
                <hr/>
                <div className='row'>
                    <div className='col-md-6 right-side'>
                        <p><strong>Review your automatically generated financial 
                            forecasts</strong></p>
                        <p>We automatically generate financial forecasts as bank-ready reports in your business plan. 
                        We do the hard accounting work for you and explain everything in simple terms.</p>
                    </div>
                    <div className='col col-md-6 left-side'>
                        <img src="images/profit-loss.png" alt='' className='imageworks'/>
                    </div>
                </div>
                <hr/>  
            </section>
            <section className='section3'>
                        <center>
                        <div className='col-md-4'id='sucess3'>
                        <p id='h2'><b>Repeat. Improve. Maintain.</b></p>
                        <p>Edit, revise and download your plans as much as you want to create a
                        perfect roadmap forward for your business. Then update your plans 
                        quarterly to identify and correct future problems before they happen.</p>
                        </div>
                        <h3>SEE FOR YOURSELF</h3>
                        <p>It's Free</p>
                        <Link to="/signin">
                        <button id='button1works'>Write a plan</button>
                        </Link>
                        </center>

            </section><br/><br/><br/>

        </div>
        </>
    )
}