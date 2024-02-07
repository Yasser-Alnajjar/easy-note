import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <div className="grid place-content-center h-lvh">
      <SignIn redirectUrl={"/"} />
    </div>
  );
}
