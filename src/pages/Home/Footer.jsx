import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer footer-center border-t-4 p-10 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <button className="text-3xl"
                        ><FaFacebook></FaFacebook></button>
                    </a>

                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <button className="text-3xl"
                        ><FaInstagram></FaInstagram></button>
                    </a>

                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                        <button className="text-3xl"
                        ><FaYoutube></FaYoutube></button>
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2023 - All right reserved by Awesome Event Management</p>
            </aside>
        </footer>

    );
};

export default Footer;