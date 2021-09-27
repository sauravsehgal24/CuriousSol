import React, { useEffect, useState } from 'react';


export const CoursesPage = (props) => {
    const [state, setState] = useState({
        courses: [],
        loading:true
    });

    const fetchCourses = async () => {
        const response = await fetch('coursesCntrl/getCourses');
        const data = await response.json();
        console.log(response)
        setState({ courses: data, loading: false });
	}

    const renderCourses = () => {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {state.courses.map(c =>
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            )
	}


    useEffect( () => {
         fetchCourses();
    }, [])

    return (
        <div>
            <h1 id="tabelLabel" >Courses</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {!state.loading?renderCourses():"Loading ....."}
        </div>
        )
}

