import React, {useState} from 'react'
import Employees from './Employees'
import {Button, Table, Form} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, useNavigate } from "react-router-dom";
import {v4 as uuid} from "uuid"
function Add() {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    let history = useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault()

        const ids= uuid()
        let uniqueId = ids.slice(0,8)

        let a = name
        let b = age

        Employees.push({id: uniqueId, name: a, age: b})

        history("/")
    }
  return (
    <div>
        <Form style={{margin:"15rem"}}>
            <Form.Group>
                <Form.Control type="text" placeholder="Enter Your Name" required onChange={(e) =>setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Enter Your Age" required onChange={(e) =>setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Button type="submit" onClick={(e) =>handleSubmit(e)}>Submit</Button>
        </Form>
    </div>
  )
}

export default Add