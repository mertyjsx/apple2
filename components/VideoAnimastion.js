import {useEffect,useState} from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ImageAnimation from "../components/ImageAnimation"

import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';

config({ ssrFadeout: true });


export default function Home({scrollPosition}) {

const [images,set_images]=useState([])













useEffect(()=>{
    
  let foo=[]
  for (var i = 0; i < 102; i++) {
    if(i>99)
      foo.push(99);
      else
      foo.push(i)
   }
   
set_images(foo)

},[])
console.log(scrollPosition)





let n=(100-scrollPosition*2)/100
console.log(n)




if(scrollPosition<100){
  return (
    <div className="cnt">
      <Fade ssrFadeout bottom duration={2000}>
      <h1 className="title3 r1" style={{color:`rgba(0, 0, 0, ${n})`}}>MacBook Pro</h1>
      </Fade>
  <Fade ssrFadeout bottom duration={2000}>
      <h1  className="title2 r1" style={{ color:`rgba(0, 0, 0, ${n})` }}>The best for <br></br>the brightest.</h1>
      </Fade>
    {images.map(item=> {
    
    
  return(<img  key={item} className={`${item==scrollPosition?'laptop-height100':'laptop-height0'}`}  src={`/large_00${item}.jpg`}></img>)
     })}
     
    

   </div>
  )}
  else return(<div className="cnt2"><img   className="ct-3"  src={`/large_0099.jpg`}></img>
 
  
  </div>)
}
