import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Constructor from "../pages/Constructor";
import NotFound from "../pages/NotFound";
import PersonalProfile from "../pages/PersonalProfile";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/constructor" element={<Constructor />} />
      <Route path="/personal-profile" element={<PersonalProfile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
