import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const product = JSON.parse(localStorage.getItem("infoBooking"));

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: localStorage.getItem("name") },
  { name: 'Card number', detail: localStorage.getItem("cardNumber") },
  { name: 'Expiry date', detail: new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Booking summary
      </Typography>
      <List disablePadding>
        <ListItem key={product.roomName} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={product.roomName} secondary={product.desc} />
          <Typography variant="body2">{product.price}</Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${product.price}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Customer
          </Typography>
          <Typography gutterBottom>{localStorage.getItem("name")}</Typography>
          <Typography gutterBottom>{localStorage.getItem("address")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}