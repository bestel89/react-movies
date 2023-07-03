import { useState } from "react"

export default function LoginPage(user) {

    const [usernameFormData, setUsernameFormData] = useState({
        username: ''
    })


    function handleChange(e) {
        console.log(e)
        const newUsernameFormData = {
            ...usernameFormData,
            [e.target.name]: e.target.value
        }
        setUsernameFormData(newUsernameFormData)
    }

    function handleSubmission(e) {
                
        user.setUser(usernameFormData)

        setUsernameFormData({
            username: ''
        })        
    }


    return (
        <div>
            <h1>Please enter your desired username below</h1>
            <div className="form-container">
                    <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                        <label>Username:</label>
                        <input name="username" value={usernameFormData.username} onChange={handleChange} required />
                        <button type="submit" onClick={handleSubmission}>SIGN UP</button>
                    </form>
                </div>
        </div>
    )
}