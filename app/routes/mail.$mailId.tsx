import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Mail, getMail, getMails, read } from "~/components/pages/mail/data";
import invariant from "tiny-invariant";
import PagesMailModuleContent from "~/components/pages/mail/content";

export async function loader({ request, params }: LoaderFunctionArgs) {
  invariant(params.mailId, "Missing mailId");

  const mail = await getMail(parseInt(params.mailId));
  const url = new URL(request.url);
  await read(parseInt(params.mailId));

  const q = url.searchParams.get("q") || "";
  return json({ mailId: params.mailId, mail, q });
}
export default function MailId() {
  return <PagesMailModuleContent></PagesMailModuleContent>;
}
