import React from 'react';

const Header = () => {
    return (
        <>
            <div className="navbar">
                <div className="flex-1">
                    <h1 className="text-3xl font-bold">Oeean of Education</h1>
                </div>
                <div>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://cdn.pixabay.com/photo/2017/06/17/10/17/entrepreneur-2411763_960_720.jpg" />
                        </div>
                    </label>
                </div>
            </div>
            <div>
                <hr />
            </div>
        </>
    );
};

export default Header;