import React,{useState} from 'react'
import {MenuIcon} from '@heroicons/react/outline'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isNav, setNav] = useState(true);
    const [isVis, setVis] = useState(true);
    const [isWit, setWit] = useState(true);

    const toggleNav = () =>{
        setNav((prevState)=>!prevState);
    }

    const handleHover = () =>{
        setVis((prevState)=>!prevState);
        setWit((prevState)=>!prevState);
    }

    const handleMouseLeave = () => {
        setVis((prevState)=>!prevState);
        setWit((prevState)=>!prevState);
      };

    const navStyle = isNav ? 'collapse' : 'visible';
    //const textStyle = isVis ? 'text-white' : 'text-neutral-900';
    const bgStyle = isWit ? 'bg-transparent' : 'bg-neutral-700';

    return (
        <div className='w-screen h-[75px] bg-transparent fixed backdrop-blur-md drop-shadow-md z-20'>
            <div className='max-w-[1240px] m-auto flex justify-between flex-cols items-center h-full'>
                <Link to="/"><h1 className='text-white text-2xl font-bold ml-4'>Sylvielism</h1></Link>
                <ul className='hidden md:flex text-white grow pl-4'>
                    <li className='hover:underline underline-offset-8 decoration-4'><Link to="/gallary">Gallary</Link></li>
                    <li className='hover:underline underline-offset-8 decoration-4'><Link to="/commission">Commission</Link></li>
                    <li className='hover:underline underline-offset-8 decoration-4'>Contact</li>
                </ul>
                <div className={`mr-4 border z-10 border-white rounded-lg ${bgStyle} hover:text-neutral-900`} onClick={toggleNav}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave} >
                    <MenuIcon className={`h-8 m-1 text-white  z-20`}/> 
                </div>
            </div>
            <div className='max-w-[1240px] m-auto flex flex-row-reverse'>
                <div className= {`w-full md:w-2/6 sm:w-3/6 ${navStyle} `}>
                    <div className='border-gray-500 border rounded-lg'>
                        <div className='w-full h-12 text-white bg-slate-700 hover:bg-slate-600 rounded-t-lg pl-2 pt-3'><Link to="/">Home</Link></div>
                        <div className='w-full h-12 text-white bg-slate-700 hover:bg-slate-600 pl-2 pt-3'><Link to="/gallary">Gallary</Link></div>
                        <div className='w-full h-12 text-white bg-slate-700 hover:bg-slate-600 pl-2 pt-3'><Link to="/commission">Commission</Link></div>
                        <div className='w-full h-12 text-white bg-slate-700 hover:bg-slate-600 rounded-b-lg pl-2 pt-3'>Contact</div>
                    </div>
                </div>
            </div>
            
            
        </div>

  )
}

export default Navbar