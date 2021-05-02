import React from 'react';
import Directory from '../../components/directory/directory.component'
import './homepage.style.scss';


const HomePage = () => (
    <div className='homepage'>
        <h1>Welcome to Flexy Boutique. Hurry now and get your collections @ a very cheap price!</h1>
        <Directory/>   
    </div>
);

export default HomePage;