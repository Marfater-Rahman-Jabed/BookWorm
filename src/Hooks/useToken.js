import { useEffect, useState } from "react";

const useToken = email => {

    const [token, setToken] = useState('')

    useEffect(() => {
        if (email) {
            fetch(`https://used-book-server.vercel.app/jwt?email=${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('accessToken', data.accessToken)
                    // console.log(data.accessToken)
                    setToken(data.accessToken)
                })
        }
    }, [email])

    return [token];
}

export default useToken;