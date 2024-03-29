import { ToggleMode } from "@/components/ToggleMode";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-muted p-2 rounded mb-2">
      <ul className="flex justify-between  items-center">
        <li>
          <ToggleMode />
        </li>
      </ul>
    </nav>
  );
}
