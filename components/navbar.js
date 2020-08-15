import React, { useEffect, useState } from "react"
import Xs from "./nav"



const Navbar=()=>{
const [w,sw]=useState(1000)

let resizeWindow = () => {
    sw(window.innerWidth);
  
  };

useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);








useEffect(()=>{


sw(window.innerWidth)









})



if(w<500)
return(
<Xs></Xs>
)
else return (

<div className="navbarContainer ">
<div className="leftLink">
<h4 className="r4">
16-inch model


</h4>
<h6 className="r6">MacBook Pro
</h6>

</div>

<div className="rightLink">

<h5 className="r5">Tech Specs</h5>

<div className="but">Buy</div>



</div>
</div>

)

}



export default Navbar