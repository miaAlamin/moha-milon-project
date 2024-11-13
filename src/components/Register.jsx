import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {


    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();


    const RegisterHandle = (e)=>{
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(email, password, name)

        createUser(password, email)
        .then(result=>{
            console.log(result.user)
            e.target.reset();
            navigate('/')


        })
        .catch(error=>{
            console.log(error.message)
        })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={RegisterHandle} className="card-body">
                        <h1 className="font-bold text-3xl">Register</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                      
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        <p>have an account please {<Link className="text-blue-500 underline" to='/login'>Login</Link>} </p>
                        </div>
                    </form>
                    </div>
                </div>
             </div>
    );
};

export default Register;