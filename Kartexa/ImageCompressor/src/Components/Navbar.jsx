import React from "react"
import Logo from "../assets/react.svg"

const Navbar = () => {
	return (
		<nav className='flex bg-neutral-100 drop-shadow-sm font-sans justify-between w-screen p-6 text-slate-700'>
			<div className='flex basis-12 justify-end'>
				<img className='w-12 h-10' src={Logo} alt='Logo' />
			</div>
			<div className='flex basis-[35rem] justify-around text-lg '>
				<a className='hover:text-cyan-700' href='/'>
					Home
				</a>
				<a className='hover:text-cyan-700' href='/'>
					About
				</a>
				<a className='hover:text-cyan-700' href='/'>
					Login
				</a>
			</div>
		</nav>
	)
}

export default Navbar
