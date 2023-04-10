import React from "react";
import TabComp from "./Auth/dashboard/TabComp";

type Props = {};

function AuthUser({}: Props) {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h3 className="text-2xl text-white font-bold pb-3 ">Dashboard</h3>
      <TabComp />
    </div>
  );
}

export default AuthUser;
