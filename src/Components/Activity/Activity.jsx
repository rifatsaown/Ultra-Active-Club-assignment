import React from 'react';
import Exercise from '../Exercise/Exercise';
import Myinfo from '../Myinfo/Myinfo';


const Activity = () => {
    return (
        <div className='p-5'>
           <Myinfo/>
           <h1 className='text-xl font-bold'>Add A Break</h1>
           <Exercise/>
        </div>
    );
}

export default Activity;
