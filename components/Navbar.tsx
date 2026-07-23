"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Navbar() {


  const [open, setOpen] = useState(false);



  const navLinks = [
    {
      name:"Home",
      link:"#home"
    },
    {
      name:"About",
      link:"#about"
    },
    {
      name:"Skills",
      link:"#skills"
    },
    {
      name:"Projects",
      link:"#projects"
    },
    {
      name:"Contact",
      link:"#contact"
    }
  ];



  return (

<nav
className="
fixed
top-0
left-0
w-full
z-50
bg-black/60
backdrop-blur-xl
border-b
border-white/10
"
>


<div
className="
max-w-7xl
mx-auto
px-6
py-4
flex
items-center
justify-between
"
>




{/* LOGO */}

<a
href="#home"
className="
text-2xl
font-bold
bg-gradient-to-r
from-purple-300
via-white
to-purple-400
bg-clip-text
text-transparent
"
>
 Deevi Lathasri
</a>







{/* DESKTOP MENU */}


<div
className="
hidden
md:flex
items-center
gap-8
"
>


{
navLinks.map((item,index)=>(

<a

key={index}

href={item.link}

className="
relative
text-gray-300
hover:text-purple-400
transition
duration-300
group
"

>


{item.name}


<span
className="
absolute
left-0
-bottom-2
w-0
h-[2px]
bg-purple-400
transition-all
duration-300
group-hover:w-full
"
/>


</a>


))

}


</div>









{/* MOBILE BUTTON */}


<button

onClick={()=>setOpen(!open)}

className="
md:hidden
text-purple-400
text-2xl
"

aria-label="menu"

>


{

open

?

<FaTimes/>

:

<FaBars/>

}


</button>





</div>









{/* MOBILE MENU */}


{

open &&


<div

className="
md:hidden
bg-black/90
backdrop-blur-xl
border-t
border-white/10
"

>


<div
className="
flex
flex-col
items-center
gap-7
py-8
"
>


{

navLinks.map((item,index)=>(


<a

key={index}

href={item.link}

onClick={()=>setOpen(false)}

className="
text-gray-300
hover:text-purple-400
text-lg
transition
"

>

{item.name}


</a>


))


}



</div>


</div>


}


</nav>


  );

}