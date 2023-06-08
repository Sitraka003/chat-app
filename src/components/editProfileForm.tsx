import formStyle from "../styles/Form.module.css"

export default function EditProfileForm() {
    return(
        <>
            <form className={formStyle.form}>
                <input
                    className={formStyle.input}
                    type="text" 
                    name="name"
                    placeholder="Name"
                />
                <input
                    className={formStyle.input}
                    type="email" 
                    name="email"
                    placeholder="Email"
                />
                <input
                    className={formStyle.input}
                    type="password" 
                    name="currentPassword"
                    placeholder="Current password"
                />
                <input
                    className={formStyle.input}
                    type="password" 
                    name="newPassword"
                    placeholder="New password"
                />
                <input
                    className={formStyle.input}
                    type="password" 
                    name="confirmPassword"
                    placeholder="Confirm password"
                />
                <textarea
                    className={formStyle.textarea}
                    name="bio"
                    placeholder="Bio"
                    />
                <button className={`${formStyle.button} "updateProfileButton"`}>
                    Update Profile
                </button>
            </form>
        </>
    );
}