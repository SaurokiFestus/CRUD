import React, {useEffect, useState} from 'react'
import Employees from './Employees'
import {Button, Table, Form} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, useNavigate } from "react-router-dom";
import {v4 as uuid} from "uuid"

function Edit() {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [id, setId] = useState("")

    let history = useNavigate()

    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id)

    const handleSubmit =(e) =>{
        e.preventDefault()

        let a = Employees[index]
        a.name = name
        a.age = age
        history("/")
    }

    useEffect(()=>{
        setName(localStorage.getItem("name"))
        setAge(localStorage.getItem("age"))
        setId(localStorage.getItem("id"))
    })

  return (
    <div>
        <Form style={{margin:"15rem"}}>
            <Form.Group controlId='formName'>
                <Form.Control type="text" placeholder="Enter Your Name" value={name} required onChange={(e) =>setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Enter Your Age" value={age} required onChange={(e) =>setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Button type="submit" onClick={(e) =>handleSubmit(e)}>Update</Button>
        </Form>
    </div>
  )
}

export default Edit