import React from 'react';
import './Home.css';
import img1 from '../../Assets/img1.jpg'

const Home = () => {
  return (
    <section className='homeSection'>
        
        <div className='imgDiv'>
            <img src={img1} alt='Interview-img' />
        </div>

        <div className='homeContent'>
            <div className='textDiv'>
                <h1>Introducing treehouse's Career Toolbox Track</h1>
            </div>

            <button className='btn' >Continue Reading</button>
        </div>

    </section>
  )
}

export default Home
