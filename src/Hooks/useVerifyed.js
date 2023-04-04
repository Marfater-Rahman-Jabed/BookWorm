import { useEffect, useState } from "react";

const useVerifyed = email => {

    const [verifyed, setverifyed] = useState('')
    const [verifyedLoading, setverifyedLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/alluser/verifyed/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // localStorage.setItem('accessToken', data.isverifyed)
                    // console.log(data.accessToken)
                    setverifyed(data.isVerifyed)
                    setverifyedLoading(false)
                })
        }
    }, [email])

    return [verifyed, verifyedLoading];
}

export default useVerifyed;