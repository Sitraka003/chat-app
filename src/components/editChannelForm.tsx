import formStyle from "../styles/Form.module.css"

export default function EditChannelForm() {
    return(
        <>
            <form className={formStyle.form}>
                <select className={formStyle.select} name="type">
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
                <button className={`${formStyle.button} editChannelButton`}>Edit channel</button>
            </form>
        </>
    );
}