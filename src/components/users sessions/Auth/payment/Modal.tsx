import { Button } from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";

type Props = {
  // handleOpen: () => void;
  // open: boolean;
};

function Modal({}: Props) {
  const [amount, setAmount] = useState<string>("");

  const initialValues = {
    amount: "",
  };

  type PaymentReference = {
    reference: string;
    trans: string;
    status: string;
    message: string;
    transaction: string;
  };

  const onSuccess = (reference: PaymentReference) => {
    console.log(reference);
  };

  const onPaymentSuccess = () => {
    alert("payment successful");
  };

  const onClose = () => {
    console.log("closed");
    alert("Do you want to exit payment?");
  };

  const config = {
    reference: new Date().getTime().toString(),
    //   email: session?.user?.email ?? "",
    email: "mbaocha@yahoo.com",
    amount: parseInt(amount) * 100,
    publicKey: "pk_test_b4c92c66e786e81550970b0612644f065537f464",
  };

  const initializePayment = usePaystackPayment(config);

  console.log(parseInt(amount));

  return (
    <>
      {/* <div
        // onClick={handleOpen}
        style={open ? { display: "block" } : { display: "none" }}
        className=" bg-slate-800/20 absolute inset-0 overflow-hidden overflow-y-clip transition-all duration-[3000]"
      >
        <div
          style={
            open
              ? { transform: "translate-y(-100%)" }
              : { transform: "translate-y(100%)" }
          }
          className="h-full w-full  relative"
        >
          <div className="bg-slate-800 w-full h-[80vh] absolute translate-y-4 bottom-0 rounded-3xl  ">
            <div className="max-w-screen-xl mx-auto p-4 py-8 ">
              <div className=" w-full "> */}

      <div className=" w-full mb-4 ">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            setAmount(values.amount);
            console.log(values.amount);
            console.log(parseInt(values.amount));
            initializePayment(onPaymentSuccess, onClose);
          }}
        >
          {() => {
            return (
              <Form className="w-full max-w max-w-lg ">
                <div className="my-4">
                  <div className="relative z-0 w-full mb-4 group ">
                    <Field
                      name="amount"
                      label="Enter an Amount"
                      as={TextField}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full justify-center uppercase items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  proceed
                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
      {/* </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Modal;
