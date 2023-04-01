import React, { useEffect, useState } from 'react';

const CardDetaile = ({ readTime, bookmarks }) => {
    const [time, setTime] = useState(readTime);
    useEffect(() => {
        const getreadTimeFromStorage = localStorage.getItem("readTime");
        setTime(getreadTimeFromStorage);
    }, [readTime]);
    return (
        <div className=''>
            <h3 className='card p-3 text-center text-primary bg-light'>Spent time on read : {time}</h3>
            <div className='card p-3 bg-light'>
                <h3>Bookmarked Blogs : {bookmarks.length}</h3>
                {
                    bookmarks.map(bookmark => <h6 className='card p-2'>{bookmark}</h6>)
                }
            </div>
        </div>
    );
};

export default CardDetaile;