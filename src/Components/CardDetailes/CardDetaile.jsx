import React, { useEffect, useState } from 'react';

const CardDetaile = ({ readTime }) => {
    const [time, setTime] = useState(readTime);

    useEffect(() => {
        const getreadTimeFromStorage = localStorage.getItem("readTime");
        setTime(getreadTimeFromStorage);
    }, [readTime]);
    return (
        <div className=''>
            <h3 className='card p-3 text-center text-primary bg-light'>Spent time on read : {time}</h3>
            <div className='card p-3 bg-light'>
                <h3>Bookmarked Blogs : </h3>
                <p className='card p-2'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
    );
};

export default CardDetaile;