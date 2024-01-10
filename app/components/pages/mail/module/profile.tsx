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
  return (
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
  );
}
