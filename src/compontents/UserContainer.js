import React, { useState, useEffect } from 'react'
import { fetchUsers } from '../redux'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'


function UserContainer({ userData, fetchUsers }) {
    // const numOfIceCreams = useSelector(state => state.user)//เอาค่าจาก state จาก store ใน app มาใช้
    // const dispatch = useDispatch()
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
                <div>
                    <h2>User List</h2>
                    {
                        userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
                    }
                </div>
            )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
