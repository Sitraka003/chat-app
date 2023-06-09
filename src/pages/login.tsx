import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios";
import ErrorMessage from "@/components/error-message";
import { loginSchema } from "@/schemas";

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [loginError, setLoginError] = useState<string | null>(null);
  const [emaiUser, setEmailUser] = useState<string>("")
  const [passwordUser, setPasswordlUser] = useState<string>("")

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await axios.post("http://127.0.0.1:8080/users/login", data)

      if (response.status === 200) {
        const token = response.data.user.token
        const user_id = response.data.user.id
        const user_name = response.data.user.name
        localStorage.setItem("token", token);
        localStorage.setItem("user_id", user_id)
        localStorage.setItem("user_name", user_name)
        router.push("/profile");
      } else {
        setLoginError("Invalid email or password");
        console.log(loginError)
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center pt-48 pb-52 bg-gradient-to-b from-gray-200 to-black">
      <form
        className="flex flex-col border-4 border-gray-500 px-5 py-7 w-3/12 h-54 rounded-lg shadow-2xl"
        onSubmit={handleSubmit(() => onSubmit({
            "email": emaiUser,
            "password": passwordUser
        }))}
      >
        <div>
          <h4 className="text-yellow-500 text-2xl text-bold text-center mb-2">registrationForm</h4>
        </div>
        <div className="flex flex-col mb-1">
          <label>Email:</label>
          <input
            className="rounded-md hover:border-2 hover:border-blue-500"
            type="email"
            {...register("email")}
            value={emaiUser}
            onChange={(e) => (setEmailUser(e.target.value))}
            name="email"
          />
          {errors.email && <ErrorMessage message={errors.email.message} />}
        </div>
        <div className="flex flex-col mb-1">
          <label>Password:</label>
          <input
            className="rounded-md hover:border-2 hover:border-blue-500"
            type="password"
            {...register("password")}
            value={passwordUser}
            onChange={(e) => (setPasswordlUser(e.target.value))}
            name="password"
          />
          {errors.password && <ErrorMessage message={errors.password.message} />}
        </div>
        {loginError && <ErrorMessage message={loginError} />}
        <div className="mt-3 p-1 rounded-lg border-2 text-center text-white bg-yellow-500 border-yellow-500 cursor-pointer">
          <button className="loginButton" type="submit">Login</button>
        </div>
        <p className="mt-1">
          Don't have an account yet: 
          <span 
            className="text-blue-500 underline cursor-pointer mx-2"
            onClick={
              () => {
                router.push('/sign-up')
              }
            }
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
