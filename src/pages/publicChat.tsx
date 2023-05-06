import { useRouter } from "next/router";
import { type } from "os";
import React, { useState } from "react";

type message = {
    user : string
    time : string
    text : string
}

const PublicChat = () => {
    const router = useRouter()
    const username = localStorage.getItem("currentUser")
    const [messageList, setMessageList] = useState<message[]>([])
    const [textMessage, setTextMessage] = useState<string>()
    const [singleMessage, setSingleMessage] = useState<message>()
    const now = new Date()
    const dateString = now.toLocaleString()
    const handleSendMessage = () => {
        const newMessage:message = {
            user:username as string,
            time : dateString,
            text : textMessage as string
        }
        setMessageList(messageList.concat([newMessage]))
        setTextMessage("")
    }

    return(
        <div className='flex flex-col h-screen'>
            <div className='flex flex-row py-2 bg-yellow-500 text-white'>
            <h3 className='flex w-5/12 ml-3 text-xl'>{username}</h3>
            <h3 className='flex w-6/12 ml-5 text-xl'>Public chat</h3>
            <h3 
                className='px-3 border-2 border-gray-400 mr-3 h-8 rounded-lg bg-gray-400 text-white cursor-pointer'
                onClick={
                    () => {
                        router.push('/login')
                    }
                }
            >
                Logout
            </h3>
            </div>
            <div className='flex flex-col h-5/6 bg-gradient-to-r from-gray-200 to-gray-700'>
                {messageList?.map(
                    (Message) => (
                        <div className="flex flex-col justify-start items-end text-white mx-7 mt-1 mb-2">
                            <div className="flex flex-row text-xs text-3xs">
                                <p className="mr-2">{Message.user}</p>
                                <p>{Message.time}</p>
                            </div>
                            <div className="bg-teal-400 p-4 rounded-xl">
                                <p>{Message.text}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
            <div className='flex justify-center items-center py-5 h-2/8 bg-yellow-500'>
            <input 
                type='text' 
                placeholder='Type your message here' 
                className='w-6/12 h-8'
                value={textMessage}
                onChange={
                    (e) => {
                        setTextMessage(e.target.value)
                    } 
                }
                onKeyDown={
                    (e) => {
                        if(e.key === 'Enter') {
                            handleSendMessage()
                        }
                    }
                }
            />
            <div 
                className='px-3 border-2 border-gray-400 h-9 bg-gray-400 text-white'
                onClick={
                    () => {
                        handleSendMessage()
                    }
                }
            >
                <button >Send</button>
            </div>
            </div>
        </div>
    )
}

export default PublicChat