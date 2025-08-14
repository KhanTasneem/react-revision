import { Card, CardContent, CardHeader, List, ListItem, Typography } from "@mui/material";

const CustomerDashboard = () => {
    console.log("customer dashboard");

  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader title="👤 Customer Dashboard" />
      <CardContent>
        <List>
          <ListItem>🛒 Browse products</ListItem>
          <ListItem>➕ Add items to cart</ListItem>
          <ListItem>📦 View your orders</ListItem>
          <ListItem>🚚 Track shipping</ListItem>
        </List>
        <Typography variant="body2" color="text.secondary">
          You can shop, track, and view your orders here.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomerDashboard;
