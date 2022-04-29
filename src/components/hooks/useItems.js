import  { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return [items]
};

export default useItems;