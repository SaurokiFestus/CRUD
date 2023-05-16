import React, { Fragment } from "react";
import {Button, Table} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

function Home(){

    let history = useNavigate()

    const handleEdit=(id, name, age) =>{
        localStorage.setItem("name", name)
        localStorage.setItem("age", age)
        localStorage.setItem("id", id)
    }

    const handleDelete = (id)=>{
        let index = Employees.map(function(e){
            return e.id
        }).indexOf(id)

        Employees.splice(index, 1)

        history("/")
    }
    return (
        <Fragment>
            <div style={{margin: "18rem"}}>
                <Table striped bordered>
                     <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                            Employees && Employees.length > 0 
                            ?
                            Employees.map((item) =>{
                                return(
                                    <tr>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.age}
                                        </td>
                                        <td>
                                            <Link to="/edit">
                                            <Button onClick={() => handleEdit(item.id, item.name, item.age)}> Edit</Button>
                                            </Link>
                                            
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)}> Delete</Button>

                                            &nbsp;
                                            <Link to="/report">
                                            <Button > Go to report</Button>
                                            </Link>
                                            
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data"
                        }
                     </tbody>
                </Table>
                <br></br>
                <Link to="/create">
                <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home