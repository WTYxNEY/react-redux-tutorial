import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from "../redux"

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of ice creams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Ice cream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
// mapStateToProps คือ ฟังก์ชันที่ทำหน้าที่ยัด state เข้าไปใน props
// mapDispatchToProps คือ ฟังก์ชันที่ทำหน้าที่ยัด ฟังก์ชันของ action ที่เป็นตัวไปบอกให้ reducer ทำงานตามที่กำหนดผ่าน dispatch เข้าไปใน props
// connect คือ ฟังก์ชันที่ทำหน้าที่ยัด mapStateToProps และ mapDispatchToProps เพื่อให้ Component ที่ connect กับ store สามารถเข้าถึง state และ ฟังก์ชันที่เป็น dispatch ผ่าน props ได้นั้นเอง
