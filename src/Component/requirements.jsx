import React,{useEffect,useState} from 'react'

const Requirements = () => {
    const [Data,setData]=useState([]);
  const getDataReq=async()=>{
    const res=await fetch("https://apidynamicpge.herokuapp.com/req");
    const actualData=await res.json();
    setData(actualData);
    console.log(actualData);
  }
    useEffect(() => {
        getDataReq();
    }, []);
  return (
    <div>
    <hr className="my-4 bg-dark container"
    />
   <h3 className="my-4 text-center fw-bold">Requirements</h3>
    <div className="allReq container">
  {
Data.map((onereq)=>{
return(
   <div className="row my-2">
   <div className="col-md-1"></div>
    <div className="col-md-2" style={{backgroundColor: '#ececec',
    borderRadius:' 5px',
    width: '200px',
    height: '70px',
}}>
            <p className=" text-center my-auto fs-6 fw-bold" style={{paddingTop:'10%'}}>{onereq.req}</p>
    </div>
    <div className="col-md-8 mx-2" style={{backgroundColor: '#ececec',
    borderRadius:' 5px',
    height: '70px',
}}>
            <p className="py-4">{onereq.req_desc}</p>
    </div>

   </div>
)}
)}  
  </div>
   </div>
  )
}

export default Requirements