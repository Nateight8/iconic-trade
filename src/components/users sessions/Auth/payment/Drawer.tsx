import React from "react";
import Modal from "./Modal";
import Link from "next/link";

type Props = {
  open: boolean;
  handleClose: () => void;
};

function Drawer({ handleClose, open }: Props) {
  return (
    <>
      <div
        style={
          open
            ? { transform: "translateY(0%)" }
            : { transform: "translateY(100%)" }
        }
        id="drawer-bottom-example"
        className="fixed bottom-0 left-0 right-0 z-50 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none"
        tabIndex={-1}
        aria-labelledby="drawer-bottom-label"
      >
        <button
          onClick={handleClose}
          type="button"
          data-drawer-hide="drawer-bottom-example"
          aria-controls="drawer-bottom-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <Modal />
        <p className="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">
          Check your transaction history in your{" "}
          <Link
            href="#"
            className="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline mr-1"
          >
            iconicTrade dashboard.
          </Link>
          Bank transfers generally take 10 minutes to complete. If you are not
          creadited after 24 hours, please contact your bank
        </p>
      </div>
      <div
        onClick={handleClose}
        style={
          open
            ? { transform: "translateY(0%)" }
            : { transform: "translateY(100%)" }
        }
        className="absolute inset-0 bg-slate-900/20 z-40"
      />
    </>
  );
}

export default Drawer;
