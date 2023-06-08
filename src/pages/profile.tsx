import Channels from "@/types/channels"
import Users from "@/types/users"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Profile = () => {
    const router = useRouter()
    const [channelList, setChannelList] = useState<any>()
    const [userList, setUserList] = useState<any>()
    const [currentUser, setCurrentUser] = useState<any>()
    
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
        <div 
            className="w-full h-screen bg-gradient-to-b from-gray-200 to-black flex flex-col px-2 py-5"
        >
            <div className="flex justify-center items-center text-center my-3">
                <div className="px-3 py-2 border-2 border-gray-500 w-3/12 rounded-lg">{currentUser?.name}</div>
            </div>
            <div className="flex justify-center items-center text-center my-2">
                <div className="px-3 py-2 border-2 border-gray-500 w-3/12 rounded-lg">{currentUser?.email}</div>
            </div>
            <div className="flex flex-row justify-center items-center my-2">
                <div className="flex flex-col w-2/6 mx-5 p-2 border-2 border-gray-500 rounded-md">
                    <div className="flex flex-row justify-center items-center px-3 py-3">
                        <div className="text-xl">My channels</div>
                        <div 
                            className="mx-3 px-1 bg-yellow-500 border-2 border-yellow-500 rounded-md"
                            onClick={
                                () => {
                                    router.replace('/channel/create')
                                }
                            }
                        >
                            <button>+create</button>
                        </div>
                    </div>
                    <div>
                        {
                            channelList?.map(
                                (channel : Channels) => (
                                    <div className="flex flex-row">
                                        <div 
                                            className="flex px-3 py-2 border-2 border-gray-500 rounded-md w-10/12 cursor-pointer"
                                            onClick={
                                                () => (
                                                    router.push(`/channel/${channel.id}`)
                                                )
                                            }
                                            key={channel.id}
                                        >
                                            {channel.name}
                                        </div>
                                        <div 
                                            className="flex mx-3 py-3 px-2 bg-yellow-500 border-2 border-yellow-500 rounded-md cursor-pointer justify-center w-2/12"
                                            onClick={
                                                () => {
                                                    router.replace(`/channel/edit/${channel.id}`)
                                                }
                                            }
                                        >
                                            <button>edit</button>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
                <div className="flex flex-col w-2/6 mx-5 p-2 border-2 border-gray-500 rounded-md">
                    <div className="flex justify-center items-center px-3 py-3 text-xl">My friends</div>
                    <div>
                        {
                            userList?.map(
                                (user : Users) => (
                                    <div 
                                        className="px-3 py-3 mb-3 border-2 border-gray-500 rounded-md cursor-pointer"
                                        onClick={() => (
                                            router.push(`/message/${user.id}`)
                                        )}
                                        key={user.id}
                                    >
                                        {user.name}
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile