import { useState } from "react";
import Card from "@mui/material/Card";
import swal from "sweetalert";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import logo from "assets/images/logo.svg";

async function loginUser(credentials) {
  return fetch("https://audiobar.xyz/api/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Basic() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser({
      email,
      password,
    });
    console.log(email);
    console.log(password);
    if ("accessToken" in response) {
      swal("Success", "Logged in", "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        localStorage.setItem("accessToken", response["accessToken"]);
        localStorage.setItem("user", JSON.stringify(response["user"]));
        window.location.href = "/dashboard";
      });
    } else {
      swal("Failed", response.message, "error");
      console.log(response.message);
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            <p style={{ paddingBottom: "10px" }}>
              <img src={logo} alt="logo" width="200px" />
            </p>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                fullWidth
                id="email"
                name="email"
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                fullWidth
                type="password"
                label="Password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                type="submit"
                fullWidth
                onClick={handleSubmit}
              >
                sign in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
