import Head from 'next/head'
import {useEffect,useState} from "react"
import styles from '../styles/Home.module.css'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

import Fade from 'react-reveal/Fade';
export default function Lg({scrollPosition}) {


  const [fixed, set_fixed] = useState(false);
  const [width, set_width] = useState(0);
  const [orginal_Width,set_o]=useState()
  const [height, set_height] = useState(0);

useEffect(() => {

let c=height<1000?(height/2+105):(height/2-45)

let newScroll=scrollPosition*2


  if(!fixed&&newScroll>c&&newScroll<4000){
    set_fixed(true)
  }
  
  if(fixed&&(newScroll<=c||newScroll>4000)){
  
    set_fixed(false)
  }
    if(width!==window.innerWidth*70/100){
      set_width(window.innerWidth*70/100)
    set_o(window.innerWidth)
    
    }

if(height!==window.innerHeight){

  set_height(window.innerHeight)
}

    }, [scrollPosition]);


let newScroll=scrollPosition*2
let cal=newScroll/10

let h=0
let ho=0
if(height>1100){
ho=height+100
  let l=newScroll&&newScroll*2-1500
  
h=l<20?0:l

}else{

  ho=height+500
       h=newScroll&&newScroll-(height/2+140)


}
let mw=0
let wo=0
if(width<800){
mw=250
  wo=newScroll*2-650+width

}else{
mw=650
wo =newScroll*2-680+width
}


let apply=false
console.log(wo)
console.log(width*0.9)
if(wo>width+300){

  apply=true
}





  return (
    <div className="container2" style={{position:"relative",width:"100%"}}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      



{newScroll<ho?(
  <div className="grid" style={{maxWidth:"100%",minWidth:mw,width:wo,position:`${fixed?"fixed":`${newScroll>=1400?"relative":""}`}`,top:8,height:height}}>
<img 
style={{width:height*2,height:h,position:"absolute",bottom:0,objectFit:"cover",objectPosition:"bottom",maxHeight:height}}
src={"https://www.apple.com/v/macbook-pro-16/b/images/overview/display_hero_screen__eik3891ojtoy_large.jpg"}>


  
</img>
{apply&&([
<Fade ssrFadeout bottom duration={500}>
<h4 className="lt10">Chris Burkard</h4>
</Fade>,

<Fade ssrFadeout bottom duration={500}>
<h5 className="lt15">Adventure Photographer</h5>
</Fade>

])}
<img style={{height:"100vh",minWidth:mw,objectFit:"cover"}}  src={"https://www.apple.com/v/macbook-pro-16/b/images/overview/display_pro_fallback__fkg2i8si2wyi_medium.jpg"}></img>

</div>

)
  :
 
   <div className="grid" style={{
     

    transform: `matrix(${1.7-cal/250}, 0, 0, ${1.7-cal/250}, 0, 1)`,
  
  
     maxWidth:height*2,position:`${fixed?"fixed":`${newScroll>=1400?"relative":""}`}`,top:70,height:height}} >
   <img 
style={{width:height*2,height:height,position:"absolute",bottom:20,maxHeight:height}}
src="/res.png">

  
</img>

   </div>


 






}


    
    
    </div>
  )
}
