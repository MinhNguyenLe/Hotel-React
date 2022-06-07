import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";

export default function ReviewForm() {
  const history = useHistory();
  const [role, setRole] = React.useState("")
  const [name, setName] = React.useState("")
  const [desc, setDesc] = React.useState("")

  const backToReview = () => {
    localStorage.setItem("review", JSON.stringify({
      id: 10,
      desc: desc,
      name: name,
      profile: "/images/profile/profile4.jpg",
      post: role,

    }));

    history.push("/reviewer");
    window.location.reload();
  }
  return (
    <div className='container' style={{ maxWidth: '85%', margin: 'auto' }} >
      <h2 style={{ marginTop: 20 }}>
        Create review for our hotel
      </h2>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) =>
              setName(e.target.value)
            }
            required
            id="firstName"
            name="firstName"
            label="My name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) =>
              setRole(e.target.value)
            }
            required
            id="lastName"
            name="lastName"
            label="My role"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) =>
              setDesc(e.target.value)
            }
            required
            id="address1"
            name="address1"
            label="Description"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <button onClick={backToReview} className='primary-btn'>
            Create my review
          </button>
        </Grid>
      </Grid>
    </div>
  );
}