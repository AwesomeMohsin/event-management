import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {

    const {createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                
            })
            .catch(error => {
                console.error(error)
            })
        
    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center pb-10">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* form */}

                    <form onSubmit={handleRegister} className="card-body">

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
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className="pt-6">Already have an account? <Link
                            to='/login'
                            className="text-blue-500 font-semibold"
                        >Login</Link> </p>

                        <hr />
                        <div>
                            <h2>Sign in</h2>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Register;