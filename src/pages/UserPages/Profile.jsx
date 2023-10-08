import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Profile = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div className="md:container mx-auto py-20">
            <h2 className="text-center font-fontTitle text-4xl md:text-6xl pb-4">Profile</h2>
            <hr className="w-1/3 mx-auto" />
            <hr className="w-1/3 mx-auto pb-20" />

            {/* user details */}
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    {
                        user.photoURL !== null ? <img src={user.photoURL} /> : <img className="rounded-full" src="/icons/user.png" />
                    }
                    <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{user.displayName}</h1>
                        <p className="py-6">Email: {user.email}</p>
                        <p className="">Unique ID: {user.uid}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;