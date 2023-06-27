import React from 'react';

// import react icons 
import {BiTimeFive} from 'react-icons/bi'

//import Images
import logo1 from '../../Assets/logo/1.png'
import logo2 from '../../Assets/logo/2.png'
import logo3 from '../../Assets/logo/3.png'
import logo4 from '../../Assets/logo/4.png'
import logo5 from '../../Assets/logo/5.png'
import logo6 from '../../Assets/logo/6.png'
import logo7 from '../../Assets/logo/7.png'
import logo8 from '../../Assets/logo/8.png'
import logo9 from '../../Assets/logo/9.png'
import logo10 from '../../Assets/logo/10.png'
import logo11 from '../../Assets/logo/10.png'
import logo12 from '../../Assets/logo/10.png'

const Data =[
    {
        id: 1,
        image: logo1,
        title: 'Web Developer ',
        time: 'Now' ,
        location: 'Canada' ,
        description:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nul quibusdam nam reiciendis esse dolore deserunt dolor quo asperiores. Labore, illo qui at
          possimus veritatis deserunt dolorem maiores commodi in` ,         
        company:  'Novac Linus Co.'
    },
    {
        id: 2,
        image: logo2,
        title: 'UI Designer',
        time: 'Now' ,
        location: 'Manchester' ,
        description:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nul quibusdam nam reiciendis esse dolore deserunt dolor quo asperiores. Labore, illo qui at
          possimus veritatis deserunt dolorem maiores commodi in` ,         
        company:  'The Interactive College'
    },
    {
        id: 2,
        image: logo2,
        title: 'UI Designer',
        time: 'Now' ,
        location: 'Manchester' ,
        description:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nul quibusdam nam reiciendis esse dolore deserunt dolor quo asperiores. Labore, illo qui at
          possimus veritatis deserunt dolorem maiores commodi in` ,         
        company:  'The Interactive College'
    },
    {id: 1, image: logo3, title: 'Web Developer', time: 'Tomorrow', location: 'London', description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nul quibusdam nam reiciendis esse dolore deserunt dolor quo asperiores. Labore, illo qui at. possimus veritatis deserunt dolorem maiores commodi in`, company: 'Tech Solutions'},
   {id: 2, image: logo4, title: 'Graphic Designer', time: 'Today', location: 'New York', description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nul quibusdam nam reiciendis esse dolore deserunt dolor quo asperiores. Labore, illo qui at. possimus veritatis deserunt dolorem maiores commodi in`, company: 'Creative Minds'},
     {id: 3, image: logo6, title: 'Marketing Manager', time: 'Next Week', location: 'Paris', description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nul quibusdam nam reiciendis esse dolore deserunt dolor quo asperiores. Labore, illo qui at. possimus veritatis deserunt dolorem maiores commodi in`, company: 'Global Marketing Inc.'},
    {id: 4, image: logo7, title: 'Software Engineer', time: 'Next Month', location: 'San Francisco', description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nul quibusdam nam reiciendis esse dolore deserunt dolor quo asperiores. Labore, illo qui at. possimus veritatis deserunt dolorem maiores commodi in`, company:'Innovative Tech'},
    {id: 5, image: logo8, title:'Project Manager', time:'Next Week', location:'Sydney', description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nul quibusdam nam reiciendis esse dolore deserunt dolor quo asperiores. Labore, illo qui at. possimus veritatis deserunt dolorem maiores commodi in`, company:'Global Projects Inc.'},
     {id: 6, image: logo9, title:'UX Designer', time:'Now', location:'Berlin', description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nul quibusdam nam reiciendis esse dolore deserunt dolor quo asperiores. Labore, illo qui at. possimus veritatis deserunt dolorem maiores commodi in`, company:'Design Solutions'},
    {id: 7, image: logo10, title:'Content Writer', time:'Tomorrow', location:'Toronto', description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nul quibusdam nam reiciendis esse dolore deserunt dolor quo asperiores. Labore, illo qui at. possimus veritatis deserunt dolorem maiores commodi in`, company:'Creative Content Co.'},
    {id: 8, image: logo11, title:'Data Analyst', time:'Next Month', location:'Tokyo', description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nul quibusdam nam reiciendis esse dolore deserunt dolor quo asperiores. Labore, illo qui at. possimus veritatis deserunt dolorem maiores commodi in`, company:'Data Insights'},
     {id: 9, image: logo12, title:'Sales Manager', time:'Today', location:'Los Angeles', description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nul quibusdam nam reiciendis esse dolore deserunt dolor quo asperiores. Labore, illo qui at. possimus veritatis deserunt dolorem maiores commodi in`, company:'Sales Solutions'},
]

const Jobs = () =>{
   return (
       <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>

        {Data.map(({id,title,image,description,time,location,company})=>{
        return (          
               
            <div key={id} className='group groupItem singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
            <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive /> {time}
                </span>
            </span>
            
            <h6 className='text-[#ccc]'>{location}</h6>
            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{description}</p>
            <div className='compaany flex items-center gap-2'>
                <img src={image} alt="Company Logo" className='w-[10%]'/>
                <span className='text-[14px] py-[1rem] block group-hover:text-white '>{company}</span>
            </div>
            <button className='border=[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white  '>Apply Now</button>
        </div>
            )

        })}

              
    
            
       </div>
   )
}


export default Jobs

