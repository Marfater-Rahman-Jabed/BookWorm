import { success } from 'daisyui/src/colors';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import imgLogin from '../../Assets/AcadenicBook.jpg';
import { AuthContexts } from '../../Contexts/AuthContext';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, googleLogIn } = useContext(AuthContexts);
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('')
    const [token] = useToken(userEmail);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const onsubmit = data => {
        console.log(data)

        if (token) {
            navigate(from, { replace: true });
        }

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const profile = {
                    displayName: data.name
                }
                updateUser(profile)
                    .then(result => {
                        saveUser(data)
                    })
                    .catch(error => console.log(error))

                toast.success('Register successfully');
                navigate(from, { replace: true });

            })
            .catch(error => console.error(error))


    }

    const saveUser = (data) => {

        const details = {
            userName: data.name,
            email: data.email,
            role: data.role
        }

        fetch(`https://used-book-server.vercel.app/useradd`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserEmail(data.email)
            })
    }
    const handleGoogle = (provider) => {
        googleLogIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Register successfully')
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className="hero my-12 ">
            <div className="hero-content gap-0 flex-col lg:flex-row">
                <div className="text-center lg:text-left shadow-2xl bg-base-100 ">

                    <img src={imgLogin} alt="" className='h-[708px] lg:w-[500px] rounded-l-lg' />
                </div>
                <div className="card flex-shrink-0 w-full  lg:w-[500px] shadow-2xl bg-base-100 rounded-l-none ">
                    <form className="card-body" onSubmit={handleSubmit(onsubmit)}>
                        <h1 className="text-5xl font-bold">Register Now</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register('name')} className="input input-bordered" />
                        </div>
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

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select Your Identity</span>
                            </label>
                            <select className="select w-full "  {...register('role')}>

                                <option value='buyer'>Buyer</option>
                                <option value='seller'>Seller</option>

                            </select>
                            <label className="label">
                                <p>Already Have an account? <Link to='/login' className='label-text-alt link link-hover'>Please Login</Link></p>

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="text-center mb-3">
                        <button className="btn btn-outline w-1/2" onClick={handleGoogle}>Sign Up With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SignUp;