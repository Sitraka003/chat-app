import { updateUserSchema } from "@/schemas"
import Channels from "@/types/channels"
import Users from "@/types/users"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const Profile = () => {
    const router = useRouter()
    const [channelList, setChannelList] = useState<any>()
    const [userList, setUserList] = useState<any>()
    const [currentUser, setCurrentUser] = useState<Users>()
    const [name, setName] = useState<string>()
    const [oldPassword, setOldPassword] = useState<string>()
    const [newPassword, setNewPassword] = useState<string>()
    const [bio, setBio] = useState<string>()
    const {
        register,
        handleSubmit,
        formState : { errors }
    } = useForm(
        {
            resolver : yupResolver(updateUserSchema)
        }
    )
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const resCurrentUser = await axios.get("http://127.0.0.1:8080/user/", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            });
            if (resCurrentUser.status === 200) {
              setCurrentUser(resCurrentUser.data.user);
              console.log(resCurrentUser.data.user)
            }
          } catch (error) {
            console.log(error);
          }
    
          // Get all channels
          try {
            const resListChannels = await axios.get("http://127.0.0.1:8080/channels/", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            });
            if (resListChannels.status === 200) {
              setChannelList(resListChannels.data.channels);
            }
          } catch (error) {
            console.log(error);
          }
    
          // Get all users
          try {
            const resListUsers = await axios.get("http://127.0.0.1:8080/users/", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            });
            if (resListUsers.status === 200) {
              setUserList(resListUsers.data.users);
            }
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, []);

    return(
        <>
            <div className="flex flex-row fixed py-3 px-2 w-full h-1/12 bg-yellow-500">
                <div className="flex w-11/12">
                    {currentUser?.name}
                </div>
                <div className="flex justify-right items-right">
                    <button 
                        className="logoutButton"
                        onClick={
                            () => {
                                localStorage.clear()
                                router.push("/login")
                            }
                        }
                    >
                        Logout
                    </button>
                </div>
            </div>
            <div 
                className="w-full h-screen bg-gradient-to-b from-gray-200 to-black flex flex-col px-2 py-5"
            >
                <div className="py-16 px-12">
                    <form>
                        <div className="text-yellow-500 text-2xl text-bold text-center mb-2">
                            <h4>editProfileForm</h4>
                        </div>
                        <div className="flex flex-col mb-1">
                            <label>Name:</label>
                            <input 
                                className='rounded-md hover:border-2 hover:border-blue-500'
                                name="name"
                                type='text'
                                value={currentUser?.name}
                            />
                        </div>
                        <div className="flex flex-col mb-1">
                            <label>Email:</label>
                            <input 
                                className='rounded-md hover:border-2 hover:border-blue-500'
                                name="email"
                                type='email'
                                value={currentUser?.email}
                            />
                        </div>
                        <div className="flex flex-col mb-1">
                            <label>Bio:</label>
                            <textarea 
                                className='rounded-md hover:border-2 hover:border-blue-500' 
                                name="bio"
                                value={currentUser?.bio}
                            />
                        </div>
                        <div className="flex flex-col mb-1">
                            <label>currentPassword:</label>
                            <input 
                                className='rounded-md hover:border-2 hover:border-blue-500' 
                                name="currentPassword"
                                type='password'
                            />
                        </div>
                        <div className="flex flex-col mb-1">
                            <label>newPassword:</label>
                            <input 
                                className='rounded-md hover:border-2 hover:border-blue-500' 
                                name="newPassword"
                                type='password'
                            />
                        </div>
                        <div className="flex flex-col mb-1">
                            <label>confirmPassword:</label>
                            <input 
                                className='rounded-md hover:border-2 hover:border-blue-500' 
                                name="confirmPassword"
                                type='password'
                            />
                        </div>
                        <button
                            type="submit" 
                            className='mt-3 p-1 rounded-lg border-2 text-center text-white bg-yellow-500 border-yellow-500 cursor-pointer updateProfileButton'
                        >
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Profile