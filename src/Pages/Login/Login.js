import React from 'react';
import regImage from '../../assets/images/registrationImage.png';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  if (error || gError) {
    signInError = (
      <p className='text-red-500'>
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div
      class='hero min-h-[65vh] bg-opacity-70'
      style={{
        backgroundImage: `url(${regImage})`,
      }}
    >
      <div class='hero-content flex-col lg:flex-row-reverse'>
        <div class='text-center '>
          <h1 class='text-5xl font-bold text-secondary'>Login Now!</h1>
          <p className='text-accent pt-3 font-semibold'>
            Welcome! Log in to our car Whisperer by providing your information.
          </p>
        </div>
        <div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div class='card-body'>
            <h2 className='text-center text-2xl font-bold'>Login </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='Your Email'
                  className='input input-bordered w-full max-w-xs'
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email is Required',
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email',
                    },
                  })}
                />
                <label className='label'>
                  {errors.email?.type === 'required' && (
                    <span className='label-text-alt text-red-500'>
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <span className='label-text-alt text-red-500'>
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='Your Password'
                  className='input input-bordered w-full max-w-xs'
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is Required',
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 characters or longer',
                    },
                  })}
                />
                <label className='label'>
                  {errors.password?.type === 'required' && (
                    <span className='label-text-alt text-red-500'>
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <span className='label-text-alt text-red-500'>
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}
              <input
                className='btn w-full max-w-xs text-white bg-primary hover:text-black'
                type='submit'
                value='Login'
              />
            </form>
            <p>
              <small>
                New to Car Whisperer?{' '}
                <Link className='text-error' to='/signup'>
                  Create New Account
                </Link>
              </small>
            </p>
            <div class='divider lg:divider-vertical '>OR</div>
            <button
              onClick={() => signInWithGoogle()}
              class='btn btn-secondary'
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
