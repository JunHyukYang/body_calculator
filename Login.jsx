import {setPageTitle} from "../20191526/util.js";
import {useNavigate} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3003/users'
function Login() {
    useEffect(()=>{
        setPageTitle("로그인")
    },[]);
    const navigate=useNavigate();
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [users, setUsers] = useState([])
    const [loggedUser, setLoggedUser] = useState(localStorage.getItem('username'))
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = () => {
        const user = users.find(user => user.username === inputId && user.password === inputPw)
        if(user) {
            console.log('Login successful')
            alert('로그인 되었습니다.')
            setLoggedUser(user.username);
            localStorage.setItem('username', user.username);
        } else {
            console.log('Invalid username or password')
            alert('로그인에 실패 했습니다. 다시 시도해주세요')
        }
    }

    const userData = async() => {
        const response  = await axios.get(BASE_URL);
        console.log(response);
        return response.data;
    }
    const onClickLogout = () => {
        setLoggedUser(null);
        localStorage.removeItem('username');
        setInputId("");
        setInputPw("");
    }
    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await userData();
            setUsers(usersData);
        }
        fetchUsers();
    }, [])

    return loggedUser ? (
        <div>
            <h1>{loggedUser}님, 반갑습니다.</h1>
            <button onClick={onClickLogout}>Logout</button>
        </div>
    )
    :(
        <div>
            <h2>로그인</h2>
            <div>
                <label htmlFor='input_id'>I&nbsp;&nbsp;D :  </label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login;