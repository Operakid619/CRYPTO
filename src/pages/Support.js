import {React, useState, useEffect, useRef} from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import { CgMenu } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { RiDashboardFill } from 'react-icons/ri';
import { FaQuestion } from 'react-icons/fa6';
import { SlWallet } from 'react-icons/sl';
import { BiLogOut } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaUser, FaPhone, FaEnvelope, FaPen, FaListAlt } from 'react-icons/fa';
import { BiSupport } from "react-icons/bi";

const Support = () => {
const [isOpen, setIsOpen] = useState(false);
const drawerRef = useRef();

const toggleDrawer = () => {
  setIsOpen(!isOpen);
};

const handleClickOutside = (event) => {
  if (drawerRef.current && !drawerRef.current.contains(event.target)) {
    setIsOpen(false);
  }
};

useEffect(() => {
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <div className='min-h-screen flex bg-slate-200'>
        <header className='flex flex-col justify-between bg-black  h-full fixed z-40'>
            <div className='p-4'>
                <button onClick={toggleDrawer} className='text-white'>
                    <CgMenu size={20} />
                </button>
            </div>
            <div
              ref={drawerRef}
              className={`bg-[#0f1b39] p-8 transform top-0 left-0 absolute h-full transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-64'}`}
            >
              <button onClick={toggleDrawer} className='text-white pl-40 '>
                <AiOutlineClose size={24}/>
              </button>
              <nav className="mt-20 flex flex-col space-y-8">
                <Link to="/user" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
                  <RiDashboardFill className='text-2xl text-white'/>
                  <span className='text-xl text-white'>Dashboard</span>
                </Link>
                <Link to="/profile" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
                  <BsFillPersonFill className='text-2xl text-white'/>
                  <span className='text-xl text-white'>Profile</span>
                </Link>
                <Link to="/support" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
                  <BiSupport className='text-2xl text-white'/>
                  <span className='text-xl text-white'>Support</span>
                </Link>
                <Link to="/wallet" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
                  <SlWallet className='text-2xl text-white'/>
                  <span className='text-xl text-white'>My Wallet</span>
                </Link>
                <Link to="/login" className="mt-auto pt-40 flex items-center space-x-3">
                  <BiLogOut className='text-3xl text-white'/>
                  <span className='text-xl text-white'>Logout</span>
                </Link>
              </nav>
            </div>
        </header>
        <div className={`flex-grow transition-margin duration-300 ease-in-out ${isOpen ? 'ml-40' : 'ml-0'}`}>
          <main className='pt-10 ml-20 flex flex-col px-10 '>
              <div>
                  <h1 className='text-2xl font-bold text-black'>Support</h1>
              </div>
              <section className='pt-10 min-h-screen'>
              <form  className="contact-form text-black">
                <div className="form-group">
                  <FaUser className='text-black'/>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name*"
                    required
                  />
                </div>

                <div className="form-group">
                  <FaPhone className='text-black'/>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone*"
                    required
                  />
                </div>

                <div className="form-group">
                  <FaEnvelope className='text-black'/>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email*"
                    required
                  />
                </div>

                <div className="form-group">
                  <FaListAlt className='text-black'/>
                  <select
                    name="option"
                    required
                  >
                    <option value="">Choose your option*</option>
                    <option value="feedback">Feedback</option>
                    <option value="inquiry">Inquiry</option>
                    <option value="support">Support</option>
                  </select>
                </div>

                <div className="form-group1">
                
                  <textarea
                    name="message"
                    placeholder="Your Message*"
                    required
                   
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">SEND MESSAGE</button>
              </form>
              </section>
              <section>
              </section>
          </main>
        </div>
    </div>
  )
}

export default Support