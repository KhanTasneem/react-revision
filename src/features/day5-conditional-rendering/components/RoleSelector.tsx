import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import type { IRoleSelectorProps } from "../types/role"

export const RoleSelector: React.FC<IRoleSelectorProps> = ({ role, onRoleChange }) => {
  return (
    <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: "center", gap:2}}>
        <FormLabel id="role-label">Role</FormLabel>
        <RadioGroup name="role" value={role} onChange={onRoleChange} row>
          <FormControlLabel control={<Radio />} label="Admin" value="admin"/>
          <FormControlLabel control={<Radio />} label="User" value="user"/>
        </RadioGroup>
      </FormControl>
  )
}
