export type Role="admin" | "user";

export interface IRoleSelectorProps {
  role: string;
  onRoleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}