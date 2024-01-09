import { useEffect, useState } from "react";
import { Input } from "~/components/ui/input";
import {
  Form,
  NavLink,
  redirect,
  useLoaderData,
  useRevalidator,
  useSearchParams,
  useSubmit,
} from "@remix-run/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import PagesMailModuleInboxCard from "~/components/pages/mail/module/inbox-card";
import { Skeleton } from "~/components/ui/skeleton";
import { read, getMails, type Mail } from "../data";
import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
let debounceTimeout: any = null;

export async function action({ params }: ActionFunctionArgs) {
  return redirect(`/mail1/${params.mailId}`);
}

export default function PagesMailModuleInbox() {
  const submit = useSubmit();
  const { mails, q, mailId } = useLoaderData<{
    mails: Mail[];
    q: string;
    mailId: string;
  }>();

  const [searchParams, setSearchParams] = useSearchParams();
  const [stateQuery, setStateQuery] = useState(q);
  const [stateLoading, setStateLoading] = useState(true);
  const [mailState, setMailState] = useState<number>(+mailId);
  const [stateMails, setStateMails] = useState<Mail[]>(mails as Mail[]);
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
  async function setMailLink(e: any, mailId: number, index: number) {
    setMailState(mailId);
    setTimeout(() => {
      revalidator.revalidate();
    });
  }

  return (
    <div className=" border-l border-r ">
      <Tabs defaultValue="all">
        <div className="">
          <div className="flex   items-center w-full p-3">
            <span className="text-xl flex-1 font-bold">Inbox</span>
            <div>
              <TabsList>
                <TabsTrigger value="all">All Mail</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
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
                          to={`${mail.id}?q=${q}`}
                          onClick={(e) => {
                            setMailLink(e, mail.id as number, index);
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
                <Input type="text" placeholder="Search" />
              </div>

              <div
                style={{ height: "calc(100vh - 270px)" }}
                className="overflow-y-scroll pb-4  px-3 flex flex-col gap-4  "
              >
                {Array.from({ length: 100 }, (_, index) => (
                  <div key={index}>
                    <PagesMailModuleInboxCard></PagesMailModuleInboxCard>
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
