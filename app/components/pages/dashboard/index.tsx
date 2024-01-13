import Rechart from "~/components/ui/rechart";
import SharedListUser from "../../shared/list-user";
import SharedSummary, { type SharedSummaryProps } from "../../shared/summary";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
export default function PagesDashboard() {
  const list: SharedSummaryProps[] = [
    {
      title: "Total Revenue",
      description: "+20.1% from last month",
      value: "$45,231.89",
      IconSummary: DollarSign,
    },
    {
      title: "Subscriptions",
      description: "+180.1% from last month",
      value: "+2350",
      IconSummary: Users,
    },
    {
      title: "Sales",
      description: "+19% from last month",
      value: "+12,234",
      IconSummary: CreditCard,
    },
    {
      title: "Active Now",
      description: "+201 since last hour",
      value: "+573",
      IconSummary: Activity,
    },
  ];
  return (
    <div className="mt-4 ">
      <div className="w-full grid mb-6  gap-4 lg:gap-2 lg:space-y-0   grid-cols-12 ">
        {list.map((item, index) => (
          <div
            key={index}
            className="lg:col-span-3 sm:col-span-6   col-span-12"
          >
            <SharedSummary {...item}></SharedSummary>
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-12 ">
        <div className="lg:col-span-8 col-span-12">
          <Rechart></Rechart>
        </div>
        <div className=" lg:col-span-4 col-span-12">
          <SharedListUser></SharedListUser>
        </div>
      </div>
    </div>
  );
}
