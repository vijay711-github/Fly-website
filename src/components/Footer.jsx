import React from 'react'

const Footer = () => {
    return (
			<div className="bg-black text-white ">
				<div className=" flex justify-center gap-4 py-2">
					<p className="underline hover:text-gray-100 cursor-pointer">
						Terms of use
					</p>
					<p className="underline hover:text-gray-100 cursor-pointer">
						Privacy policy
					</p>
					<p className="underline hover:text-gray-100 cursor-pointer">
						Cookie Policy
					</p>
					<p className="underline hover:text-gray-100 cursor-pointer">
						Feedback
					</p>
				</div>

				<h2 className="text-center p-3">
					@2023 ZoomLocal Tech Private Limited, India
				</h2>
			</div>
		);
}

export default Footer