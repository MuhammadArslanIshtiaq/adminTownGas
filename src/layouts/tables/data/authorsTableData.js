import { useState, useEffect } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";

// Images

import team1 from "assets/images/team-1.webp";
import team2 from "assets/images/team-2.webp";

export default function data() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("accessToken");

    const headers = {
      "Content-Type": "application/json",
      "x-access-token": token,
    };

    fetch("http://audiobar.xyz/api/admin/all_users", { headers }).then((result) => {
      result.json().then((resp) => {
        setUsers(resp);
      });
    });
  }, []);

  const updateRegistration = (id, type) => {
    let token = localStorage.getItem("accessToken");
    let user_id = id;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-access-token": token },
      body: JSON.stringify({ user_id: user_id }),
    };

    if (type === "accepted") {
      fetch("http://audiobar.xyz/api/admin/accept", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    } else {
      fetch("http://audiobar.xyz/api/admin/reject", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const Author = () =>
    users?.map((user, i) => (
      <MDBox display="flex" alignItems="center" lineHeight={1} key={i}>
        <MDAvatar src={team1} size="sm" />
        <MDBox ml={2} lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {user?.name}
          </MDTypography>
          <MDTypography display="block" variant="caption">
            {user?.email}
          </MDTypography>
          <MDTypography variant="caption">{user?.phone}</MDTypography>
        </MDBox>
      </MDBox>
    ));

  const Job = () =>
    users?.map((user, i) => (
      <MDBox lineHeight={1} textAlign="left" key={i}>
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {user?.wallet_address}
        </MDTypography>
      </MDBox>
    ));

  const OrderDate = () =>
    users?.map((user, i) => (
      <MDTypography
        component="a"
        href="#"
        variant="caption"
        color="text"
        fontWeight="medium"
        key={i}
      >
        {user?.purchase_date}
      </MDTypography>
    ));

  const OrderNumber = () =>
    users?.map((user, i) => (
      <MDTypography
        component="a"
        href="#"
        variant="caption"
        color="text"
        fontWeight="medium"
        key={i}
      >
        {user?.order_no}
      </MDTypography>
    ));

  return {
    columns: [
      { Header: "User", accessor: "author", width: "25%", align: "left" },
      { Header: "Wallet Address", accessor: "function", align: "left" },
      { Header: "Order#", accessor: "orderNum", align: "center" },
      { Header: "Date", accessor: "orderDate", align: "center" },
      { Header: "Action", accessor: "action", align: "center", width: "25%" },
    ],

    rows: [
      {
        author: <Author />,
        function: <Job />,
        orderDate: <OrderDate />,
        orderNum: <OrderNumber />,
        action: users?.map((user, i) => (
          <>
            <MDBox ml={-1} key={i}>
              <>
                {/* {v?.status === 'accepted'} */}
                <MDButton
                  color="success"
                  variant="gradient"
                  size="small"
                  onClick={() => updateRegistration(user?.id, "accepted")}
                >
                  Accept
                </MDButton>
                <span style={{ paddingLeft: "2px", paddingRight: "2px" }}></span>
                <MDButton
                  color="error"
                  variant="gradient"
                  size="small"
                  onClick={() => updateRegistration(user?.id, "rejected")}
                >
                  Reject
                </MDButton>
              </>

              {/* <MDBadge badgeContent="Accepted" color="success" variant="gradient" size="sm" /> */}
            </MDBox>
          </>
        )),
      },
    ],
  };
}
