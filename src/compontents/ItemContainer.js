import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => { //state = cake
    const itemState = ownProps.cake
        ? state.cake.numOfCakes
        : state.iceCream.numOfIceCreams

    return {
        item: itemState
    }
}

const mapDipatchToPops = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}

export default connect( mapStateToProps, mapDipatchToPops)(ItemContainer)// null กรณีที่ไม่ได้ดึงค่าใน store แก้ไขอย่างเดียว
