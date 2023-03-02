import { useEffect, useState } from "react";

const useBuyer = email => {

    const [buyer, setBuyer] = useState('')
    const [buyerLoading, setBuyerLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://used-book-server.vercel.app/alluser/buyer/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // localStorage.setItem('accessToken', data.isbuyer)
                    // console.log(data.accessToken)
                    setBuyer(data.isBuyer)
                    setBuyerLoading(false)
                })
        }
    }, [email])

    return [buyer, buyerLoading];
}

export default useBuyer;