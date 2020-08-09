import Head from 'next/head'
import {useEffect,useState} from "react"
import styles from '../styles/Home.module.css'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

export default function Home() {

  const [scrollPosition, setSrollPosition] = useState(0);
  const [fixed, set_fixed] = useState(false);
  const [width, set_width] = useState(0);
  const [height, set_height] = useState(0);
  const [orginal_Width,set_o]=useState()
const handleScroll = () => {



  const position = window.pageYOffset*0.6;
    setSrollPosition(position);
console.log(position)
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

useEffect(() => {

let c=orginal_Width<600?240:265



  if(!fixed&&scrollPosition>c&&scrollPosition<667){
set_fixed(true)
  }
  
  if(fixed&&(scrollPosition<=c||scrollPosition>1700)){
    console.log("s",scrollPosition)
    set_fixed(false)
  }
    if(width!==window.innerWidth*70/100){
      set_height(window.innerHeight)
      set_width(window.innerWidth*70/100)
    set_o(window.innerWidth)
    
    }
    }, [scrollPosition]);


console.log(orginal_Width)
let h=0
if(orginal_Width>600)
     h=scrollPosition&&scrollPosition-265
    else
     h=scrollPosition*2-460


     let w=0
     if(scrollPosition>100)
          w=scrollPosition*2+width-200
         else
          w=width
     

          let dh=0
          if(scrollPosition>100){

  dh=500+scrollPosition*2-200


          }

              
              else
               dh=500
          
               console.log(height)

  return (
    <div className="container2" style={{position:"relative"}}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

{scrollPosition<667?(
  <div className="grid" style={{maxWidth:orginal_Width,width:scrollPosition*1+width,position:`${fixed?"fixed":`${scrollPosition>=1400?"":""}`}`,bottom:-62,height:`${scrollPosition>=1400?1400:840}px`}}>
<img 
style={{width:`${scrollPosition<1400?"100%":width*100/70-scrollPosition+1200}`,height:h,position:"absolute",bottom:0,objectFit:"none",objectPosition:"bottom",maxWidth:orginal_Width,maxHeight:902}}
src={"https://www.apple.com/v/macbook-pro-16/b/images/overview/display_hero_screen__eik3891ojtoy_large.jpg"}></img>



<img style={{width:w,objectFit:"cover",objectPosition:"top",height:dh,maxHeight:840}} src={"https://www.apple.com/v/macbook-pro-16/b/images/overview/display_pro_fallback__fkg2i8si2wyi_medium.jpg"}></img>

</div>

)
  :
 
<div className="grid" style={{width:width*100/70-scrollPosition+1700,position:`${scrollPosition<667?"fixed":`relative`}`,top:0,maxWidth:width*100/70,height:`${scrollPosition<667?700:1450}px`}}>  
<img 
style={{width:`${scrollPosition<1400?"100%":width*100/70-scrollPosition+1200}`,height:h,position:"absolute",bottom:-87,objectFit:"none",objectPosition:"bottom",maxWidth:orginal_Width,maxHeight:902}}
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
