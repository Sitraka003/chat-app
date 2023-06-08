import { useRouter } from "next/router"

const SendPrivateMessage = () => {
    const router = useRouter()
    const {user_id} = router.query
    return(
        <>
        <div className="flex flex-col w-full h-screen">
            <div className="flex py-3 px-2 h-1/12 bg-yellow-500 justify-center">
                Message to user number {user_id}
            </div>
            <div className="flex flex-col h-5/6 bg-gradient-to-b from-gray-200 to-black">
                <div>

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

export default SendPrivateMessage