import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react'
import type { IUser } from '../types/user';

export const UserList = () => {
    const [users, setUsers] = React.useState<IUser[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    React.useEffect(() => {
        // Simulate fetching user data
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await axios("https://jsonplaceholder.typicode.com/users")
                setUsers(response.data);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);
    if (loading) {
        return <Box>Loading...</Box>;
    }
    return (
        <>
            <Typography variant='h6'>User List</Typography>
            <TableContainer component={Paper} sx={{ margin: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
