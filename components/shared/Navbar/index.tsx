import { ToggleMode } from "@/components/ToggleMode";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <ul className="flex justify-between">
          <li>
            <ToggleMode />
          </li>
          <li>Home</li>
        </ul>
      </div>
    </nav>
  );
}
