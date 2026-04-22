import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className="bg-[#f5f5f5] px-4 md:px-10 lg:px-18 pt-8 w-full text-gray-500">
    <div className="flex flex-wrap justify-center md:justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="max-w-80">
            <img src={assets.logo} alt="logo" className=" invert opacity-80" />
            <p className="mt-6 text-sm">
            Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
            </p>
            <div className="flex items-center gap-3 mt-6">
                <img src={assets.instagramIcon} alt="instagram" className="w-5 h-5" />
                <img src={assets.facebookIcon} alt="facebook" className="w-5 h-5" />
                <img src={assets.twitterIcon} alt="twitter" className="w-5 h-5" />
                <img src={assets.linkendinIcon} alt="linkendin" className="w-5 h-5" />
            </div>
        </div>
        <div className=" flex flex-wrap items-start justify-center md:justify-end gap-20">
            <div>
                <h2 className="font-playfair mb-5 text-gray-600 text-lg font-bold">COMPANY</h2>
                <ul className="text-sm space-y-2">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/press">Press</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/partners">Partners</Link></li>
                    
                </ul>
            </div>

            <div>
                <h2 className="font-playfair mb-5 text-gray-600 text-lg font-bold ">SUPPORT</h2>
                <ul className="text-sm space-y-2">
                    <li><Link to="/help-center">Help Center</Link></li>
                    <li><Link to="/terms-of-service">Safety Information</Link></li>
                    <li><Link to="/legal">Cancellation Options</Link></li>
                    <li><Link to="/privacy-policy">Contact Us</Link></li>
                    <li><Link to="/privacy-policy">Accessibility</Link></li>
                </ul>
            </div>
            <div className="max-w-80">
                <h2 className="font-playfair text-gray-600 text-lg font-bold mb-5">STAY UPDATED</h2>
                <div className="text-sm space-y-2">
                    <p>Subscribe to our newsletter for travel inspiration and special offers.</p>
                    <div className="flex items-center gap-2 pt-4">
                        <input className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2" type="email" placeholder="Enter your email" />
                        <button className  ="cursor-pointer bg-black py-2 px-2 text-white rounded text-sm">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center md:justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <p className="pt-4 text-center text-xs md:text-sm pb-5">
             © 2026 QuickStay. All Right Reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link to="/privacy-policy" className="text-gray-500">Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500">Terms</Link>
            <Link to="/sitemap" className="text-gray-500">Sitemap</Link>
        </div>
    </div>
</footer>
  );
};

export default Footer;