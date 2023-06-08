import formStyle from "../styles/Form.module.css"

export default function CreateChannelForm() {
    return(
        <>
            <form className={formStyle.form}>
                <input
                    className={formStyle.input}
                    type="text"
                    name="channelName"
                    placeholder="Channel name"
                />
                <select className={formStyle.select} name="type">
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
                <button className={`${formStyle.button} createChannelButton`}>Create channel</button>
            </form>
        </>
    );
}