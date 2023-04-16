import { Button } from "@/components/ui/Button";
import React, { useState } from "react";
import Modal from "./Modal";
import Drawer from "./Drawer";

type Props = {};

function Payment({}: Props) {
  const [open, setopen] = useState(false);

  const handleClose = () => {
    setopen(false);
  };

  return (
    <div className="py-5 ">
      <div className="w-full flex justify-end  ">
        <div className="gap-2 grid grid-cols-2">
          <Button
            size="sm"
            variant="ghost"
            // onClick={() => {
            //   setopen(true);
            // }}
          >
            Widraw
          </Button>
          <Button
            size="sm"
            onClick={() => {
              setopen(true);
            }}
          >
            Deposit
          </Button>
        </div>
      </div>

      <Drawer handleClose={handleClose} open={open} />
    </div>
  );
}

export default Payment;
