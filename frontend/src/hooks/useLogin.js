import { useState } from "react";
import { useAuthContext } from './UseAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (Name,UserId,Email,Password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Name,UserId,Email,Password })
        })
        const json = await response.json()



        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))

            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)


        }
    }
    return { login, error, isLoading }
}
