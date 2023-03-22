import React, { useEffect, useState } from 'react';

function Table(props) {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const fetchdata = async () => {

            const response = await fetch(
                'http://localhost:5000/api/users', {
                    method:'get',
                    headers:new Headers({
                        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTQ4NWVkNmZlMjAzYTIwZTIzM2I0YyIsImlhdCI6MTY3OTUxMDA5MCwiZXhwIjoxNjc5NTIwODkwfQ.lZKS2kylDNtj3tPnlHHTMCoec1K-IlnB8B4PEogHbBw'
                    })
                }
                )

            

            const data = await response.json();
            console.log(data.users)
            setUsers(data.users);
        }
        fetchdata()
    }, []);


    return (
        <div>
        <h1>List of Users</h1>
        <table>
          <thead>
            <tr>
              <th>firstName</th>
              <th>lastName</th>
              <th>email</th>
            </tr>   
          </thead>   
          <tbody>
            {
            
            users.map( (user,index) =>
            <tr key={index}>
                <td className='table-data'>{user.firstName }</td>
                <td className='table-data'>{user.lastName }</td>
                <td className='table-data'>{user.email }</td>
            </tr>
            )
          }
          </tbody>
        </table>
      </div>
    );
}

export default Table;