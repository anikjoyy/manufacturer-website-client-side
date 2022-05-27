import React from 'react';
import signUpImage from '../../assets/images/signImage.png';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle';

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  let signInError;

  if (user || gUser) {
    console.log(user || gUser);
  }

  if (error || gError || updateError) {
    signInError = (
      <p className='text-red-500'>
        <small>
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    navigate('/allProduct');
  };

  return (
    <div
      className='hero min-h-[65vh] bg-opacity-70'
      style={{
        backgroundImage: `url(${signUpImage})`,
      }}
    >
      <PageTitle title='SignUp'></PageTitle>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center '>
          <h1 className='text-5xl font-bold text-secondary'>Sign Up Here!</h1>
          <p className='text-primary pt-3 font-semibold'>
            Welcome! Please give your information and get the awesome things
            here.
          </p>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            <h2 className='text-center text-2xl font-bold'>Sign Up </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='input input-bordered w-full max-w-xs'
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is Required',
                    },
                  })}
                />
                <label className='label'>
                  {errors.name?.type === 'required' && (
                    <span className='label-text-alt text-red-500'>
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
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
                value='Sign Up'
              />
            </form>
            <p>
              <small>
                Already Have an Account?{' '}
                <Link className='text-error' to='/login'>
                  Log in now
                </Link>
              </small>
            </p>
            <div className='divider lg:divider-vertical '>OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className='btn btn-secondary'
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
