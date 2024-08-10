import React from "react";
import AdWidth from "../../assets/img/height.jpg";  
import AdHeigh from "../../assets/img/width.jpg";  

const imageStyle = {
position: 'fixed',
bottom: 0,
left: 0,
width: '100%',
height: '150px',
objectFit: 'cover', // This will ensure the image covers the area without stretching
zIndex: 9990,
border: '5px solid #ccc', // Add a border
boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)', // Add a shadow
};
const imageLeftStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '200px',
    height: '100vh',
    objectFit: 'cover',
    zIndex: 9990,
    border: '5px solid #ccc', // Add a border
    boxShadow: '0 5px 4px rgba(0, 0, 0, 0.1)', // Add a shadow
  };  
export default function Ad() {
    // get from Api
    return (
        <div>
        {/* <img src={AdWidth} height={300} cla alt="Ad" style={imageLeftStyle} /> */}
        {/* <img src={AdHeigh} height={300} cla alt="Ad" style={imageStyle} /> */}
        </div>
    );
}