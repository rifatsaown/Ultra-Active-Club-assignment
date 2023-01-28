import React from 'react';
import { BiDumbbell } from 'react-icons/bi';

const Header = () => {
    return (
        <div>
            <h1 className='text-[#6d6ff0] flex text-2xl font-bold'><BiDumbbell className='mr-2 text-4xl'/> Uttara Active Club </h1>
            <h2 className='text-lg font-semibold mt-4 ml-1'>Select todays exercise</h2>
        </div>
    );
}

export default Header;
