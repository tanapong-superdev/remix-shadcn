import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import type { Mail } from "~/components/pages/mail/data";
export type InboxCardProps = Mail & {
  active?: boolean;
};
export default function PagesMailModuleInboxCard({
  from,
  subject,
  body,
  active,
  unread,
}: InboxCardProps) {
  return (
    <div>
      <Card className={active ? "bg-accent" : "hover:bg-accent"}>
        <CardHeader className="px-3 py-2">
          <CardTitle className="font-semibold text-md flex items-center">
            {from || "Title Form"}
            {unread ? (
              <span className="flex ml-3 h-2 w-2 rounded-full bg-blue-600"></span>
            ) : null}
          </CardTitle>
          <CardDescription className="text-xs font-medium">
            {subject || "Title Subject"}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-3">
          <div className=" line-clamp-2  text-xs text-muted-foreground">
            {body || " Body Content"}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
