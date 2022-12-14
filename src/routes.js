// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Accepted from "layouts/tables/data/acceptedUsers";
import Rejected from "layouts/tables/data/rejectedUsers";
import SignIn from "layouts/authentication/sign-in";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "All Users",
    key: "allusers",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/all",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Accepted Users",
    key: "acceptedUsers",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/accepted",
    component: <Accepted />,
  },

  {
    type: "collapse",
    name: "Rejected Users",
    key: "rejected",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/rejected",
    component: <Rejected />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/sign-in",
    component: <SignIn />,
  },
];

export default routes;
