import React from 'react';


//import Icons from React Icons 
import {AiOutlineCloseCircle, AiOutlineSearch} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'

const Search = () =>{
   return (
       <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
        <form action="">
            <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
                
                
                {/* Search by Term jobs */}
                <div className='flex gap-2 items-center '>
                    <AiOutlineSearch className='text-[25px] icon'/>
                    <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Jobs here.....' />
                    <AiOutlineCloseCircle  className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                </div>

                
                {/* Search by company */}
                <div className='flex gap-2 items-center '>
                    <BsHouseDoor className='text-[25px] icon'/>
                    <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by company.....' />
                    <AiOutlineCloseCircle  className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                </div>

                
                {/* Search by Location */}
                <div className='flex gap-2 items-center '>
                    <CiLocationOn className='text-[25px] icon'/>
                    <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by location.....' />
                    <AiOutlineCloseCircle  className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                </div>

                <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Search</button>






                
            </div>

        </form>

        <div className='secDiv flex items-center gap-10 justify-center'>


          {/* search by: relevance */}
            <div className='singleSearch flex items-center gap-2'>
                <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort by:</label>
                <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
                    <option value="">Relevance</option>
                    <option value="">Inclusive</option>
                    <option value="">Starts With</option>
                    <option value="">Contains</option>                 
                </select>
            </div>


            {/* search by type of jobs */}
            <div className='singleSearch flex items-center gap-2'>
                <label htmlFor="type" className='text-[#808080] font-semibold'>Type:</label>
                <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1'>
                    <option value="">full-time</option>
                    <option value="">Remote</option>
                    <option value="">Contract </option>
                    <option value="">part-time</option>                                    
                </select>
            </div>

            {/* search by level */}
            <div className='singleSearch flex items-center gap-2'>
                <label htmlFor="level" className='text-[#808080] font-semibold'>Level:</label>
                <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1'>
                    <option value="">Senior</option>
                    <option value="">Beginner</option>
                    <option value="">Intermediate</option>
                    <option value="">Advocate</option>                    
                </select>
            </div>

            <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>




           
        </div>
            



       </div>
   )
}


export default Search

