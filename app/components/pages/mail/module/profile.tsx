import { useNavigation } from "@remix-run/react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Skeleton } from "~/components/ui/skeleton";
export type ProfileProps = {
  name?: string;
  email?: string;
  subject?: string;
};
export default function PagesMailModuleProfile({
  name,
  email,
  subject,
}: ProfileProps) {
  const navigation = useNavigation();
  // const [loading, setLoading] = useState(true);
  // setTimeout(() => {
  //   setLoading(false);
  // }, 1000);

  return (
    <div>
      {navigation.state === "loading" ? (
        <div className="flex h-[56px] items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-1">
            <Skeleton className="h-3 w-[100px]" />
            <Skeleton className="h-3 w-[150px]" />
            <Skeleton className="h-3 w-[200px]" />
          </div>
        </div>
      ) : (
        <div className="flex ">
          <div className="flex flex-1 space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <span className="font-semibold">{name || "Name Title"}</span>
              <div className="line-clamp-1 text-xs">
                {subject || "Subject Title"}
              </div>
              <div className="line-clamp-1 text-xs">
                <span className="font-medium">Reply-To:</span>
                {email || "Email Title"}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
