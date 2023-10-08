import { Map, Marker } from "pigeon-maps";
import { MdCall, MdEmail } from "react-icons/md";


const Contact = () => {
    return (
        <div className="md:container flex flex-col md:flex-row justify-around gap-6 mx-auto md:py-20  rounded-xl mt-10 mb-10">
            {/* Directions */}
            <div className="flex-1 shadow-xl rounded-lg">
                <h2 className="font-fontTitle text-center text-5xl pb-10 pt-10">Get Direction</h2>

                <div className="w-10/12 mx-auto">
                <Map height={400} defaultCenter={[23.81511430868483, 90.42568198871332]} defaultZoom={11}>
                    <Marker width={50} anchor={[23.81511430868483, 90.42568198871332]} />
                </Map>
                </div>

                <div className="py-6 w-10/12 mx-auto">
                <h4 className="text-xl font-semibold">Office Address:</h4>
                <h4 className="text-lg">KA-244, Kuril, Progoti Shoroni, Dhaka</h4>
                </div>

            </div>

            {/* Get in touch */}
            <div className="flex-1 shadow-xl rounded-lg">
            <h2 className="font-fontTitle text-center text-5xl pb-10 pt-10">Get in touch</h2>

                <form className="w-10/12 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        
                        <input
                            type="text"
                            name="message"
                            placeholder="Message" className="input input-bordered h-500" required />
                    </div>
                    <div className="pt-10">
                    <button className="btn btn-outline">Submit</button>
                    </div>
                </form>


                
                <hr className="text-black w-10/12 mx-auto font-bold mt-10"/>
                
                <div className="w-10/12 py-6 mx-auto">
                <p className="flex gap-2 items-center lg:text-xl"><MdCall className="text-3xl"></MdCall> +880 123 456 789</p>
                <p className="flex gap-2 items-center lg:text-xl pt-3"><MdEmail className="text-3xl"></MdEmail> awesome-event@management.com</p>
               </div>
            </div>
        </div>
    );
};

export default Contact;