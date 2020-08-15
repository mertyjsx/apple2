import Head from 'next/head'
import {useEffect,useState} from "react"
import styles from '../styles/Home.module.css'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import Video from "./VideoAnimastion"
import Lg from "./lg"
import Xs from "./xs"
export default function Home() {

  const [scrollPosition, setSrollPosition] = useState(0);
  const [scrollPosition2, setSrollPosition2] = useState(0);
  const [fixed, set_fixed] = useState(false);
  const [width, set_width] = useState(0);
  const [height, set_height] = useState(0);
  const [orginal_Width,set_o]=useState()
const handleScroll = () => {
  console.log("dasds")
  let n=window.pageYOffset*0.15
  
  setSrollPosition(Math.floor(n))
  
set_width(window.innerWidth)

};




const handleScroll2 = () => {
 

  
  };
  
  
  
  
  
  
  
  
  useEffect(() => {
  
      window.addEventListener("scroll", handleScroll, { passive: true });
    
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  











useEffect(() => {
 set_width(window.innerWidth)
}, []);

if(width<600){

  return(

<div>

<Video scrollPosition={scrollPosition}></Video>
<hr ></hr>
<div className="title-container">
<h1 className="r2 title2">

<span>Exactly</span>
<br></br>
Same as your app<br></br> But more fast.

</h1>

</div>

<Lg orginal_width={width} scrollPosition={scrollPosition}></Lg>





</div>

  )
}
else{
  return(<div>
  
    <Video scrollPosition={scrollPosition}></Video>
    <hr ></hr>
    <div className="title-container">
   <h1 className="r2 title2">
  
  <span>Exactly</span>
  <br></br>
  Same as your app<br></br> But more fast.
  
  </h1>
   
  </div>
  
  <Lg orginal_width={width} scrollPosition={scrollPosition}></Lg>
  
  
  
  
  
   </div>
  )
  


}
}