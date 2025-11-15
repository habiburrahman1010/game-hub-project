import React from 'react';
import ErrorImg from "../assets/images (1).png"

const Error = () => {
    return (
        <div className='w-11/12 mx-auto p-12 flex justify-center items-center'>
            <img className='w-[400px] h-[400px]' src={ErrorImg} alt="404 error" />
        </div>
    );
};

export default Error;