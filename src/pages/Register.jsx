import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';

const googleProvider = new GoogleAuthProvider()

const Register = () => {

    const [error, setError] = useState('')
    const [show, setShow] = useState(false)


    const handleSignUp = (e) => {
        e.preventDefault();
        const displayName = e.target.name.value
        const photoURL = e.target.photoURL.value
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(name, photoURL, password);


        // if (password.length < 6) {
        //     console.log('wrong password');

        // }

        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!regex.test(password)) {
            setError("Password must contain at least one uppercase, one lowercase letter, and be at least 6 characters long.");
        }



        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                updateProfile(res.user, {
                    displayName,
                    photoURL,
                }).then(res => {
                    console.log(res);
                })
                    .catch((e) => {
                        toast.error(e.message)
                    })
            })
            .catch((e) => {
                console.log(e.code);
                if (e.code == 'auth/email-already-in-use') {
                    setError('User Already Exist.')
                }
            })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                console.log(res);

            })
            .catch(e => {
                console.log(e);
            })
    };

    const handleForgetPass=()=>{
       sendPasswordResetEmail(auth,email) 
    }

    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl my-10">
            <form onSubmit={handleSignUp} className="card-body">
                <h1 className="text-4xl mb-3 font-bold text-center">Register now!</h1>
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' required className="input w-full" placeholder="Name" />
                    <label className="label">PhotoURL</label>
                    <input type="text" name='photoURL' required className="input w-full" placeholder="PhotoURL" />
                    <label className="label">Email</label>
                    <input type="email" name='email' required className="input w-full" placeholder="Email" />

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
                    <button onClick={handleForgetPass}><a className="link link-hover">Forgot password?</a></button>
                    <p className='text-red-600 w-full text-sm'>{error}</p>
                    <button className="btn btn-neutral mt-4 -mb-4">Register</button>

                </fieldset>
            </form>
            <div className='flex items-center justify-center gap-2 mb-3'>
                <div className='h-px w-19 bg-white/30'></div>
                <span className='text-sm text-white/70'>or</span>
                <div className='h-px w-19 bg-white/30'></div>
            </div>
            <button onClick={handleGoogleSignIn} className='flex bg-white text-black w-[88%] mx-auto gap-1.5 justify-center px-20 items-center btn'>
                <p><FcGoogle size={`20px`} /></p> <p>Continue with Google</p>
            </button>
            <p className='text-center mt-3 text-sm pb-5'>Already have an account? <Link className='hover:underline text-blue-500 font-bold' to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;