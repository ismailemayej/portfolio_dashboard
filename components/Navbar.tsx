"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="w-full bg-slate-100 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          logo
          {/* Replace with your logo path */}
        </Link>

        {/* Login Button */}
        <Link href="/login">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition duration-200">
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
