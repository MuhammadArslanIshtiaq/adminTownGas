import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";

// Images

import team1 from "assets/images/team-2.webp";
import team2 from "assets/images/team-1.webp";

export default function data() {
  const Author = ({ image, name, email, phone }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography display="block" variant="caption">
          {email}
        </MDTypography>
        <MDTypography variant="caption">{phone}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "User", accessor: "author", width: "25%", align: "left" },
      { Header: "Wallet Address", accessor: "function", align: "left" },
      { Header: "Order#", accessor: "orderNum", align: "center" },
      { Header: "Date", accessor: "orderDate", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: (
          <Author image={team1} name="Abdullah Filum" email="abdullah@blc.com" phone="0900 78601" />
        ),
        function: <Job title="0x123123123123123...." />,
        orderDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        orderNum: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            001122
          </MDTypography>
        ),
        action: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Accepted" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        author: (
          <Author image={team2} name="Waleed Sample" email="waleed@blc.com" phone="0900 78601" />
        ),
        function: <Job title="0x123123123123123...." />,
        orderDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        orderNum: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            001122
          </MDTypography>
        ),
        action: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Rejected" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        author: <Author image={team1} name="Toor Chawal" email="toor@blc.com" phone="0900 78601" />,
        function: <Job title="0x123123123123123...." />,
        orderDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        orderNum: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            001122
          </MDTypography>
        ),
        action: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Accepted" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        author: <Author image={team2} name="Umer Chuddu" email="uk@blc.com" phone="0900 78601" />,
        function: <Job title="0x123123123123123...." />,
        orderDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        orderNum: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            001122
          </MDTypography>
        ),
        action: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Rejjected" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
    ],
  };
}
