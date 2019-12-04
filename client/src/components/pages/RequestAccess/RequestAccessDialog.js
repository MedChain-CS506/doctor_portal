import React from 'react';

import {
  makeStyles,
  Typography,
  Container,
  Grid,
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
  Avatar,
} from '@material-ui/core';

import GroupAddIcon from '@material-ui/icons/GroupAdd';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary,
  },

  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RequestAccess = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GroupAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Join Request
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="aadhaar"
                label="Aadhaar"
                type="number"
                id="aadhaar"
                autoComplete="current-aadhaar"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="doctorId"
                label="Doctor ID"
                name="doctorId"
                autoComplete="doctor-id"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="notificationEmail" color="primary" />}
                label="Email me when my request has been reviewed and resolved by the network."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Request Access
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default RequestAccess;
