import { Container } from "@mui/material"
import { RoleSelector } from "./components/RoleSelector"
import React from "react";
import AdminDashboard from "./components/AdminDashboard";
import CustomerDashboard from "./components/CustomerDasboard";
import type { Role } from "./types/role";

export const Day5: React.FC = () => {
  const [role, setRole] = React.useState<Role>("user");
  const handleSetRole = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value as Role);
  };
  return (
    <Container>
      <h2>Day 5: Conditional Rendering + Role-based UI</h2>
      <RoleSelector role={role} onRoleChange={handleSetRole} />
      {role === "admin" && <AdminDashboard />}
      {role === "user" && <CustomerDashboard />}
    </Container>
  )
}
