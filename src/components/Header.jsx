import React from 'react'

const Header = () => {
  return (
		<>
			<div className="flex justify-between p-5 ">
			  <div>
				  <h2 className="text-2xl">
					  <span className="bg-gradient-to-r from-red-500 via-pink-500  to-purple-500 text-transparent bg-clip-text">FLY</span>
					  </h2>
				</div>
				<div>
					<button className="py-3 px-7 bg-slate-800 text-white rounded-md hover:bg-slate-600">
						Login
					</button>
				</div>
			</div>
			<h1 className="text-center  font-bold text-7xl italic">FLY</h1>
		</>
	);
}

export default Header