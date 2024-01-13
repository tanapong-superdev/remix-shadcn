import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";
export type SharedSummaryProps = {
  title?: string;
  description?: string;
  value?: string;
  IconSummary?: any;
};
export default function SharedSummary({
  title,
  description,
  value,
  IconSummary,
}: SharedSummaryProps) {
  title = title || "Title";
  description = description || "Description";
  value = value || "value";

  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <Card>
      {loading ? (
        <div className="h-[134px] flex items-center px-3 space-x-4">
          <div className="space-y-2 w-full">
            <Skeleton
              style={{ width: "calc(100% - 100px)" }}
              className="h-4 "
            />
            <Skeleton style={{ width: "100%" }} className="h-4 " />
            <Skeleton style={{ width: "100%" }} className="h-4 " />
          </div>
        </div>
      ) : (
        <CardHeader>
          <CardTitle className="flex">
            <span className="text-sm flex-1 font-medium">{title}</span>
            {IconSummary ? <IconSummary></IconSummary> : null}
          </CardTitle>
          <CardDescription className="flex flex-col">
            <span className="text-2xl text-black font-black">{value}</span>
            <span className="font-medium text-gray">{description}</span>
          </CardDescription>
        </CardHeader>
      )}
    </Card>
  );
}
