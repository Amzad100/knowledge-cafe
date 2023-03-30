import React from 'react';

const SingleCard = (props) => {
    const { id, autharName, blogTitle, autharImg, readTime, publishDate, coverImg } = props.item;
    return (
        <>
            <div className="md:col-span-4 col-span-4 col-start-2 md:col-start-2  lg:col-span-2 ...">
                <div className="card card-compact w-100 bg-base-100 shadow-xl">
                    <figure><img src={coverImg} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="navbar">
                            <div className="flex-1">
                                <div>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full flex flex-nowrap">
                                            <img src="https://cdn.pixabay.com/photo/2017/06/17/10/17/entrepreneur-2411763_960_720.jpg" />
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <div>
                                        <h1 className='text-xl font-bold'>{autharName}</h1>
                                        <p>{publishDate}</p>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <h1 className="text-xl">{readTime} min read</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleCard;