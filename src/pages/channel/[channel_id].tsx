import Channels from "@/types/channels"
import Messages from "@/types/messages"
import Users from "@/types/users"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"

const GetChannelById = () => {
    const router = useRouter()
    const {channel_id} = router.query
    const [usersChannel, setUsersChannel] = useState<Users[]>()
    const [messageList, setMessageList] = useState<Messages[]>()
    const [currentChannel, setCurrentChannel] = useState<Channels>()
    const handleLoad = async() => {
        try {
            const resChannel = await axios.get(`http://127.0.0.1:8080/channel/${channel_id}`,{
                headers:{
                  Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlbGluLm1hc2tAdGVzdC5jb20iLCJpYXQiOjE2ODM2MjA3NDZ9.IDnn96docIvGiZUZaC6rt8yWLYfAyqrFMX4oBtsHUog',
                  AccessControlAllowOrigin: "http://127.0.0.1:8080"
                }
              })

            if(resChannel.status === 200){
                setCurrentChannel(resChannel.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
        <div className="flex flex-col w-full h-screen">
            <div className="flex py-3 px-2 h-1/12 bg-yellow-500 justify-center">
                Channel {currentChannel?.name}
            </div>
            <div className="flex flex-col h-5/6 bg-gradient-to-b from-gray-200 to-black">
                <div className="flex flex-col w-2/12 h-full border-2 border-gray-500 rounded-md p-2">
                    <div className="flex text-xl text-yellow-500 mb-3 justify-center">
                        All users
                    </div>
                    <div className="sidebar-body">
                        {
                            usersChannel?.map(
                                (user : Users) => (
                                    <div 
                                        className="px-3 py-2 mb-2 border-2 border-gray-500 w-12/12 rounded-lg"
                                        onClick={
                                            () => (
                                                router.push(`/message/${user.id}`)
                                            )
                                        }
                                    >{user.name}</div>
                                )
                            )
                        }
                    </div>
                </div>
                <div>
                    {
                        messageList?.map(
                            (message : Messages) => (
                                <div className="flex flex-col justify-start items-end text-white mx-7 mt-1 mb-2">
                                    <div className="flex flex-row text-xs text-3xs">
                                        <p className="mr-2">{(message.created_at).toLocaleDateString()}</p>
                                        <p></p>
                                    </div>
                                    <div className="bg-teal-400 p-4 rounded-xl">
                                        <p>{message.content}</p>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
            <div className='flex justify-center items-center py-3 h-1/12 bg-yellow-500'>
                <input 
                    type='text' 
                    placeholder='Type your message here' 
                    className='w-6/12 h-8'
                />
                <div 
                    className='px-3 border-2 border-gray-400 h-9 bg-gray-400 text-white'
                >
                    <button >Send</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default GetChannelById