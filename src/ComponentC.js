import React from 'react'
import { useNavigate } from 'react-router-dom'

const ComponentC = () => {
    const navigate = useNavigate()
    const backPage = () => {
        navigate("/componentb")
    }
    return (
        <div>
            <h1>ComponentC</h1>
            <button onClick={backPage}>ComponentBへ</button>
        </div>
    )
}

export default ComponentC