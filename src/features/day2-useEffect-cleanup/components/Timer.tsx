import { Button, Typography } from '@mui/material';
import React from 'react'

export const Timer:React.FC = () => {
    const [second, setSecond] = React.useState<number>(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setSecond(prev => prev + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    const handleResetTimer = () => setSecond(0)

    return (
        <>
            <Typography variant="h4">{second}</Typography>
            <Button variant='outlined' color='secondary' onClick={handleResetTimer}>Reset</Button>
        </>
    )
}
