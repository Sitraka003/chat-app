import Channels from "@/types/channels"
import Users from "@/types/users"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"

const Profile = () => {
    const router = useRouter()
    const [channelList, setChannelList] = useState<Channels[]>()
    const [userList, setUserList] = useState<Users[]>()
    const [currentUser, setCurrentUser] = useState<Users>()
    const handleLoad = async () => {
        // Get current user
        try {
            const resCurrentUser = await axios.get("http://localhost/user/")
            if(resCurrentUser.status === 200) {
                setCurrentUser(resCurrentUser.data)
            }
        } catch (error) {
            console.log(error)
        }

        // Get all channels
        try {
            const resListChannels = await axios.get("http://localhost/channels/")
            if(resListChannels.status === 200) {
                setChannelList(resListChannels.data)
            }
        } catch (error) {
            console.log(error)
        }

        // Get all users
        try {
            const resListUsers = await axios.get("http://localhost/users/")
            if(resListUsers.status === 200) {
                setUserList(resListUsers.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
        <div 
            className="w-full h-screen bg-gradient-to-b from-gray-200 to-black flex flex-col px-2 py-5"
            onLoad={
                () => (
                    handleLoad()
                )
            }
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
                                            className="px-3 py-3 border-2 border-gray-500 rounded-md"
                                            onClick={
                                                () => (
                                                    router.push(`/channel/${channel.id}`)
                                                )
                                            }
                                        >
                                            {channel.name}
                                        </div>
                                        <div 
                                            className="mx-3 px-1 bg-yellow-500 border-2 border-yellow-500 rounded-md"
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
                                        className="px-3 py-3 border-2 border-gray-500 rounded-md"
                                        onClick={() => (
                                            router.push(`/message/${user.id}`)
                                        )}
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