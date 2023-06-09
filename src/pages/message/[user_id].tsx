import Messages from "@/types/messages"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const SendPrivateMessage = () => {
    const router = useRouter()
    const {user_id} = router.query
    const [messageList, setMessageList] = useState<Messages[]>()
    const [messageContent, setMessageContent] = useState<string>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resListMessages = await axios.get(`http://127.0.0.1:8080/messages/${user_id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                if(resListMessages.status === 200) {
                    setMessageList(resListMessages.data.messages)
                    console.log(resListMessages.data)
                }
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    },[user_id])

    const newMessage = {
        "recipientId" : user_id,
        "content" : messageContent
    }

    return(
        <>
        <div 
            className="flex flex-col w-full h-screen"
        >
            <div className="flex py-3 px-2 h-1/12 bg-yellow-500 justify-center">
                Message to user number {user_id}
            </div>
            <div className="flex flex-col h-5/6 bg-gradient-to-b from-gray-200 to-black">
                <div>
                    {
                        messageList?.map(
                            (messages : Messages) => (
                                <div className="flex flex-col justify-start items-end text-white mx-7 mt-1 mb-2">
                                    <div className="flex flex-row text-xs text-3xs">
                                        <p className="mr-2">{messages.sender.name}</p>
                                        <p>{messages.createdAt}</p>
                                    </div>
                                    <div className="bg-teal-400 p-4 rounded-xl">
                                        <p>{messages.content}</p>
                                    </div>
                                </div>
                            ) 
                        )
                    }
                </div>
            </div>
            <div className='flex justify-center items-center py-3 h-1/12 bg-yellow-500'>
                <textarea 
                    placeholder='Type your message here' 
                    className='w-6/12 h-8'
                    name="message"
                    value={messageContent}
                    onChange={
                        (e) => {
                            setMessageContent(e.target.value)
                        }
                    }
                ></textarea>
                <div 
                    className='px-3 border-2 border-gray-400 h-9 bg-gray-400 text-white'
                    onClick={
                            () => {
    
                                        axios.post('http://127.0.0.1:8080/message', newMessage,{
                                            headers : {
                                                Authorization: `Bearer ${localStorage.getItem("token")}`
                                            }
                                        })
                                        onsubmit
                                    }
                            }
                >
                    <button className="sendMessageButton">Send Message</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default SendPrivateMessage