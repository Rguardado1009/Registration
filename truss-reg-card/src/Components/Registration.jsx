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
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function Registration({}) {
	const [telephone, setTelephone] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setErrors] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("http://localhost:3000/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				name,
				username,
				password,
			}),
		}).then((res) => {
			if (res.ok) {
				res.json().then((user) => {
					setCurrentUser(user);
					history.push("/");
				});
			} else {
				res.json().then((error) => {
					setErrors(error);
				});
			}
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
							<></>
						)}
					</p>
				</Form>

				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="lastName"
							name="lastName"
							label="Last name"
							fullWidth
							autoComplete="family-name"
							variant="standard"
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
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="Arrival"
							name="Arrival"
							label="Arrival"
							fullWidth
							autoComplete="family-name"
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="Departure"
							name="Departure"
							label="Departure"
							fullWidth
							autoComplete="family-name"
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="Room Type"
							name="Room Type"
							label="Room Type"
							fullWidth
							autoComplete="family-name"
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="Room"
							name="Room"
							label="Room Number"
							fullWidth
							autoComplete="family-name"
							variant="standard"
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="standard-required"
							label="Email"
							defaultValue="Email"
							variant="standard"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="standard-required"
							label="Telephone"
							defaultValue="telephone"
							variant="standard"
							value={telephone}
							onChange={(e) => setEmail(e.target.value)}
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
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="address2"
							name="address2"
							label="Address line 2"
							fullWidth
							autoComplete="shipping address-line2"
							variant="standard"
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
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="state"
							name="state"
							label="State/Province/Region"
							fullWidth
							variant="standard"
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
							variant="standard"
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
							variant="standard"
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
