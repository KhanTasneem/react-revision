import { Container } from "@mui/material";
import { Timer } from "./components/Timer";

export const Day2: React.FC = () => {
  return (
    <Container>
      <h2>Day 2 - Effects & Cleanup (MUI + TS)</h2>
      <Timer />
    </Container>
  );
}