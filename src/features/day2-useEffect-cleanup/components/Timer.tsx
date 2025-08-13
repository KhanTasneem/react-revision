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
    const handleTime=(secs: number)=>{
        const time= { hours: 0, minutes: 0, seconds: 0 }
        if(secs >= 3600){
            const hours = Math.floor(secs / 3600);
            time.hours = hours;
        }else if(secs >= 60){
            const minutes= Math.floor(secs / 60);
            time.minutes = minutes;
        }
        time.seconds = secs % 60;
        return `${time.hours}:${time.minutes}:${time.seconds}`
    }
    return (
        <>
            <Typography variant="h4">{handleTime(second)}</Typography>
            <Button variant='outlined' color='secondary' onClick={handleResetTimer}>Reset</Button>
        </>
    )
}