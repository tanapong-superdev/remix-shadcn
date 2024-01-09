import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import PagesMail from "~/components/pages/mail";
import { getMails } from "~/components/pages/mail/data";
import { useLoaderData, useLocation, useSearchParams } from "@remix-run/react";
import { useEffect } from "react";

export async function loader({ request, params }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const mails = await getMails(q);
  return json({ mails, mailId: params.mailId, q });
}
export default function Mail() {
  return (
    <div>
      <PagesMail />
    </div>
  );
}
