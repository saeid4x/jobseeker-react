import React from 'react'
import NavBar from './components/NavBar/navbar'
import Search from './components/SearchDiv/search'
import Value from './components/ValueDiv/value';
import Jobs from './components/JobDiv/jobs';
import Footer from './components/FooterDiv/footer';

const App =() =>{
  return (
    <div className='w-[85%] m-auto bg-white'> 
     <NavBar/>
     <Search/>
     <Jobs/>
     <Value/>
     <Footer/>

    </div>
  )
}

export default App