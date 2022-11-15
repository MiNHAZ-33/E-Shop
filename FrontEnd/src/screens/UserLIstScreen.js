import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers } from '../actions/userActions';

const UserLIstScreen = () => {
    const dispatch = useDispatch();
    const userList = useSelector(state => state.userList);
    const { loading, error, users } = userList;

    useEffect(() => {
        dispatch(listUsers())
    }),[dispatch]

  return (
    <div>UserLIstScreen</div>
  )
}

export default UserLIstScreen