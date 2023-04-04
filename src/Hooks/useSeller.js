import { useEffect, useState } from "react";

const useSeller = email => {

    const [seller, setSeller] = useState('')
    const [sellerLoading, setSellerLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/alluser/seller/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // localStorage.setItem('accessToken', data.isseller)
                    // console.log(data.accessToken)
                    setSeller(data.isSeller)
                    setSellerLoading(false)
                })
        }
    }, [email])

    return [seller, sellerLoading];
}

export default useSeller;