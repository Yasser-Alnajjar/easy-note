import { ToggleMode } from "@/components/ToggleMode";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full">
      <ul className="flex justify-between">
        <li>
          <ToggleMode />
        </li>
        <li>Home</li>
      </ul>
    </nav>
  );
}
