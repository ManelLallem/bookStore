import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';


function Home(props) {
    const navigate = useNavigate();
    return (
        <div id='home-container'>
            <h1 id='welcome-title'>Welcome to BookNest</h1>
            <p id='welcome-text'>Welcome to BookNest, where your next great read is just a click away! Dive into our curated collection of books across various genres, from timeless classics to the latest bestsellers. Whether you're a casual reader or a literary enthusiast, BookNest is your cozy corner for discovering stories that inspire, entertain, and ignite your imagination.</p>
            <input className='btn' id='login' type="button" value="Login" onClick={()=>navigate('/Login')} />
            <input className='btn' id='signup' type="button" value="Sign Up" onClick={()=>navigate('/SignUp')}/>
        </div>
    );
}

export default Home;