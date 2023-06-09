import ErrorMessage from "@/components/error-message"
import { signupSchema } from "@/schemas"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm } from "react-hook-form"

const Signup = () => {
    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [confirmPassword, setConfirmPassword] = useState<string>()
    const [bio, setBio] = useState<string>()
    const [email, setEmail] = useState<string>()
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(signupSchema)
    })
    const onSubmit = async (data: { name: string,email: string; password: string; bio: string }) => {
        try {
          const response = await axios.post("http://127.0.0.1:8080/users", data);
    
          if (response.status >= 200) {
            const token = response.data.user.token
            localStorage.setItem("token", token);
            router.push("/profile");
          } else {
            console.log("Invalide email")
          }
        } catch (error) {
          console.error("Login error:", error);
        }
      };
    return(
        <div className='flex justify-center items-center pt-36 pb-44 bg-gradient-to-b from-gray-200 to-black'>
            <form className='flex flex-col border-4 border-gray-500 px-5 py-7 w-4/12 h-50 rounded-lg shadow-2xl'
                onSubmit={
                    handleSubmit(
                        () => onSubmit({
                            "email": `${email}`,
                            "password": `${password}`,
                            "name": `${username}`,
                            "bio": `${bio}`
                        })
                    )
                }
            >
                <div>
                    <h4 className='text-yellow-500 text-2xl text-bold text-center mb-2'>Sign in</h4>
                </div>
                <div className='flex flex-col mb-1'>
                    <label>Name: </label>
                    <input className='rounded-md hover:border-2 hover:border-blue-500'
                        type='text'
                        {...register("name")}
                        value={username}
                        onChange={
                            (e) => {
                                setUsername(e.target.value)
                            }
                        }
                        name="name"
                    />
                    {errors.name && <ErrorMessage message={errors.name.message} />}
                </div>
                <div className='flex flex-col mb-1'>
                    <label>Email: </label>
                    <input className='rounded-md hover:border-2 hover:border-blue-500' 
                        type='email'
                        {...register("email")}
                        value={email}
                        onChange={
                            (e) => {
                                setEmail(e.target.value)
                            }
                        }
                        name="email"
                    />
                    {errors.email && <ErrorMessage message={errors.email.message} />}
                </div>
                <div className='flex flex-col mb-1'>
                    <label>Bio: </label>
                    <input className='rounded-md hover:border-2 hover:border-blue-500' 
                        type='text'
                        {...register("bio")}
                        value={bio}
                        onChange={
                            (e) => {
                                setBio(e.target.value)
                            }
                        }
                    />
                    {errors.bio && <ErrorMessage message={errors.bio.message} />}
                </div>
                <div className='flex flex-col mb-1'>
                    <label>Password: </label>
                    <input className='rounded-md hover:border-2 hover:border-blue-500' 
                        type='password'
                        {...register("password")}
                        value={password}
                        onChange={
                            (e) => {
                                setPassword(e.target.value)
                            }
                        }
                        name="password"
                    />
                    {errors.password && <ErrorMessage message={errors.password.message} />}
                </div>
                <div className='flex flex-col mb-1'>
                    <label>Confirm password: </label>
                    <input className='rounded-md hover:border-2 hover:border-blue-500'
                        type='password'
                        {...register("conformpassword")}
                        value={confirmPassword}
                        onChange={
                            (e) => {
                                setConfirmPassword(e.target.value)
                            }
                        }
                        name="confirmPassword"
                    />
                    {errors.confirmpassword && <ErrorMessage message={errors.confirmpassword.message} />}
                    {password !== confirmPassword && <ErrorMessage message="verify your password"/>}
                </div>
                <div className='mt-3 p-1 rounded-lg border-2 text-center text-white bg-yellow-500 border-yellow-500 cursor-pointer'>
                    <button className="registerButton" type="submit">Register</button> 
                </div>
            </form>
        </div>
    )
}

export default Signup