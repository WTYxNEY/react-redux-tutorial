import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

function NewHookIceCreamContainer() {
    const [number, setNumber] = useState(1)
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)//เอาค่าจาก state จาก store ใน app มาใช้
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Ice Creams - {numOfIceCreams}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => dispatch(buyIceCream(number))}>Buy {number} Ice Creams</button>
        </div>
    )
}

export default NewHookIceCreamContainer
