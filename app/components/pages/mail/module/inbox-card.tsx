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
  tags,
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
          <div className="flex gap-2 items-center mt-3">
            {tags
              ? tags.map((tag, index) => (
                  <div>
                    {tag === "meeting" ? (
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        meeting
                      </div>
                    ) : null}
                    {tag === "work" ? (
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                        work
                      </div>
                    ) : null}
                    {tag === "important" ? (
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        important
                      </div>
                    ) : null}
                  </div>
                ))
              : null}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
