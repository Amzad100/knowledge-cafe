import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import CardDetaile from '../CardDetailes/CardDetaile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllCards = () => {
    const [readTime, setreadTime] = useState([0]);
    const [bookmarks, setBookmarks] = useState([]);

    const handlereadTime = (time) => {
        const previousreadTime = JSON.parse(localStorage.getItem("readTime"));
        if (previousreadTime) {
            const totalTime = previousreadTime + time;
            localStorage.setItem("readTime", totalTime);
            setreadTime(totalTime);
        } else {
            localStorage.setItem("readTime", time);
            setreadTime(time);
        }
    };
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    const handleBookmark = (item) => {
        const newBookmarks = [...bookmarks, item];
        setBookmarks(newBookmarks);
        // if (bookmarks.length === 0) {
        //     toast("Added Bookmark!");
        //     setBookmarks(newBookmarks);
        // } else {
        //     toast("This Bookmark is alrady added!");
        //     setBookmarks(newBookmarks);
        // }

    }
    return (
        <>
            <div className="main row">
                <div className="allCard-contianer col-md-8">
                    {
                        items.map((item) => (<SingleCard
                            handlereadTime={handlereadTime}
                            item={item}
                            key={item.id}
                            handleBookmark={handleBookmark}
                        ></SingleCard>))
                    }
                </div>
                <div className="cardDetailes col-md-4">
                    <CardDetaile readTime={readTime} bookmarks={bookmarks}></CardDetaile>
                </div>
            </div>

        </>
    );
};

export default AllCards;