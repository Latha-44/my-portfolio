import Image from "next/image";


export default function Projects() {


const projects = [

{
title:"JobNest - Job Search Application",

image:"/images/projects/jobnest.png",

description:
"A job search platform designed with a clean and responsive interface to help users explore job opportunities easily.",

tech:
"HTML, CSS, JavaScript",

github:
"https://github.com/Latha-44/JobNest"

},



{
title:"Real Estate Website",

image:"/images/projects/realestate.png",

description:
"A modern real estate website showcasing property listings with attractive layouts and user-friendly navigation.",

tech:
"HTML, CSS, JavaScript",

github:
"https://github.com/Latha-44/Realestate"

},



{
title:"Personal Portfolio Website",

image:"/images/projects/portfolio.png",

description:
"A professional portfolio website created to showcase my skills, projects, education, certifications and achievements.",

tech:
"HTML, CSS, JavaScript",

github:
"https://github.com/Latha-44/portfolio"

}

];




return (

<section
id="projects"
className="
min-h-screen
bg-gradient-to-br
from-black
via-purple-950
to-black
text-white
px-6
py-24
"
>


<div className="max-w-7xl mx-auto">


<h2
className="
text-4xl
sm:text-5xl
font-bold
text-center
text-purple-300
"
>
Projects
</h2>


<p
className="
text-gray-400
text-center
mt-5
mb-14
text-lg
"
>
Some of my featured web development projects
</p>





<div
className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-10
"
>


{
projects.map((project,index)=>(


<div
key={index}
className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
overflow-hidden
shadow-xl
hover:-translate-y-3
transition
duration-500
"
>


{/* PROJECT IMAGE */}

<div
className="
relative
h-56
w-full
"
>


<Image

src={project.image}

alt={project.title}

fill

className="
object-cover
"

/>


</div>





{/* CONTENT */}

<div className="p-6">


<h3
className="
text-2xl
font-bold
text-purple-300
mb-3
"
>
{project.title}
</h3>



<p
className="
text-gray-300
leading-relaxed
mb-5
"
>
{project.description}
</p>



<p
className="
text-purple-300
font-semibold
mb-6
"
>
Tech Stack:

<span className="text-gray-300 ml-2">
{project.tech}
</span>

</p>





{/* GITHUB ONLY */}

<a

href={project.github}

target="_blank"

rel="noopener noreferrer"

className="
inline-block
px-6
py-3
rounded-full
bg-purple-600
hover:bg-purple-700
transition
"

>

View GitHub

</a>



</div>



</div>



))

}



</div>


</div>


</section>


);

}