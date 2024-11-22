import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage" //import LandingPage Component
import Home from "./pages/Home"; //import Home page Component
import Login from "./pages/Login"; //import Login page Component
import Register from "./pages/Register"; //import Register page Component
import UserSettings from "./pages/UserSettings"; //import UserSetting page Component
import NotFound from "./pages/NotFound"; //import NotFound page Component
import DefaultLayout from "./layouts/DefaultLayout"; //import Component for all Users
import ProtectedLayout from "./layouts/ProtectedLayout"; //import Component for Users with tokens
import NotificationBar from "./components/notification/NotificationBar"; //import NotificationBar 
import { Roles } from "./constants"; //Having the Roles object will determine if the User has a role which can be authenticated
import { useAppDispatch, useAppSelector } from "./hooks/redux-hooks";
import { getUsers } from "./slices/userSlice";

function App() {
  const dispatch = useAppDispatch();

  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);

  useEffect(() => {
    if (basicUserInfo) {
      dispatch(getUsers());;
    }
  }, [basicUserInfo]);

  return (
    <>
      <NotificationBar />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route
          element={
            <ProtectedLayout
              allowedRoles={[
                Roles.User,
              ]}
            />
          }
        >
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<ProtectedLayout allowedRoles={[Roles.User]} />}>
          <Route path="/landingpage" element={<LandingPage />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ViewProject />} />
          <Route path="/dashboards" element={<Dashboards />} />
          <Route path="/dashboards/:id" element={<Dashboard />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
