import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {

    const {createUser2, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate(null)

    const LoginHandle = (e)=>{
        e.preventDefault();

        
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        console.log(email, password)

        createUser2(email, password)
        .then(result =>{
            console.log(result.user)
            e.target.reset();
            navigate('/');
        })
        .catch(error=>{
            console.log(error.message)
        })

    }


    const googleLoginHadle = ()=>{

        googleLogin()

        .then(result =>{
            console.log(result.user)
            navitate('/')
        })
        .catch(error=>{
            console.log(error.messgae);
        })
    }
    return (
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={LoginHandle} className="card-body">
                        <h1 className="font-bold text-3xl">Login</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        <p>have't an account please {<Link className="text-green-500 underline" to='/register'>Register</Link>} </p>
                        </div>
                        <button onClick={googleLoginHadle} className="btn">Google login</button>
                    </form>
                    </div>
                </div>
             </div>
    );
};

export default Login;