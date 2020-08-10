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

set_width(window.innerWidth)

};


const handleScroll2 = () => {
  console.log("dasds")
let n=window.pageYOffset*0.4

setSrollPosition(Math.floor(n))
setSrollPosition2(window.pageYOffset*0.6)
};




useEffect(() => {
  console.log("hello")
    window.addEventListener("resize", handleScroll, { passive: true });
  
    return () => {
        window.removeEventListener('resize', handleScroll);
    };
}, []);



useEffect(() => {
  console.log("hello")
    window.addEventListener("scroll", handleScroll2, { passive: true });
  
    return () => {
        window.removeEventListener('scroll', handleScroll2);
    };
}, []);






useEffect(() => {
 set_width(window.innerWidth)
}, []);



 return(
   <Video scrollPosition={scrollPosition}></Video>
 )
}