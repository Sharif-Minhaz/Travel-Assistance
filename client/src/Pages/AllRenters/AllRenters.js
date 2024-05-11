import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Table from 'react-bootstrap/Table';
import useTitle from '../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';

const AllRenters = () => {

    useTitle('All Renters');

    const { data: allUsers = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/dashboard/allbuyers?role=buyer', {
                    headers: {}
                });
                const data = await res.json();
                return data;
            }
            catch (error) { }
        }
    });


    const handleDelete = id => {
        console.log(id);
        const agree = window.confirm(`Are you sure you want to delete :${id} `)
        if (agree) {
            console.log("Deleting user with id:", id)
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // toast.success('Make admin successful.')
                        refetch();
                    }
                    console.log(data)
                })
        }
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers.map((user, i) => <tr
                            key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-outline btn-warning btn-xs mr-3 mb-5" onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default AllRenters;