import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-slate-100 text-base-content">
            <aside>
                <img width={140} loading='lazy' src="https://i.ibb.co/4FTjRr1/divasole-Logo.png" alt="LOGO" />
                <p className='font-semibold'>© 2023-2024, divaSole Emporium, Inc. or its affiliates<br />Providing reliable tech since 2023</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;