import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import imgLogin from '../../Assets/AcadenicBook.jpg';
import { AuthContexts } from '../../Contexts/AuthContext';
import useAdmin from '../../Hooks/useAdmin';
import useBuyer from '../../Hooks/useBuyer';
import useSeller from '../../Hooks/useSeller';
import useToken from '../../Hooks/useToken';
import Loading from '../../Loading/Loading';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { LogIn, user, googleLogIn } = useContext(AuthContexts);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [LoginEmail, setLoginEmail] = useState('');
    const [token] = useToken(LoginEmail);


    const [Admin, adminLoading] = useAdmin(user?.email);
    const [seller, sellerLoading] = useSeller(user?.email);
    const [buyer, buyerLoading] = useBuyer(user?.email);
    const onsubmit = data => {
        // console.log(data)

        if (token) {
            navigate(from, { replace: true });
        }


        LogIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginEmail(data.email);
                toast.success('successfully Logged in');
                navigate(from, { replace: true });


            })
            .catch(error => console.error(error))


        // else {
        //     toast.error('Sorry You have not an account Please Register First')
        //     navigate('/register')
        // }




    }

    // const handleGoogle = () => {
    //     googleLogIn()
    //         .then(result => {
    //             const user = result.user;
    //             toast.success('successfully Login');
    //             setLoginEmail(user?.email)
    //             navigate(from, { replace: true });
    //             console.log(user)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })

    // }

    return (
        <div className="hero my-12">
            <div className="hero-content gap-0 flex-col lg:flex-row">
                <div className="text-center lg:text-left shadow-2xl bg-base-100 ">

                    <img src={imgLogin} alt="" className='h-[514px] lg:w-[500px] rounded-l-lg ' />
                </div>
                <div className="card flex-shrink-0 w-full lg:w-[500px] shadow-2xl bg-base-100 rounded-l-none ">
                    <form className="card-body" onSubmit={handleSubmit(onsubmit)}>
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register('email')} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" {...register('password')} />
                            <label className="label flex justify-between">
                                <p>New in Bookworm?<Link to="/register" className="label-text-alt link link-hover">Register</Link></p>

                                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="text-center mb-3">
                        <button className="btn btn-outline w-1/2" >Sign In With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;