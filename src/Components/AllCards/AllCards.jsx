import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const AllCards = ({ handlereadTime }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return (
        <>
            {
                items.map((item) => (<SingleCard handlereadTime={handlereadTime} item={item} key={item.id}></SingleCard>))
            }
        </>
    );
};

export default AllCards;