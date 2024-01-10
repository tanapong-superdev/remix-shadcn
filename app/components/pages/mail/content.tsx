import PagesMailModuleMenuContent from "~/components/pages/mail/module/menu-content";
import PagesMailModuleProfile from "./module/profile";
import { Textarea } from "~/components/ui/textarea";
import { Switch } from "~/components/ui/switch";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { useLoaderData } from "@remix-run/react";
import { type Mail } from "~/components/pages/mail/data";
export default function PagesMailModuleContent() {
  const { mail } = useLoaderData<{
    mail: Mail;
  }>();
  console.log(mail);
  return (
    <div className="h-full">
      <PagesMailModuleMenuContent></PagesMailModuleMenuContent>

      <div className="border-t border-b">
        <div className="px-4 py-3 flex">
          <div className="flex-1">
            <PagesMailModuleProfile
              name={mail.from}
              subject={mail.subject}
              email={mail.to}
            ></PagesMailModuleProfile>
          </div>
          <div className="ml-auto text-xs text-muted-foreground">
            {mail.date}
          </div>
        </div>
      </div>
      <div
        style={{ height: "calc(100vh - 286px)" }}
        className="flex flex-col  "
      >
        <div className="flex-1 overflow-y-scroll py-4 px-3">{mail.body}</div>
        <div className="py-4 flex gap-4 flex-col px-3">
          <Textarea
            placeholder="Type your message here."
            className="resize-none"
          />
          <div className="flex">
            <div className="flex flex-1 items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Mute this thread</Label>
            </div>
            <div>
              <Button>Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
