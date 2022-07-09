import React from "react";
import {Link} from 'react-router-dom';
const Header=()=>{
    return(<>
    <header className="sticky flex justify-between w-4/5 ml-40 mt-1 h-10 bg-slate-500 rounded">
        <div className="no-underline uppercase ml-10 mt-1 mb-1 pt-1 px-2 rounded hover:bg-slate-100">
            <h1>
                <Link to='/'>
                Human Resource
                </Link>
            </h1>
        </div>
        <div className="flex">
            <ul className="no-underline uppercase mr-5 mt-1 mb-1 pt-1 px-2 rounded hover:bg-slate-100">
                <li>
                <Link to='/'>
               Home
                </Link></li>
            </ul>
            <ul className="no-underline uppercase mr-5 mt-1 mb-1 pt-1 px-2 rounded hover:bg-slate-100">
                <li>
                <Link to='/cart'>
                Cart
                </Link></li>
            </ul>
        </div>
    </header>
    </>
)}
export default Header;