import React from 'react';


//  import images 
import logo15 from '../../Assets/logo/15.png'
import logo16 from '../../Assets/logo/3.png'
import logo17 from '../../Assets/logo/7.png'

const Value = () =>{
   return (
       <div className='mb-[4rem] mt-[6rem]'>
           <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>
            The Value that holds us true and to account 
           </h1>           
           <div className='grid gap-[10rem] grid-cols-3 items-center'>

            <div className='singleGrid rounded=[10px] hover:bg-[#eeed47] p-[1.5rem'>
                <div className='flex items-center gap-3'>

                    <div className='imgDiv p-[40px] rounded-[.8rem] bg-inherit-[#dedef8] h-[150px] w-[150px] flex items.center justify-center'>
                        <img src={logo15} alt="" className='w-[70%]'/>
                    </div>

                    <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
                </div>

                <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>things beinf made beaautiful simple are at the heart of everything we do.</p>
            </div>  {/* end of singleGrid*/}


            <div className='singleGrid rounded=[10px] hover:bg-[#eeed47] p-[1.5rem'>
                <div className='flex items-center gap-3'>

                    <div className='imgDiv p-[40px] rounded-[.8rem] bg-inherit-[#dedef8] h-[150px] w-[150px] flex items.center justify-center'>
                        <img src={logo16} alt="" className='w-[70%]'/>
                    </div>

                    <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
                </div>

                <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>things beinf made beaautiful simple are at the heart of everything we do.</p>
            </div>  {/* end of singleGrid*/}


            <div className='singleGrid rounded=[10px] hover:bg-[#eeed47] p-[1.5rem'>
                <div className='flex items-center gap-3'>

                    <div className='imgDiv p-[40px] rounded-[.8rem] bg-inherit-[#dedef8] h-[150px] w-[150px] flex items.center justify-center'>
                        <img src={logo17} alt="" className='w-[70%]'/>
                    </div>

                    <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
                </div>

                <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>things beinf made beaautiful simple are at the heart of everything we do.</p>
            </div>  {/* end of singleGrid*/}






           </div>

           <div className='card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]'>
            <div>
                <h1 className='text-blueColor text-[30px] font-bold'>Ready to switch a Careers</h1>
                <h2 className='text-textColor text-[25px] font-bold'>Let's get Started!</h2>
                </div>

                <button className='border-[2px] rounded-[18px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor
                        hover:bg-white border-blueColor'>Get Started</button>
            </div>
            
       </div>


   )
}


export default Value

