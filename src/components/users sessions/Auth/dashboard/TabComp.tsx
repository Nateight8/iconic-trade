import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import Payment from "../payment/Payment";
import Overview from "../overview/Overview";

type Props = {};

function TabComp({}: Props) {
  return (
    <div>
      <Tabs defaultValue="overview" className="w-full ">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          {/* <TabsTrigger value="security">Security</TabsTrigger> */}
          <TabsTrigger value="payment">Payment</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Overview />
        </TabsContent>

        <TabsContent value="account">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Make changes to your account here. Click save when you&apos;re done.
          </p>
        </TabsContent>
        {/* 
        <TabsContent value="security">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Change your security here. After saving, you&apos;ll be logged out.
          </p>
        </TabsContent> */}

        <TabsContent value="payment">
          {/* <p className="text-sm text-slate-500 dark:text-slate-400">
            Make changes to your payment here. Click save when you&apos;re done.
          </p> */}
          <Payment />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default TabComp;
