import Users from "./users"

type Messages = {
    id : number,
    content : string,
    senderId : number,
    channelId : number,
    recipientId : number,
    createdAt : string,
    sender : Users
}

export default Messages