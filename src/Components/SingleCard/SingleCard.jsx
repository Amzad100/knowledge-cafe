import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleCard = ({ item, handlereadTime, handleBookmark }) => {
    return (
        <>
            <div className="card mb-3">
                <img src={item.coverImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <img className="rounded-circle" width="50" height="50" src={item.autharImg} alt="Logo" />
                            <div className="ms-2">
                                <h5 className='mb-0'>{item.autharName}</h5>
                                <p className='mt-0'>{item.publishDate}</p>
                            </div>
                        </div>
                        <div>
                            <p >{item.readTime} min read <span onClick={() => handleBookmark(item.blogTitle)} role='button' href=""><FontAwesomeIcon icon={faBookmark} /></span></p>
                        </div>
                    </div>
                    <h5 className="card-title">{item.blogTitle}</h5>
                    <p className="card-text">#beginners #programming</p>
                    <a onClick={() => handlereadTime(item.readTime)} className="card-text" role='button'>Mark as read</a>
                </div>
            </div>
        </>
    );
};

export default SingleCard;
// thanks