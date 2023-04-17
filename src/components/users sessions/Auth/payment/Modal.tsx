import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import TextField from "@/components/ui/TextField";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";

type Props = {
  handleStep: () => void;
  steps: number;
};

function Modal({ steps, handleStep }: Props) {
  const [amount, setAmount] = useState<string>("");
  const [values, setvalues] = useState();
  const [planChange, setChangeplan] = useState("");

  const initialValues = {
    amount: "",
    plan: "",
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

  const handlePlanChange = (selectedValue: string) => {
    // Handle plan change
    setChangeplan(selectedValue);
    // You can update the UI or perform other actions based on the selected value
  };
  return (
    <div className="flex">
      <div className="">
        <div className=" w-full mb-4 ">
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              setAmount(values.amount);
              initializePayment();
            }}
          >
            {({ values, setFieldValue, handleSubmit }) => {
              return (
                <Form
                  onSubmit={handleSubmit}
                  className="w-full max-w max-w-lg "
                >
                  {steps === 1 && (
                    <>
                      <div className="my-4 ">
                        <div className="relative z-0 w-full mb-4 group ">
                          <Field
                            name="amount"
                            label="Enter an Amount"
                            as={TextField}
                          />
                        </div>
                      </div>
                      <Button className="w-full" onClick={handleStep}>
                        Continue
                      </Button>
                    </>
                  )}
                  {steps === 2 && (
                    <>
                      <Field as="select" name="plan">
                        {({ field, form }: any) => {
                          return (
                            <>
                              <div className="flex flex-col my-4 space-y-1.5">
                                <Label htmlFor="name">Choose a plan</Label>
                                <Select
                                  value={field.value}
                                  defaultValue={field.value}
                                  onValueChange={(selectedValue) => {
                                    handlePlanChange(selectedValue);
                                    form.setFieldValue(
                                      field.name,
                                      selectedValue
                                    );
                                  }}
                                >
                                  <SelectTrigger>
                                    <SelectValue
                                      className="text-slate-200"
                                      placeholder="Choose a plan"
                                    />
                                    <SelectContent position="popper">
                                      <SelectItem value="3-m">
                                        Three Months
                                      </SelectItem>
                                      <SelectItem value="6-m">
                                        Six Months
                                      </SelectItem>
                                      <SelectItem value="9-m">
                                        Nine Months
                                      </SelectItem>
                                    </SelectContent>
                                  </SelectTrigger>
                                </Select>
                              </div>
                            </>
                          );
                        }}
                      </Field>
                      <Button className="w-full" type="submit">
                        Proceed
                        <svg
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </Button>
                    </>
                  )}
                </Form>
              );
            }}
          </Formik>
        </div>
        <div>
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
      </div>
      <div className="items-center justify-center w-96 h-full hidden md:flex ">
        <div className="-rotate-45 select-none">
          <h3 className="text-slate-800 text-6xl font-extrabold mb-3 ">
            {planChange === "3-m"
              ? "8%"
              : planChange === "6-m"
              ? "12%"
              : planChange === "9-m"
              ? "18%"
              : steps === 1
              ? null
              : "???"}
          </h3>
          <p className="text-slate-700 text-lg font-normal max-w-[12rem] ">
            {planChange === "3-m"
              ? "return on investment after three months"
              : planChange === "6-m"
              ? "return on investment after six months"
              : planChange === "9-m"
              ? "return on investment after nine months"
              : steps === 1
              ? null
              : "???"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
