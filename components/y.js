import Head from 'next/head'
import {useEffect,useState} from "react"
import styles from '../styles/Home.module.css'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import Lg from "./lg"
import Xs from "./xs"
export default function Home() {

  const [scrollPosition, setSrollPosition] = useState(0);
  const [fixed, set_fixed] = useState(false);
  const [width, set_width] = useState(0);
  const [height, set_height] = useState(0);
  const [orginal_Width,set_o]=useState()
const handleScroll = () => {

set_width(window.innerWidth)

};

useEffect(() => {
    window.addEventListener("resize", handleScroll, { passive: true });
  
    return () => {
        window.removeEventListener('resize', handleScroll);
    };
}, []);

  if(width<600){
return(<Xs></Xs>)
  }
  else{
return(<Lg></Lg>)
  }
  }