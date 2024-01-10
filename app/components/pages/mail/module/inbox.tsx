import { useEffect, useState } from "react";
import { Input } from "~/components/ui/input";
import {
  NavLink,
  redirect,
  useLoaderData,
  useLocation,
  useRevalidator,
  useSearchParams,
} from "@remix-run/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import PagesMailModuleInboxCard from "~/components/pages/mail/module/inbox-card";
import { Skeleton } from "~/components/ui/skeleton";
import { type Mail } from "../data";
let debounceTimeout: any = null;

export default function PagesMailModuleInbox() {
  const { mails, q, mailId } = useLoaderData<{
    mails: Mail[];
    q: string;
    mailId: string;
  }>();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [tab, setSetTab] = useState<"all" | "unread">("all");
  const [stateQuery, setStateQuery] = useState(q);
  const [stateLoading, setStateLoading] = useState(false);
  const [mailState, setMailState] = useState<number>(+mailId);
  const unreadMail = mails.filter((mail) => mail.unread);
  const [mailUnread, setMailUnread] = useState<Mail[]>(unreadMail as Mail[]);
  let revalidator = useRevalidator();
  useEffect(() => {
    if (stateQuery === null) return;
    setSearchParams({ q: stateQuery as string });
  }, [stateQuery]);
  setTimeout(() => {
    setStateLoading(false);
  }, 1000);
  function setValue(value: string) {
    setStateLoading(true);
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      setStateQuery(value);
      setStateLoading(false);
    }, 1000);
  }
  useEffect(() => {
    console.log("set mail link");
    if (mailId) {
      setMailLink(+mailId);
    }
  }, [location]);
  async function setMailLink(mailId: number) {
    setMailState(mailId);
    if (tab === "all") {
      setTimeout(() => {
        revalidator.revalidate();
      });
    } else {
      const findMail = mails.find((mail) => mail.id === mailId);

      if (findMail) {
        findMail.unread = false;
        setMailUnread([...mailUnread]);
      }
    }
  }
  function setTab(value: string) {
    if (value === "unread") {
      const unreadMail = mails.filter((mail) => mail.unread);
      setMailUnread(unreadMail as Mail[]);
    }
    setSetTab(value as "all" | "unread");
  }

  return (
    <div className=" border-l border-r ">
      <Tabs defaultValue="all">
        <div>
          <div className="flex   items-center w-full p-3">
            <span className="text-xl flex-1 font-bold">Inbox</span>
            <div>
              <TabsList>
                <TabsTrigger onClick={() => setTab("all")} value="all">
                  All Mail
                </TabsTrigger>
                <TabsTrigger onClick={() => setTab("unread")} value="unread">
                  Unread
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          <div className="border-t h-full">
            <TabsContent className="mt-0" value="all">
              <div className="p-3 ">
                <Input
                  type="text"
                  defaultValue={stateQuery || ""}
                  onInput={(e) => {
                    setValue(e.currentTarget.value);
                  }}
                  placeholder="Search"
                />
              </div>

              <div
                style={{ height: "calc(100vh - 270px)" }}
                className="overflow-y-scroll pb-4  px-3 flex flex-col gap-4  "
              >
                {stateLoading
                  ? Array.from({ length: 100 }, (_, index) => (
                      <div
                        key={index}
                        className="flex border  rounded-lg py-3 px-2 items-center space-x-4"
                      >
                        <div className="space-y-2 w-full">
                          <Skeleton className="h-4 w-[100px]" />
                          <Skeleton className="h-4 w-[150px]" />
                          <Skeleton className="h-20 w-full" />
                        </div>
                      </div>
                    ))
                  : mails.map((mail, index) => (
                      <div key={index}>
                        <NavLink
                          to={`${mail.id}?${q ? `q=${q}` : ""}`}
                          onClick={(e) => {
                            setMailLink(mail.id as number);
                          }}
                          className={({ isActive, isPending }) =>
                            isActive
                              ? "bg-accent"
                              : isPending
                              ? "pending"
                              : "h-full"
                          }
                        >
                          <PagesMailModuleInboxCard
                            from={mail.from}
                            unread={mail.unread}
                            subject={mail.subject}
                            body={mail.body}
                            active={mailState === mail.id}
                          ></PagesMailModuleInboxCard>
                        </NavLink>
                      </div>
                    ))}
              </div>
            </TabsContent>
            <TabsContent className="mt-0" value="unread">
              <div className="p-3 ">
                <Input
                  type="text"
                  defaultValue={stateQuery || ""}
                  onInput={(e) => {
                    setValue(e.currentTarget.value);
                  }}
                  placeholder="Search"
                />
              </div>

              <div
                style={{ height: "calc(100vh - 270px)" }}
                className="overflow-y-scroll pb-4  px-3 flex flex-col gap-4  "
              >
                {stateLoading
                  ? Array.from({ length: 100 }, (_, index) => (
                      <div
                        key={index}
                        className="flex border  rounded-lg py-3 px-2 items-center space-x-4"
                      >
                        <div className="space-y-2 w-full">
                          <Skeleton className="h-4 w-[100px]" />
                          <Skeleton className="h-4 w-[150px]" />
                          <Skeleton className="h-20 w-full" />
                        </div>
                      </div>
                    ))
                  : mailUnread.map((mail, index) => (
                      <div key={index}>
                        <NavLink
                          to={`${mail.id}?${q ? `q=${q}` : ""}`}
                          onClick={(e) => {
                            setMailLink(mail.id as number);
                          }}
                          className={({ isActive, isPending }) =>
                            isActive
                              ? "bg-accent"
                              : isPending
                              ? "pending"
                              : "h-full"
                          }
                        >
                          <PagesMailModuleInboxCard
                            from={mail.from}
                            unread={mail.unread}
                            subject={mail.subject}
                            body={mail.body}
                            active={mailState === mail.id}
                          ></PagesMailModuleInboxCard>
                        </NavLink>
                      </div>
                    ))}
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
