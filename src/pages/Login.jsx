import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import { auth } from '../firebase/firebase.config';

import { FcGoogle } from 'react-icons/fc';

const googleProvider = new GoogleAuthProvider()


const Login = () => {
    const [user, setUser] = useState(null)
    const [show, setShow] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res);
                setUser(res.user)
            })
            .catch(e => {
                console.log(e);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                console.log(res);
                setUser(res.user)
            })
            .catch(e => {
                console.log(e);
            })
    }

    const handleLogOut = () => {
        signOut(auth).then(() => {
            console.log('sign out');
            setUser(null)
        })
            .catch(e => {
                console.log(e);

            })
    }


    return (

        <div className="card bg-base-100 mx-auto w-full my-10 max-w-sm shrink-0 shadow-2xl">
            {user ?
                <div className='text-center space-y-3'>
                    <img src={user?.photoURL || 'https://via.placeholder.com/88'} className='h-[80px] mx-auto rounded-full w-[80px] ' alt="" />
                    <h2 className='text-xl font-semibold'>{user?.displayName}</h2>
                    <h2 className='text-white/80 '>{user?.email}</h2>
                    <button onClick={handleLogOut} className='btn'>Log Out</button>
                </div> : <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-4xl font-bold text-center mb-3">Login now!</h1>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" required name='email' className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input
                                type={show ? 'text' : "password"}
                                name='password'
                                required className="input w-full" placeholder="Password" />
                            <span onClick={() => setShow(!show)} className='absolute right-[12px] top-[12px] z-50 cursor-pointer text-lg'>
                                {show ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>

                    </fieldset>
                </form>}
            <div className='flex items-center justify-center gap-2 mb-3.5 -mt-4'>
                <div className='h-px w-19 bg-white/30'></div>
                <span className='text-sm text-white/70'>or</span>
                <div className='h-px w-19 bg-white/30'></div>
            </div>
            <button onClick={handleGoogleSignIn} className='flex bg-white  w-[88%] mx-auto gap-1.5  text-black justify-center px-20 items-center btn'>
                <p><FcGoogle size={`20px`} /></p> <p>Continue with Google</p>
            </button>
            <p className='text-center mt-3 text-sm pb-5'>Don't have an account? <Link className='underline text-blue-500 font-bold' to='/register'>Register</Link></p>
        </div>

    );
};

export default Login;