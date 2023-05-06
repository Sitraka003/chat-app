const InputPassword = ({label}:any) => {
    return(
        <div className='flex flex-col mb-1'>
            <label>{label}</label>
            <input className='rounded-md hover:border-2 hover:border-blue-500'
                type='password'
            />
        </div>
    )
}

export default InputPassword