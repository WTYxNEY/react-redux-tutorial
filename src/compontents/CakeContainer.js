import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from "../redux/cakes/cakeActions"

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
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
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
// mapStateToProps คือ ฟังก์ชันที่ทำหน้าที่ยัด state เข้าไปใน props
// mapDispatchToProps คือ ฟังก์ชันที่ทำหน้าที่ยัด ฟังก์ชันของ action ที่เป็นตัวไปบอกให้ reducer ทำงานตามที่กำหนดผ่าน dispatch เข้าไปใน props
// connect คือ ฟังก์ชันที่ทำหน้าที่ยัด mapStateToProps และ mapDispatchToProps เพื่อให้ Component ที่ connect กับ store สามารถเข้าถึง state และ ฟังก์ชันที่เป็น dispatch ผ่าน props ได้นั้นเอง
