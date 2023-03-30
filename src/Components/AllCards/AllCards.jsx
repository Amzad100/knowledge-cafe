import React, { useEffect, useState } from 'react';
import CardDetaile from '../CardDetailes/CardDetaile';
import SingleCard from '../SingleCard/SingleCard';

const AllCards = () => {
    const [items, setItems] = useState([]);
    // console.log(items)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return (
        <>
            <div className="grid grid-cols-3 gap-4 mt-5">
                {
                    items.map(item => <SingleCard item={item} key={item.id}></SingleCard>)
                }
                <CardDetaile></CardDetaile>
            </div>
        </>
    );
};

export default AllCards;