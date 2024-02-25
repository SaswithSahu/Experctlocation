import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import "./index.css"
const Home = () => {
  return (
    <div className='HomeContainer'>
     <Header/>
     <main className="home">
   
      <div className="content">
        <h1>Welcome to Your Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
     
    </main>
     <Footer/>
    </div>
    
  );
};

export default Home;
