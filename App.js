import React, { useState,useEffect} from 'react';
import './App.css';
function App() {
  const [easy,seteasy]=useState(0);
  const [med,setmed]=useState(0);
  const [hard,sethard]=useState(0);
  const [barheight,setbarheight]=useState(easy);
  const [barheight1,setbarheight1]=useState(med);
  const [barheight2,setbarheight2]=useState(hard);
const handle=(event)=>{
  let val=(event.target.value);
  if(val>=0 && val<=100){
  seteasy(val);
  setbarheight(val);
  }
  else{
    alert('Enter value between 0-100');
    seteasy(0);
    setbarheight(0);
  }
}
const handle1=(event)=>{
  let val=(event.target.value);
  if(val>=0 && val<=100){
    setmed(val);
    setbarheight1(val);
    }
    else{
      alert('Enter value between 0-100');
      setmed(0);
      setbarheight1(0);
    }
}
const handle2=(event)=>{
  let val=(event.target.value);
  if(val>=0 && val<=100){
    sethard(val);
    setbarheight2(val);
    }
    else{
      alert('Enter value between 0-100');
      sethard(0);
      setbarheight2(0);
    }
}
const mxheight=100;
const chartheight=mxheight+20;
const barwidth=50;
const barmargin=30;
let width= 3*(barwidth+ barmargin);

let refreshChart =()=>{
   seteasy(0);
   setbarheight(0);
   setmed(0);
   setbarheight1(0);
   sethard(0);
   setbarheight2(0);
}
  return (
    <div className="App">
      <header className="head">
        <h1>BAR GRAPH</h1>
      </header>
      <div className='row boxes'>
         <div>
          <input type='text' placeholder='EASY' onChange={handle}/>
          <h4>Entered value: {easy}</h4>
         </div>
         <div>
          <input type='text' placeholder='MEDIUM' onChange={handle1}/>
          <h4>Entered value: {med}</h4>
          </div>
          <div>
          <input type='text' placeholder='HARD' onChange={handle2}/>
          <h4>Entered value: {hard}</h4>
        </div>
      </div>
      <Chart height={chartheight} width={width}>
         
          <Bar
            key='easy'
            x={0 * (barwidth+barmargin)}
            y={chartheight-barheight}
            width={barwidth}
            height={barheight}
            barname='easy'
            barval={easy}
          />
          <Bar
            key='med'
            x={1*(barwidth+barmargin)}
            y={chartheight-barheight1}
            width={barwidth}
            height={barheight1}
            barname='med'
            barval={med}
          />
          <Bar
            key='hard'
            x={2*(barwidth+barmargin)}
            y={chartheight-barheight2}
            width={barwidth}
            height={barheight2}
            barname='hard'
            barval={hard}
          />
      </Chart>
      <button onClick={refreshChart}>Refresh Chart</button>
    </div>
  );
}
const Chart=({children, width=500, height=200})=>(
  <svg 
     viewBox={`0 0 ${width} ${height}`}
     width="100%"
     height="70%"
     preserveAspectRatio="xMidYMax meet"
     >
      {children}
     </svg>
);
const Bar=({x,y,width,height})=>(
   <>
      <rect x={x} y={y} width={width} height={height} fill={`red`}/>
   </>
);
export default App;
