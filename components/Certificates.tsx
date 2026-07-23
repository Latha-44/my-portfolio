"use client";


const certificates = [

{
title:"Web Development Internship",

organization:"GenZ EducateWing",

description:
"Completed a Web Development internship focused on HTML, CSS, JavaScript, responsive design and building interactive web applications.",

year:"2025"
},


{
title:"AI/ML Internship",

organization:"APSCHE - CSC India",

description:
"Completed Artificial Intelligence and Machine Learning internship covering ML concepts, data processing and real-world AI applications.",

year:"2026"
},


{
title:"Google Cloud Generative AI Internship",

organization:"SmartBridge - APSCHE Skill Wallet",

description:
"Worked with Generative AI concepts, Google Cloud Platform, foundation models and prompt engineering techniques.",

year:"2026"
},


{
title:"Machine Learning Using Python & Quantum Computing",

organization:"Certification Program",

description:
"Explored machine learning concepts using Python and fundamentals of quantum computing.",

year:"2025"
},


{
title:"Embedded and VLSI for Beginners",

organization:"NIELIT Calicut",

description:
"Learned fundamentals of embedded systems and VLSI technologies.",

year:"2025"
},


{
title:"Technical Workshops",

organization:"Professional Workshops",

description:
"Participated in Skill Development, Cyber Security and Aircraft Design Technology workshops.",

year:"2026"
}

];




export default function Certificates(){


return(

<section

id="certificates"

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


<div className="max-w-6xl mx-auto">



<div className="text-center mb-14">


<h2

className="
text-4xl
sm:text-5xl
font-bold
"

>

Certifications & Achievements 🏆

</h2>



<p

className="
text-gray-400
mt-4
text-lg
"

>

Professional certifications and learning experiences

</p>


</div>





<div

className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-8
"

>


{

certificates.map((certificate,index)=>(


<div

key={index}

className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-7
hover:-translate-y-2
transition
duration-300
"

>


<div

className="
text-4xl
mb-5
"

>

🏅

</div>




<h3

className="
text-xl
font-bold
text-purple-300
"

>

{certificate.title}

</h3>




<p

className="
text-purple-400
mt-2
font-semibold
"

>

{certificate.organization}

</p>




<p

className="
text-gray-300
mt-4
leading-relaxed
"

>

{certificate.description}

</p>




<p

className="
mt-5
text-sm
text-gray-400
"

>

Year: {certificate.year}

</p>



</div>


))


}



</div>



</div>


</section>


);


}