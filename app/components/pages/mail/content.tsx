import PagesMailModuleMenuContent from "~/components/pages/mail/module/menu-content";
import PagesMailModuleProfile from "./module/profile";
import { Textarea } from "~/components/ui/textarea";
import { Switch } from "~/components/ui/switch";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { useLoaderData, useNavigation, useParams } from "@remix-run/react";
import { type Mail } from "~/components/pages/mail/data";
import { Skeleton } from "~/components/ui/skeleton";
import { useState } from "react";
export default function PagesMailModuleContent() {
  const { mail } = useLoaderData<{
    mail: Mail;
  }>();
  const navigation = useNavigation();
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
          <div className="ml-autox line-clamp-1  text-xs text-muted-foreground">
            {mail.date}
          </div>
        </div>
      </div>
      <div
        style={{ height: "calc(100vh - 286px)" }}
        className="flex flex-col  "
      >
        <div className="flex-1 overflow-y-scroll py-4 px-3">
          {navigation.state === "loading" ? (
            <div className="flex   w-full space-x-4">
              <div className="space-y-2">
                <Skeleton className="h-4  w-[600px]" />

                <Skeleton className="h-4 w-[600px]" />
                <Skeleton className="h-4 w-[600px]" />
              </div>
            </div>
          ) : (
            mail.body
          )}
        </div>
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
