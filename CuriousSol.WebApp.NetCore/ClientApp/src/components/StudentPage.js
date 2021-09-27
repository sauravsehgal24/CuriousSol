import React, { useEffect, useState } from 'react';
import * as axios from "axios"

export const StudentPage = (props) => {
    const [state, setState] = useState({
        students: [],
        loading: true
    });

    const fetchStudents = async () => {
        axios.get("http://localhost:42323/studentCntrl/getStudents").then(res => {
            console.log(res.data)
            setState({ students: res.data, loading: false });
        })
    }

    const renderStudents = () => {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {state.students.map(s =>
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.city}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }


    useEffect(() => {
        fetchStudents();
    }, [])

    return (
        <div>
            <h1 id="tabelLabel" >Students</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {!state.loading ? renderStudents() : "Loading ....."}
        </div>
    )
}

