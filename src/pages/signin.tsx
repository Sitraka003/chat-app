import { useRouter } from "next/router"
import { useState } from "react"

const Signin = () => {
    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [confirmPassword, setConfirmPassword] = useState<string>()
    const router = useRouter()
    return(
        <div className='flex justify-center items-center pt-36 pb-44 bg-gradient-to-b from-gray-200 to-black'>
            <form className='flex flex-col border-4 border-gray-500 px-5 py-7 w-4/12 h-50 rounded-lg shadow-2xl'>
                <div>
                    <h4 className='text-yellow-500 text-2xl text-bold text-center mb-2'>Sign in</h4>
                </div>
                <div className='flex flex-col mb-1'>
                    <label>Username: </label>
                    <input className='rounded-md hover:border-2 hover:border-blue-500'
                        type='text'
                        value={username}
                        onChange={
                            (e) => {
                                setUsername(e.target.value)
                            }
                        }
                    />
                </div>
                <div className='flex flex-col mb-1'>
                    <label>Email: </label>
                    <input className='rounded-md hover:border-2 hover:border-blue-500' 
                        type='email'
                    />
                </div>
                <div className='flex flex-col mb-1'>
                    <label>Password: </label>
                    <input className='rounded-md hover:border-2 hover:border-blue-500' 
                        type='password'
                        value={password}
                        onChange={
                            (e) => {
                                setPassword(e.target.value)
                            }
                        }
                    />
                </div>
                <div className='flex flex-col mb-1'>
                    <label>Confirm password: </label>
                    <input className='rounded-md hover:border-2 hover:border-blue-500'
                        type='password'
                        value={confirmPassword}
                        onChange={
                            (e) => {
                                setConfirmPassword(e.target.value)
                            }
                        }
                    />
                </div>
                <div className='mt-3 p-1 rounded-lg border-2 text-center text-white bg-yellow-500 border-yellow-500 cursor-pointer'
                    onClick={
                        () => {
                            if(password === confirmPassword){
                                localStorage.setItem(username as string, password as string)
                                localStorage.setItem("currentUser",username as string)
                                router.push('/publicChat')
                            } else {
                                alert("Veillez verifier votre mot de passe")
                            }
                        }
                    }
                >
                    <p>Continue</p> 
                </div>
            </form>
        </div>
    )
}

export default Signin