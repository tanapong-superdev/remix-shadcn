import Rechart from "~/components/ui/rechart";
import SharedListUser from "../shared/list-user";
import SharedSummary from "../shared/summary";
export default function PagesDashboard() {
  return (
    <div className="mt-4 ">
      <div className="w-full grid mb-6  gap-4 lg:gap-2 lg:space-y-0   grid-cols-12 ">
        <div className="lg:col-span-3 sm:col-span-6   col-span-12">
          <SharedSummary></SharedSummary>
        </div>
        <div className="lg:col-span-3 sm:col-span-6  col-span-12">
          <SharedSummary></SharedSummary>
        </div>
        <div className="lg:col-span-3 sm:col-span-6  col-span-12">
          <SharedSummary></SharedSummary>
        </div>
        <div className="lg:col-span-3 sm:col-span-6  col-span-12">
          <SharedSummary></SharedSummary>
        </div>
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
