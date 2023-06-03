import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('have to be email form').required('email required'),
  name: yup.string().required('name required'),
  bio: yup.string().required('bio required'),
  password: yup
    .string()
    .min(8, 'passord have to be more than 8 words')
    .max(32, 'passord have to be less than 32 words')
    .required('passord required'),
});

export const SingUpForm = (externalSubmitHandler: (data: any) => void) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data: any) => {
    externalSubmitHandler(data);
    reset();
  };
  /*
  export interface CreateUser {
    email: string,
    password: string,
    name: string,
    bio: string
}
*/
  return (
    <form
      className="max-w-sm mx-auto mt-8"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <h2>Lets sign you up</h2>

      <div>
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          email:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register('email')}
          placeholder="email"
          type="email"
          required
        />
        {typeof errors.email?.message === 'string' && (
          <p>{errors?.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register('name')}
          placeholder="name"
          type="string"
          required
        />
        {typeof errors.name?.message === 'string' && (
          <p>{errors?.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
          bio:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register('bio')}
          placeholder="bio"
          type="string"
          required
        />
        {typeof errors.bio?.message === 'string' && (
          <p>{errors?.bio.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          password:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register('password')}
          placeholder="password"
          type="password"
          required
        />
        {typeof errors.password?.message === 'string' && (
          <p>{errors.password.message}</p>
        )}
      </div>
      <br />

      <button
        className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-500 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
        type="submit"
      >
        Sign up
      </button>
    </form>
  );
};
