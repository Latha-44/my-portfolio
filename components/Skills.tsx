"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress
} from "react-icons/si";


const skills = [

  {
    name: "HTML5",
    icon: <FaHtml5 />,
    category: "Frontend"
  },


  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    category: "Frontend"
  },


  {
    name: "JavaScript",
    icon: <FaJs />,
    category: "Frontend"
  },


  {
    name: "React.js",
    icon: <FaReact />,
    category: "Frontend"
  },


  {
    name: "Node.js",
    icon: <FaNodeJs />,
    category: "Backend"
  },


  {
    name: "Express.js",
    icon: <SiExpress />,
    category: "Backend"
  },


  {
    name: "MongoDB",
    icon: <SiMongodb />,
    category: "Database"
  },


  {
    name: "Git",
    icon: <FaGitAlt />,
    category: "Tools"
  },


  {
    name: "GitHub",
    icon: <FaGithub />,
    category: "Tools"
  },


  {
    name: "VS Code",
    icon: <FaCode />,
    category: "Tools"
  }

];



export default function Skills() {


return (

<section
id="skills"
className="
min-h-screen
bg-gradient-to-br
from-black
via-purple-950
to-black
text-white
py-24
px-6
"
>


<div
className="
max-w-6xl
mx-auto
text-center
"
>


<h2
className="
text-4xl
lg:text-5xl
font-bold
mb-5
"
>

My Skills

</h2>



<p
className="
text-gray-400
text-lg
mb-12
"
>

Technologies I use to build modern web applications

</p>





<div
className="
grid
grid-cols-2
sm:grid-cols-3
lg:grid-cols-5
gap-6
"
>


{
skills.map((skill,index)=>(


<div

key={index}

className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-2xl
p-6
hover:scale-105
transition
shadow-lg
"

>


<div
className="
text-purple-400
text-4xl
mb-4
flex
justify-center
"
>

{skill.icon}

</div>




<h3
className="
text-lg
font-semibold
"
>

{skill.name}

</h3>




<p
className="
text-gray-400
text-sm
mt-2
"
>

{skill.category}

</p>



</div>


))

}


</div>



</div>


</section>


);


}