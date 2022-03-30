import React,{useEffect,useState} from 'react'


const PopSpec = () => {
    const [Data,setData]=useState([]);
  const getDataSpec=async()=>{
    const res=await fetch("https://apidynamicpge.herokuapp.com/popSpec?format=json");
    const actualData=await res.json();
    setData(actualData);
  }
    useEffect(() => {
        getDataSpec();
    }, []);
    //code to shuffle Data
    const shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }
    const shuffledData=shuffle(Data);
  return (
    <div>
    <hr className="my-4 bg-dark container"
    />
   <h3 className="my-4 text-center fw-bold">Popular Specializations</h3>
   <p className="text-center fs-6">Below are some of the popular Specializations of computer science</p>
   <div className="container">
     <div className="row mx-4 my-4">
   {
     
    shuffledData.map((oneSpec)=>{
         return(
           <div className="col-md-3">
           <p className='text-center py-4' style={{backgroundColor: '#dcdcdc',
    borderRadius:' 5px',
    width: '220px',
    height: '80px',
    top:'20%'
}}>{oneSpec.spec}</p>
           </div>
         )
       })
}
</div>
</div>
   </div>
  )
}

export default PopSpec;