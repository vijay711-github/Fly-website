/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter, FaSnapchat, FaLinkedin, FaTiktok, FaWhatsapp, FaPinterest, FaReddit, FaTelegram, FaMicrosoft, FaDribbble, FaQuora, FaVimeo, FaMeetup, FaXing } from 'react-icons/fa'
const testimonials = [
	{ tag: "Post on Fly and go live everywhere!" },
	{ tag: "Save time by posting to all your favorite platforms at once." },
	{ tag: "Create & edit your media content on Fly" },
	{ tag: "Manage and schedule your posts efficiently" },
	{ tag: "Track your post performance and engagement from a single dashboard" },
];
const MainConatiner = () => {
  return (
		<div>
			<h2 className="text-7xl my-10 text-center font-extralight">
				make your stories fly{" "}
				<span className="block "> on all social platforms!</span>
			</h2>
			<div className="flex justify-center">
				<div className="flex justify-center items-center text-5xl m-20 gap-5 w-[500px] flex-wrap">
					<FaYoutube className="text-red-500 cursor-pointer hover:scale-50 transition-all" />
					<FaInstagram className="text-red-500 cursor-pointer hover:scale-50 transition-all" />
					<FaFacebook className="text-blue-500 cursor-pointer hover:scale-50 transition-all" />
					<FaTwitter className="text-blue-400 cursor-pointer hover:scale-50 transition-all" />
					<FaSnapchat className="text-yellow-500 cursor-pointer hover:scale-50 transition-all" />
					<FaLinkedin className="text-blue-500 cursor-pointer hover:scale-50 transition-all" />
					<FaTiktok className="text-red-500 cursor-pointer hover:scale-50 transition-all" />
					<FaWhatsapp className="text-green-500 cursor-pointer hover:scale-50 transition-all" />
					<FaPinterest className="text-red-500 cursor-pointer hover:scale-50 transition-all" />
					<FaReddit className="text-red-500 cursor-pointer hover:scale-50 transition-all" />
					<FaTelegram className="text-blue-300 cursor-pointer hover:scale-50 transition-all" />
				</div>
			</div>
			<div className="flex justify-center">
				<button className="text-white bg-black py-4 px-8 m-2 rounded-lg text-2xl font-mono hover:translate-y-1">
					Join Now
				</button>
			</div>
			<h2 className="text-5xl text-center my-7 bold ">Why Fly?</h2>
			<div className="flex justify-center flex-wrap gap-10 font-bold  ">
				{testimonials.map((item, index) => (
					<div key={index} className="bg-blue-300 w-40 p-5 m-3 rounded-md">
						{item.tag}
					</div>
				))}
			</div>
			<div>
				<h2 className="text-center text-4xl  font-bold italic m">
					6 Top Social Media platforms and counting...
				</h2>
				<div className="flex justify-center">
					<div className="flex justify-center items-center text-5xl m-20 gap-5 w-[500px] flex-wrap">
						<FaMicrosoft className="text-blue-300 cursor-pointer animate-pulse hover:scale-50 transition-all" />
						<FaDribbble className="text-black-500 cursor-pointer animate-pulse hover:scale-50 transition-all" />
						<FaQuora className="text-red-500 cursor-pointer animate-pulse hover:scale-50 transition-all" />
						<FaVimeo className="text-blue-500 cursor-pointer animate-pulse hover:scale-50 transition-all" />
						<FaMeetup className="text-yellow-500 cursor-pointer animate-pulse hover:scale-50 transition-all" />
						<FaXing className="text-red-500 cursor-pointer animate-pulse hover:scale-50 transition-all" />
					</div>
				</div>
			</div>
			<div className="flex justify-center">
				<button className="text-white bg-black py-4 px-8 m-2 rounded-lg text-2xl font-mono hover:translate-y-1 animate-bounce">
					Join Now
				</button>
			</div>
		</div>
	);
}

export default MainConatiner