import React from 'react'

const Header = () => {
  return (
		<>
			<div className="flex justify-between p-5 ">
				<div>
					<img
						src="/src/assets/flylogo.png "
						className="w-25 h-20"
						alt=" logo"
					/>
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