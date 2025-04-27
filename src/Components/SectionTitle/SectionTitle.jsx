import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-8'>
            <p className='text-yellow-600 mb-2'>--- {subHeading} ---</p>
            <h2 className='text-2xl md:text-4xl uppercase border-y-4 py-5'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;