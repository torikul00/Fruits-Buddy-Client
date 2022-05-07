import { useEffect, useState } from 'react';

const useItems = () => {
    const [loading,setLoading] = useState(false)
    const [items, setItems] = useState([])
    useEffect(() => {
        setLoading(true)
        fetch('https://gentle-plateau-90897.herokuapp.com/fruits')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(false)
            })
    }, [])
    return [items, setItems,loading]
};

export default useItems;