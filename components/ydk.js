import {useEffect,useState} from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ImageAnimation from "../components/ImageAnimation"





export default function Home({scrollPosition}) {
const [images,setimages]=useState([])


const [fixed, set_fixed] = useState(false);
const [width, set_width] = useState(0);
const [orginal_Width,set_o]=useState()


    async function processArray() {
        // map array to promises
        let imageArray = []
        

        
        let foo=[]
        for (var i = 0; i < 100; i++) {
            foo.push(i);
         }






       const promises= foo.map(async item =>{
    
        
      fetch(`http://localhost:3000/large_00${item}.jpg`).then(r=>r.blob()).then(images=>
      {
        let url=URL.createObjectURL(images)
imageArray.push(url)
      }
      
      )



    
        }
    
        )
    
    
    
        // wait until all promises are resolved
        await Promise.all(promises);
console.log(imageArray)
        setimages(imageArray);
    
      }
    

      useEffect(async ()=>{

         
         setTimeout(() => {
            processArray()      
         }, 2000);
       
        
        },[])
        



  return (
    <div className={`${scrollPosition>99?'ct-3':'ct-4'}`}>
        
  
        <img className="laptop-height100" src={images[scrollPosition]}></img>
      

    </div>
  )
}
