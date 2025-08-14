import { Card, CardContent, CardHeader, List, ListItem, Typography } from "@mui/material";

const AdminDashboard = () => {
  console.log("admin dashboard");

  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader title="🛍️ Admin Dashboard" />
      <CardContent>
        <List>
          <ListItem>📦 Add new products</ListItem>
          <ListItem>📑 View and manage all orders</ListItem>
          <ListItem>📊 Check inventory and stock levels</ListItem>
          <ListItem>💰 Generate sales reports</ListItem>
        </List>
        <Typography variant="body2" color="text.secondary">
          You have full access to manage the store.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AdminDashboard;
