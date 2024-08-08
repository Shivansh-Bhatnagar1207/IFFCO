import { useState } from "react";
import { useAuthContext } from './UseAuthContext'
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (Email, Password, Name, Mobile, UserId) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/profile/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Email, Password, Name, Mobile, UserId })
        })
        const json = await response.json()
        console.log(json);


        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))

            dispatch({ type: 'LOGIN', payload: json })
            console.log(json);
            setIsLoading(false)
            alert('Signup successful')
            navigate('/profile')
        }
    }
    return { signup, error, isLoading }
}
