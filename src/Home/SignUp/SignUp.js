import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import imgLogin from '../../Assets/AcadenicBook.jpg';
import { AuthContexts } from '../../Contexts/AuthContext';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContexts);
    const onsubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const profile = {
                    displayName: data.name
                }
                updateUser(profile)
                    .then(result => {

                    })
                    .catch(error => console.log(error))

            })
            .catch(error => console.error(error))


    }
    return (
        <div className="hero my-12 ">
            <div className="hero-content gap-0 flex-col lg:flex-row">
                <div className="text-center lg:text-left shadow-2xl bg-base-100 ">

                    <img src={imgLogin} alt="" className='h-[608px] lg:w-[500px] rounded-l-lg' />
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
                        <button className="btn btn-outline w-1/2">Sign Up With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SignUp;