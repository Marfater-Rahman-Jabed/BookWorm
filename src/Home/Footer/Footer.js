import React from 'react';
import imgLogo from '../../Assets/BookLogo.jpg'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white py-6 text-base-content ">
                <div>
                    <img src={imgLogo} className='w-44 rounded-lg' alt="" />
                    <p>BookWorm Ltd.<br />Providing  Book buy and sell <br />service since 2022</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover" href="https://wa.me/01827717200" target='_blank'>Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;