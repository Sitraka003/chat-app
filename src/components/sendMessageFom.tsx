export default function SendMessageFom() {
    return(
        <>
            <form>
                <textarea name="message"></textarea>
                <button className="sendMessageButton">Send message</button>
            </form>
        </>
    );
}