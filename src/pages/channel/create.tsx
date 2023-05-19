const CreateChannel = () => {
    return(
        <>
        <div className="w-full h-screen bg-gradient-to-b from-gray-200 to-black flex justify-center items-center">
            <form className='flex flex-col border-4 border-gray-500 px-5 py-7 w-3/12 h-54 rounded-lg shadow-2xl'>
                <div>
                    <h4 className='text-yellow-500 text-2xl text-bold text-center mb-2'>Create an channel</h4>
                </div>
                <div className='flex flex-col mb-1'>
                    <label>Name:</label>
                    <input 
                        className='rounded-md hover:border-2 hover:border-blue-500' 
                        type='text'
                    />
                </div>
                <div className='flex flex-col mb-1'>
                    <label>Type:</label>
                    <select 
                        className='rounded-md hover:border-2 hover:border-blue-500 h-7'
                    >
                        <option value="public">public</option>
                        <option value="private">private</option>
                    </select>
                </div>
                <div 
                    className='mt-3 p-1 rounded-lg border-2 text-center text-white bg-gray-500 border-yellow-500 cursor-pointer'
                >
                    <p>Add members</p> 
                </div>
                <div 
                    className='mt-3 p-1 rounded-lg border-2 text-center text-white bg-yellow-500 border-yellow-500 cursor-pointer'
                >
                    <p>Continue</p> 
                </div>
            </form>
        </div>
        </>
    )
}

export default CreateChannel