import Users from "@/types/users";
import axios from "axios";
import { useEffect, useState } from "react";

const CreateChannel = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
    const [userList, setUserList] = useState<any>()
    const handleAddMembersClick = () => {
        setShowModal(true);
      }
      
    const handleCloseModal = () => {
        setShowModal(false);
    }

    useEffect(() => {
        const fetchData = async() => {
            try {
                const resListUsers = await axios.get("http://127.0.0.1:8080/users/", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })

                if(resListUsers.status === 200){
                    setUserList(resListUsers.data.users)
                }
            } catch (error) {
                console.log(error)
            }
        };
        fetchData()
    }, [])
    return(
        <>
        <div className="w-full h-screen bg-gradient-to-b from-gray-200 to-black flex justify-center items-center">
            <form className='flex flex-col border-4 border-gray-500 px-5 py-7 w-3/12 h-54 rounded-lg shadow-2xl'>
                <div>
                    <h4 className='text-yellow-500 text-2xl text-bold text-center mb-2'>createChannelForm</h4>
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
                        name="type"
                    >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>
                <div 
                    className='mt-3 p-1 rounded-lg border-2 text-center text-white bg-gray-500 border-yellow-500 cursor-pointer'
                    onClick={
                        () => (handleAddMembersClick())
                    }
                >
                    <p>Add members</p> 
                </div>
                <div 
                    className='mt-3 p-1 rounded-lg border-2 text-center text-white bg-yellow-500 border-yellow-500 cursor-pointer'
                >
                    <p>Continue</p> 
                </div>
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <h4 className='text-yellow-500 text-xl text-center mb-2'>Add members</h4>
                            {
                                userList?.map(
                                    (user : Users) => (
                                        <label key={user.id}>
                                            <input 
                                            type="checkbox"
                                            value={user.email}
                                            key={user.id}
                                            onClick={
                                                () => {
                                                    setSelectedMembers(selectedMembers.concat(user.email))
                                                }
                                            }
                                            /> {user.email}
                                        </label>
                                    )
                                )
                            }
                            <div 
                                className='mt-3 p-1 rounded-lg border-2 text-center text-white bg-yellow-500 border-yellow-500 cursor-pointer'
                                onClick={
                                    () => handleCloseModal()
                                }
                            >
                                <button className="createChannelButton">Create Channel</button> 
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>
        </>
    )
}

export default CreateChannel