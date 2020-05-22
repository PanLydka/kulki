import React, { useState, useEffect } from "react";
import "./styles.scss";


const importAll = require =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return Object.values(acc);
  }, {});

const images = importAll(
  require.context("./same_kulki", false, /\.(png|jpe?g|svg)$/)
);

const Images = () => {
  const [index, setIndex] = useState(0);


  
  useEffect(() => {
    const interval = setInterval(() => {
        let i = index;
        setIndex(i + 1)

      if(index === images.length){
          setIndex(0)
      }
      console.log(index)
    }, 40);
    return () => clearInterval(interval);
  }, [index]);


  
  return (
    <>
      <img src={images[index]} />

    </>
  );
};

export default Images;
