import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from "../redux/cakes/cakeActions"

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
// mapStateToProps คือ ฟังก์ชันที่ทำหน้าที่ยัด state เข้าไปใน props
// mapDispatchToProps คือ ฟังก์ชันที่ทำหน้าที่ยัด ฟังก์ชันของ action ที่เป็นตัวไปบอกให้ reducer ทำงานตามที่กำหนดผ่าน dispatch เข้าไปใน props
// connect คือ ฟังก์ชันที่ทำหน้าที่ยัด mapStateToProps และ mapDispatchToProps เพื่อให้ Component ที่ connect กับ store สามารถเข้าถึง state และ ฟังก์ชันที่เป็น dispatch ผ่าน props ได้นั้นเอง
