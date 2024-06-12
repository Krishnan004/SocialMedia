import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
    return (
        <nav className="bg-slate-800 flex justify-between items-center">
            <div className="bg-slate-800">
                <form className="inline-block" onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="w-96 border-2 rounded-xl px-4 py-2"
                        placeholder="Search"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </div>
            <ul className="flex text-2xl mr-16 ">
                <li className="text-white p-8 hover:bg-slate-900">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-white p-8 hover:bg-slate-900">
                    <Link to="/post">Post</Link>
                </li>
                <li className="text-white p-8 hover:bg-slate-900">
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;