import { LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";
import { Mail, getMail, getMails, read } from "~/components/pages/mail/data";
import invariant from "tiny-invariant";
import { useEffect, useState } from "react";
import PagesMailModuleContent from "~/components/pages/mail/content";

export async function loader({ request, params }: LoaderFunctionArgs) {
  invariant(params.mailId, "Missing mailId");

  const mail = await getMail(parseInt(params.mailId));
  const url = new URL(request.url);
  await read(parseInt(params.mailId));
  const mails = await getMails();
  const q = url.searchParams.get("q") || "";
  return json({ mailId: params.mailId, mail, q, mails });
}
export default function MailId() {
  const { mailId, mail } = useLoaderData<{ mailId: string; mail: Mail }>();

  return <PagesMailModuleContent></PagesMailModuleContent>;
}
