import { Container } from "@mui/material";
import { Counter } from "./components/Counter";

export const Day1: React.FC = () => {
  return (
    <Container>
      <h2>Day 1 - Props & State (MUI + TS)</h2>
      <Counter initialValue={0} incrementBy={1} />
      <Counter initialValue={10} incrementBy={5} />
    </Container>
  );
}