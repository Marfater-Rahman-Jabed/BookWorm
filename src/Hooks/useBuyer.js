import { useEffect, useState } from "react";

const useBuyer = email => {

    const [buyer, setBuyer] = useState('')
    const [buyerLoading, setBuyerLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/alluser/buyer/${email}`)
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