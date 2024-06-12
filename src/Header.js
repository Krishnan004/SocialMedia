import React from 'react'

const Header = ({Tittle}) => {
    return (
        <header className="font-mono p-2 text-center bg-slate-400 text-4xl ">
            <h1 >{Tittle}</h1>
        </header>
    )
}

export default Header
