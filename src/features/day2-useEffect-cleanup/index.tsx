import { Container } from "@mui/material";
import { Timer } from "./components/Timer";
import { UserList } from "./components/UserList";

export const Day2: React.FC = () => {
  return (
    <Container>
      <h2>Day 2 - Effects & Cleanup (MUI + TS)</h2>
      <Timer />
      <UserList/>
    </Container>
  );
}