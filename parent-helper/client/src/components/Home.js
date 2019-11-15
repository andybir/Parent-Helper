import React from 'react'
import { Link } from 'react-router-dom'
import jjByrne from '../images/jj-byrne-pg.jpg'


const Home = () => {

    return (
        <div className='home'>
            <img className='home-img' src={jjByrne} alt='jj-byrne-pg' />
            <div className='home-links'>
            <h2 className='home-click'><Link to='/topics'>Browse Topics</Link></h2>
            {/* <h2 className='home-click'><Link to='/new-post'>Create Post</Link></h2> */}
            </div>
        </div>
    )







}

export default Home