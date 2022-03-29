import { width } from 'dom-helpers';
import React,{useEffect,useState} from 'react'


const PopSpec = () => {
    const [Data,setData]=useState([]);
  const getDataSpec=async()=>{
    const res=await fetch("https://apidynamicpge.herokuapp.com/popSpec?format=json");
    const actualData=await res.json();
    setData(actualData);
    console.log(actualData);
  }
    useEffect(() => {
        getDataSpec();
    }, []);

    const  vals = [];
    let k = 0;
    for (var i = 0; i < Data.length/3; i++) {
        a = []
        for(var j=0;j<3;j++){
        if(k<Data.length){
        a.push(Data.spec[k])
        k++;
        }
        
    }
    vals.push(a);
    }
    console.log(vals);
  return (
    <div>
    <hr className="my-4 bg-dark container"
    />
   <h3 className="my-4 text-center fw-bold">Popular Specializations</h3>
   <p className="text-center fs-6">Below are some of the popular Specializations of computer science</p>
   <div className="allSpec">
   {
   Data.map((onePop)=>{
return(
        <div className="row">
        <div className="col-md-4">
        <div className="txt" style={{width:'100px',height:'100px',backgroundColor:'grey'}}>
      <p className="fs-6 fw-bold">{onePop.spec}</p>
      
        }
      </div>
        </div>

        </div>
        

)}
)}  
</div>
   </div>
  )
}

export default PopSpec