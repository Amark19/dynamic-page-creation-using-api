import React from "react";
import {  Container ,Row ,Col} from 'react-bootstrap';

import Header from './Header';
import PopSpec from './popSpec';
import Requirements from "./requirements";
import Footer from './footer';
import Head2 from "./Head2";
import car from '../car.jpg'
import flag from '../usFl.png'
 
const Const = () =>{
    return(
       
       <div>
      <Header/>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={flag} className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
      <div class="container">
        </div>
      </div>
    </div>
  </div>
</div>
     <div className="intro">
        <Container>
      <h2 className="text-center fw-bold text-dark my-4">Introduction</h2>
      <p className="text-monospace fs-5">
      Computer Science is the study of processes to develop mathematical models that bridge human interaction with computers by writing programs for software, application or a website. In this age of computers and technology and given the field's broad range and flexibility. It has become one of the most preferred courses in the world.
     
  <br/>
  <br/>
With Computer Science being the most popular course, Masters in Computer Science in the USA is naturally one of the preferred choices

for aspiring Indian students. The US is home to some of the top tech companies like Microsoft, IBM, Google, and many others, and this

provides Computer Science graduates in the US with innumerable job options in this field.

  <br/>
 Here you will be finding all the details you will need to pursue your MS in Computer Science in the USA
  
  
      </p>
        </Container>
       </div>
       <PopSpec/>
         <Requirements/>
       <Footer/>
       </div>
    );
   
}

export default Const;