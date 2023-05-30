
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import {Link} from 'react-router-dom';
export const Analysis = () =>{
    const [index, setindex] = useState(0);

    const handleSelect = (selectedIndex, e) => {setindex(selectedIndex);};
    return(
        <div>
            <div className="container-fluid p-10 container1" id="conana1">
     <div className="description1" >
         <h6>3000 business owners, accountants, entrepreneurs and students use EasyPlan
              to write and manage their business plans.</h6>
         <h6>EasyPlan makes it easy for you to think through every aspect of your business — 
             so you're twice as likely to succeed.</h6>
     </div><br></br><br></br>
     <div className="container-md p-5 container1 " id="conana2">
     <div className="row feature-section">
            <div className="col col-md-4 col-sm-12 left-side">
            <div className="img-holder">
            <img className="img-fluid lazyload" src={"images/text.png"} alt=""></img>
            </div>
            </div>
        <div className="col-md-8 right-side">
            <h4>Automated Text Writing</h4>
            <p>We create customized text you can edit. And we automatically sync your financial data into your text for painless updates whenever you change your financials...</p>
            </div>
            </div><hr></hr>
            <div className="row feature-section">
            <div className="col col-md-4 col-sm-12 left-side">
            <div className="img-holder">
            <img src={"images/business-info.png"}  className="img-fluid lazyload" alt=""></img>
            </div>
            </div>
            <div className="col-md-8 right-side">
            <h4>Country Currency Formatting</h4>
            <p>Choose from 100+ currency symbols and number formatting for your country...</p>
            </div>
            </div><hr></hr>
            <div className="row feature-section">
            <div className="col col-md-4 col-sm-12 left-side">
            <div className="img-holder">
                <img className="img-fluid lazyload" src={"images/ratios.png"} alt=""></img>
            </div>
            </div>
            <div className="col-md-8 right-side">
            <h4>Financial Ratios Analyzed</h4>
            <p>We generate 16 critical financial ratios to analyze your forecasted performance. Then we compare your ratios to your peers and show how you compare...</p>
            </div>
            </div><hr></hr>
            <div className="row feature-section">
                <div className="col col-md-4 col-sm-12 left-side">
                <div className="img-holder">
                    <img className="img-fluid lazyload" src={"images/profit-loss.png"} alt=""></img>
                </div>
                </div>
                <div className="col-md-8 right-side">
                <h4>Automatically Generated Financial Reports</h4>
                <p>We generate bank-ready financial forecast reports in your business plan. And then explain everything to you...</p>
                </div>
                </div>
            </div>
            
            <section className='ana1'>
            <center>
                <div className='col-md-4'>
                <p>
                 EasyPlan is a free, online business plan writing software that's smart, 
                 simple and fast.
                      </p>
                </div>
                <Link to="/signin">
                <button id='button1works'>START A PLAN</button>
                </Link>
            </center>
            </section>
            <hr/>
            
                <center className="ana1">
                    <h5><p>PRAISED BY BUSINESS EXPERTS</p></h5><br/>
                    <Carousel activeIndex={index} onSelect={handleSelect} fade 
                    interval={3000} variant='dark'>
                        <Carousel.Item>
                        <img src='' alt='Richard ken'/><br/><br/>
                            <p>The experience of using EasyPlan was actually inspirational</p>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src='' alt='Clinton Greek'/><br/><br/>
                            <p>EasyPlan is an easy, online business plan writing software that's smart, simple and fast.</p>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src='' alt='Sabrena Black'/><br/><br/>
                            <p>EasyPlan the best</p>
                        </Carousel.Item>
                    </Carousel>
                    </center>
                    <hr/>
              </div><br/><br></br>
              <div  id='ana'>
                  <center>
                  <div className='row'>
                        <div className='col-sm-4'>
                        <img src={"images/entre.png"} alt="" className='imageg'/>
                        </div>
                        <div className='col-sm-4'>
                        <img src={"images/Bplans9.png"} alt="" className='imageana'/> 
                        </div>
              </div>
              <div>
                  <div className='lastdiv'>
                  <p className='last'><strong>Try EasyPlan Today</strong></p>
                  <p className='last'>Its totally risk free</p>
                  </div>
                  
              </div>
              <div className='col-lg-8' id='buttonW'>
              <Link to="/signin">
              <button id='button1works'>START A PLAN</button>
              </Link>
              </div>
              </center>

                    </div>
    </div>
        
    );

}