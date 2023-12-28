import React from 'react'
import{IoLogoHtml5,} from 'react-icons/io'
import{FaReact,FaCss3,FaPython,FaGithub} from 'react-icons/fa'
import{SiTailwindcss} from 'react-icons/si'
import Capabilities from './Capabilities'

function About() {
  return (
    <div className='w-full bg-neutral-900'>
        <div className='grid md:grid-cols-2 pt-40 sm:grid-cols-1 xs:grid-cols-1 max-w-[1000px] m-auto'>
            <div className='p-12 md:order-first sm:order-last xs:order-last'>
                <h1 className='font-bold text-6xl text-white'>Sylvielism</h1>
                <p className='text-white text-lg pt-4'>Developper,Digital Artist,Self Learner </p>
                <p className='text-white pt-4'>Introducing Nan, an aspiring digital artist and talented coder with a passion for self-improvement and creating meaningful contributions to humanity. With a unique blend of artistic creativity, technical expertise, and a love for science and math, Nan brings a multidisciplinary approach to their work.</p>
                <a href="https://www.pixiv.net/en/users/50727639"><button className='mt-6 p-4 w-52 font-semibold'>Gallary</button></a>
            </div>
            {/*<img className='w-full' src="https://i.ibb.co/FY9GZfC/Illustrationvs2.png" alt="" />*/}
            <img className='w-full' src="https://i.ibb.co/gyGQ883/New-canvas-1.png" alt="" />
        </div>
        

        <Capabilities/>
        
        <div className='max-w-[1000px] m-auto h-24 items flex items-center p-4'>
            <h1 className='text-3xl text-white align-middle font-bold underline underline-offset-8 decoration-4'>BIO</h1>   
        </div>
        <div className='max-w-[1000px] m-auto p-4'>
            <div className='flex flex-row'>
                <p className='text-lg text-white font-bold'>1999</p>
                <p className='text-lg text-white pl-4'>- Born in lopburi(ลพบุรี),Thailand</p>
            </div>
            <div className='flex flex-row'>
                <p className='text-lg text-white font-bold'>2001</p>
                <p className='text-lg text-white pl-4'>- Start living in Bangkok(กรุงเทพ),Thailand</p>
            </div>
            <div className='flex flex-row'>
                <p className='text-lg text-white font-bold'>2020</p>
                <p className='text-lg text-white pl-4'>- Start drawing as a hobby</p>
            </div>
            <div className='flex flex-row'>
                <p className='text-lg text-white font-bold'>2023-Present</p>
                <p className='text-lg text-white pl-4'>- Completed bachelor degree in Thai-Nichi Institute of Technology 泰日工業大学</p>
            </div>
        </div>
        
        <div className='max-w-[1000px] m-auto h-24 items flex items-center p-4'>
            <h1 className='text-3xl text-white align-middle font-bold underline underline-offset-8 decoration-4'>Portfolio</h1>   
        </div>

        <div className='max-w-[1000px] m-auto grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1'>
            <div className='h-80 px-4 '>
                <img className='rounded-lg  h-80 object-fill' src="https://i.ibb.co/kVn9zLs/84181491-2914974208586336-3967995730722816000-n.jpg" alt="" />
            </div>
            
            <div className='text-white p-4'>
                <h1 className='text-2xl font-bold'>English Project Presentation</h1>
                <h1 className='text-xl'>Winner Award</h1>
                <p className='pt-4'>I achieved first place in the English project presentation at my university, showcasing my exceptional communication and research skills. My presentation captivated the audience with a well-structured and engaging delivery. This achievement highlights my ability to conduct thorough research, analyze information critically, and deliver compelling presentations, showcasing my commitment to academic excellence and effective communication</p>   
            </div>
        </div>
 
        <div className='pt-28 sm:pt-12 xs:pt-8'>
            <div className='max-w-[1000px] m-auto grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 '>
 
                    <div className='text-white p-4 md:order-first sm:order-last xs:order-last'>
                        <h1 className='text-2xl font-bold'>Complete react tutorials</h1>
                        <h1 className='text-xl'>Learning Concept of react</h1>
                            <p className='pt-4'>I successfully finished a comprehensive React.js tutorial, gaining proficiency in this popular JavaScript library for building user interfaces. Through hands-on exercises and project work, I acquired a solid understanding of component-based development, state management, and virtual DOM manipulation. This accomplishment highlights my commitment to expanding my technical skills and ability to create dynamic web interfaces using React.js.</p>
                        <a href="https://sylvielism.github.io/Sytest/"><button className='flex flex-row items-center mt-4 p-2 text-lg pr-3'><FaGithub size={30} className='m-2'/> See Project here</button></a>   
                    </div>

                    <div className='h-80 overflow-hidden px-4 flex items-center'>
                        <img className='rounded-lg' src="https://i.ibb.co/mtMFz9F/portimg.png" alt="" />
                        
                    </div>

             </div>
        </div>

       
        
        
        
    </div>
  )
}

export default About       