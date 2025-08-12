import { Button, Stack, Typography } from "@mui/material";
import React from "react";

interface CounterProps{
    initialValue: number;
    incrementBy: number;
}
export const Counter:React.FC<CounterProps>=({initialValue, incrementBy})=>{
    // State to hold the count value
    const [count, setCount]= React.useState<number>(initialValue);

    const handleIncrement=()=>setCount(prevCount => prevCount + incrementBy);
    const handleReset=()=>setCount(initialValue);
    return<>
    <Stack spacing={2} alignItems="center">
      <Typography variant="h6">Count: { count}</Typography>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleIncrement}
        >
          +{incrementBy}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleReset}
        >
          Reset
        </Button>
      </Stack>
    </Stack>
    </>

}