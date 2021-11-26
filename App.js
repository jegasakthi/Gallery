import React, {useState} from "react";
import Images from "./Images";
import './App.css';

function App() {
  const [selectImg, setSelectImg] = useState(Images[0]);
  return (
    <div className="App">
      <div className="container">
        <img src={selectImg} alt="Selected" className="selected"/>
        <div className='imgContainer'>
          {Images.map((img, index) =>(
            <img 
             style = {{border: selectImg === img ? "1px solid blue" : "3"}}
             key={index} 
             src={img}
             alt="Rose"
             onClick={() => setSelectImg(img)}
             />
            
          ))}
          
        </div>
      </div>
     
    </div>
  );
}

export default App;
