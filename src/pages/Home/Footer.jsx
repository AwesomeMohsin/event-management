import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-neutral ">
            <footer className="footer items-center p-4 text-neutral-content md:container mx-auto">
                <aside className="items-center mx-auto md:mx-0 grid-flow-col md:justify-self-start">
                    <img src="/logo.ico" alt="" />
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>


                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end mx-auto md:mx-0">

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


                </nav>
            </footer>
        </div>

    );
};

export default Footer;