import React, { useState } from "react";
// import Link from "react-router-dom";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
function Registration({}) {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [room, setRoom] = useState("");
  const [roomType, setRoomType] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lastName,
        firstName,
        arrival,
        departure,
        room,
        roomType,
        email,
        telephone,
        address,
        address2,
        city,
        state,
        zip,
        country,
      }),
    });
  };

  return (
    <Container>
      <Box
        className="login-Box"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <Form onSubmit={handleSubmit}>
          <LogoWrapper>
            <center>{/* <img src={logo} alt="" /> */}</center>
            <h3>
              Truss <span>Hotel</span>
            </h3>
          </LogoWrapper>
          <h3> Guest Registration Card </h3>
          <p>
            {error ? (
              <>
                {error.errors.map((error) => (
                  <Alert
                    key={error.id}
                    variant="outlined"
                    severity="error"
                    style={{ color: "red" }}
                  >
                    {error}
                  </Alert>
                ))}
              </>
            ) : (
              <>
                {" "}
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      fullWidth
                      autoComplete="family-name"
                      variant="outlined"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="First name"
                      fullWidth
                      autoComplete="given-name"
                      variant="outlined"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Arrival"
                        value={arrival}
                        onChange={(newValue) => {
                          setArrival(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Departure"
                        value={departure}
                        onChange={(newValue) => {
                          setDeparture(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Room Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={roomType}
                        fullWidth
                        label="Room Type"
                        onChange={(e) => setRoomType(e.target.value)}
                      >
                        <MenuItem value={1}>KING</MenuItem>
                        <MenuItem value={2}>FF</MenuItem>
                        <MenuItem value={3}>QQ</MenuItem>
                        <MenuItem value={4}>HS</MenuItem>
                        <MenuItem value={5}>MS</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="Room"
                      name="Room"
                      label="Room Number"
                      fullWidth
                      autoComplete="family-name"
                      variant="outlined"
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Email"
                      defaultValue="Email"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="outlined"
                      label="Telephone"
                      defaultValue="telephone"
                      variant="outlined"
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="address1"
                      name="address1"
                      label="Address line 1"
                      fullWidth
                      autoComplete="shipping address-line1"
                      variant="outlined"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="address2"
                      name="address2"
                      label="Address line 2"
                      fullWidth
                      autoComplete="shipping address-line2"
                      variant="outlined"
                      value={address2}
                      onChange={(e) => setAddress2(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="city"
                      name="city"
                      label="City"
                      fullWidth
                      autoComplete="shipping address-level2"
                      variant="outlined"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="state"
                      name="state"
                      label="State/Province/Region"
                      fullWidth
                      variant="outlined"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="zip"
                      name="zip"
                      label="Zip / Postal code"
                      fullWidth
                      autoComplete="shipping postal-code"
                      variant="outlined"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="country"
                      name="country"
                      label="Country"
                      fullWidth
                      autoComplete="shipping country"
                      variant="outlined"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid>
                  <Fab
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="add"
                    type="submit"
                  >
                    <AssignmentIcon>Register</AssignmentIcon>
                    <Typography variant="button" display="block">
                      Generate
                    </Typography>
                  </Fab>
                </Grid>
              </>
            )}
          </p>
        </Form>
      </Box>
    </Container>
  );
}
const Form = styled.form`
  /* outline: 2px dotted blue; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    color: #6c7679;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #009994;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    align-self: center;
    height: 18rem;
  }
  h3 {
    color: #009994;
    text-align: center;
    font-size: 22px;
  }
  span {
    color: #4d565b;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;
export default Registration;
