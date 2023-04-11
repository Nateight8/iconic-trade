"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Rotate as Hamburger } from "hamburger-react";

type Props = {};

function Navbar({}: Props) {
  const navLinks = [
    {
      url: "/",
      link: "Home",
      id: "1",
    },
    {
      url: "/about",
      link: "About",
      id: "2",
    },
    {
      url: "/more",
      link: "More nav",
      id: "3",
    },
  ];
  const path = usePathname();
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut();
  };

  const router = useRouter();

  console.log(router);
  const [open, setopen] = useState(false);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              <p>
                iconic<span className="font-light">trades</span>
              </p>
            </span>
          </a>
          <div className="md:flex md:order-2 items-center md:space-x-8 hidden">
            {session ? (
              <button
                onClick={handleSignOut}
                style={path === "/sign-up" ? {} : {}}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Log out
              </button>
            ) : (
              <>
                <Button
                  style={
                    path === "/sign-in"
                      ? { color: "#2563eb" }
                      : { color: "white" }
                  }
                  onClick={() => {
                    router.push("/sign-in");
                  }}
                  variant="ghost"
                >
                  Sign in
                </Button>
                <Button
                  style={
                    path === "/sign-up"
                      ? { color: "#2563eb" }
                      : { color: "white" }
                  }
                  onClick={() => {
                    router.push("/sign-up");
                  }}
                  variant="subtle"
                >
                  Sign up
                </Button>
              </>
            )}

            {/* menu here */}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLinks.map((alink) => {
                const { url, link, id } = alink;

                return (
                  <li key={id}>
                    <Link
                      style={
                        path === url ? { color: "#2563eb" } : { color: "white" }
                      }
                      href={url}
                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0"
                      aria-current="page"
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            onClick={() => {
              setopen(!open);
            }}
            className="md:hidden  z-50"
          >
            <Hamburger rounded color="white" />
          </button>
        </div>

        {/* navbar drawer */}
        <div
          style={
            open
              ? { transform: "translateX(0%)" }
              : { transform: "translateX(-100%)" }
          }
          id="drawer-example"
          className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
          tabIndex={-1}
          aria-labelledby="drawer-label"
        >
          {session ? (
            <button
              onClick={handleSignOut}
              style={path === "/sign-up" ? {} : {}}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Log out
            </button>
          ) : (
            <>
              <Button
                style={
                  path === "/sign-in"
                    ? { color: "#2563eb" }
                    : { color: "white" }
                }
                onClick={() => {
                  router.push("/sign-in");
                }}
                variant="ghost"
              >
                Sign in
              </Button>
              <Button
                style={
                  path === "/sign-up"
                    ? { color: "#2563eb" }
                    : { color: "white" }
                }
                onClick={() => {
                  router.push("/sign-up");
                }}
                variant="subtle"
              >
                Sign up
              </Button>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
