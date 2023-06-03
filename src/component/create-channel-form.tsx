import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('name required'),
  members: yup.string().required('members required'),
  type: yup.string().required('type required'),
});

export const CreateChannelForm = (
  externalSubmitHandler: (data: any) => void
) => {
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
  return (
    <form
      className="max-w-sm mx-auto mt-8"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <h2>Lets create new channel</h2>
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
        <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
          Type:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register('type')}
          placeholder="type"
          type="string"
          required
        />
        {typeof errors.type?.message === 'string' && (
          <p>{errors?.type.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="members" className="block text-gray-700 font-bold mb-2">
          members:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register('members')}
          placeholder="members"
          type="string"
          required
        />
        {typeof errors.members?.message === 'string' && (
          <p>{errors?.members.message}</p>
        )}
      </div>

      <br />

      <button
        className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-500 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
        type="submit"
      >
        Create
      </button>
    </form>
  );
};
