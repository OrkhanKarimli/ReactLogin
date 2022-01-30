import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './Navbar'
import image from './img/homeworkpictures.png'
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
   <Navbar/>
   <div className='container'>
    <div className='row mt-5'>
      <div className='col-md-6 mt-5 sa'>
       <h1 className='bold'>More than just</h1>
       <h1 className='bold'>shorter links</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque eaque rem iste excepturi, sunt aliquid quos sed voluptatem fugiat.</p>
       <button className='float bnone signup getst mt-2'>
          Get Started
      </button>
      </div>
      <div className='col-md-6 colimg'>
      <img src={image} alt=""/>
      </div>
    </div>
   </div>
    <App />

    <div className='statistic container-fluid'>
      <div className='row text-center'>
        <div className='col-md-12'>
          <h1 className='newbold mb-3'>Advanced Statistics</h1>
        </div>
        <div className='col-md-12'>
          <p className='text-ailgn-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque eaque rem iste </p>
          <span>
          excepturi, sunt aliquid quos sed voluptatem fugiat
          </span>
        </div>
        <div className='col-md-10 m-auto mt-5'>
        <div className='row justify-content-center'> 
        <div className="card cardfirst col-md-3 me-4">
  <div className="card-body">
    <h5 className="card-title">Brand Recgonition</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
  </div>
</div>
        <div className="card card1 col-md-3 me-4 mt-3">
  <div className="card-body">
    <h5 className="card-title">Detailed Records</h5>
   
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>       
        <div className="card col-md-3 me-2 mt-5">
         <div className="card-body">
       <h5 className="card-title">Fully Customizable</h5>
   
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>





</div>
        
        
        </div>
        </div>

        
      </div>
     
    </div>
   
  </React.StrictMode>,
  document.getElementById('root')
);


