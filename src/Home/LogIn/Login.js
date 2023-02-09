import React from 'react';
import { useForm } from 'react-hook-form';
import imgLogin from '../../Assets/images.jpg'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onsubmit = data => {
        console.log(data)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left  ">

                    <img src={imgLogin} alt="" className='h-[394px]' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 -0">
                    <form className="card-body" onSubmit={handleSubmit(onsubmit)}>
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" {...register('email')} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" {...register('password')} />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;