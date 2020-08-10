import Head from 'next/head'
import {useEffect,useState} from "react"
import styles from '../styles/Home.module.css'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

export default function Lg({scrollPosition}) {


  const [fixed, set_fixed] = useState(false);
  const [width, set_width] = useState(0);
  const [orginal_Width,set_o]=useState()


useEffect(() => {

let c=orginal_Width<600?120:265



  if(!fixed&&scrollPosition>c&&scrollPosition<1700){
    set_fixed(true)
  }
  
  if(fixed&&(scrollPosition<=c||scrollPosition>1700)){
  
    set_fixed(false)
  }
    if(width!==window.innerWidth*70/100){
      set_width(window.innerWidth*70/100)
    set_o(window.innerWidth)
    
    }
    }, [scrollPosition]);



let h=0
if(orginal_Width>600)
     h=scrollPosition&&scrollPosition-265
    else
     h=scrollPosition&&scrollPosition-120

  return (
    <div className="container2" style={{position:"relative"}}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

{scrollPosition<1400?(
  <div className="grid" style={{maxWidth:orginal_Width,width:scrollPosition*2+width,position:`${fixed?"fixed":`${scrollPosition>=1400?"relative":""}`}`,top:0,height:`${scrollPosition>=1400?1400:700}px`}}>
<img 
style={{width:`${scrollPosition<1400?"100%":width*100/70-scrollPosition+1200}`,height:h,position:"absolute",bottom:0,objectFit:"cover",objectPosition:"bottom",maxHeight:1045}}
src={"https://www.apple.com/v/macbook-pro-16/b/images/overview/display_hero_screen__eik3891ojtoy_large.jpg"}></img>



<img  src={"https://www.apple.com/v/macbook-pro-16/b/images/overview/display_pro_fallback__fkg2i8si2wyi_medium.jpg"}></img>

</div>

)
  :
 
<div className="grid" style={{width:width*100/70-scrollPosition+1700,position:`${scrollPosition<1700?"fixed":`relative`}`,top:0,maxWidth:width*100/70,height:`${scrollPosition<1700?700:5120}px`}}>  
<img 
style={{width:`${scrollPosition<1700?width*100/70-scrollPosition+1400:width+100}px`,position:`${scrollPosition<1700?"absolute":""}`,height:1045,bottom:0,objectFit:"cover",objectPosition:"bottom",minWidth:width}}
src={"https://www.apple.com/v/macbook-pro-16/b/images/overview/display_hero_screen__eik3891ojtoy_large.jpg"}></img>
</div>
}


    
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
       By orkunmertgs41@gmail.com
        </a>
      </footer>
    </div>
  )
}
