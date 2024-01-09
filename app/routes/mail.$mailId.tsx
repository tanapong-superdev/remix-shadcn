import { LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { Form, Scripts, useLoaderData, useSubmit } from "@remix-run/react";
import { useRevalidator } from "react-router-dom";
import { Mail, getMail, getMails, read } from "~/components/pages/mail/data";
import invariant from "tiny-invariant";
import { useEffect, useState } from "react";

export async function loader({ request, params }: LoaderFunctionArgs) {
  invariant(params.mailId, "Missing mailId");

  const mail = await getMail(parseInt(params.mailId));
  const url = new URL(request.url);
  await read(parseInt(params.mailId));
  const mails = await getMails();
  const q = url.searchParams.get("q");
  // return redirect("/mail", { headers: { "Cache-Control": "no-store" } });
  return json({ mailId: params.mailId, mail, q, mails });
}
let isHydrating = true;
export default function MailId() {
  let firstTime = false;
  const [isHydrated, setIsHydrated] = useState(!isHydrating);
  useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);

  //   revalidator.revalidate();
  const sumbit = useSubmit();
  // const data = useLoaderData();
  const { mailId, mail } = useLoaderData<{ mailId: string; mail: Mail }>();

  return (
    <div>
      <h1>MailId {mail.body} </h1>
      <Form
        onChange={(event) => {
          console.log(event.currentTarget);
          // submit(event.currentTarget);
        }}
      />
      {/* <Form method="post">
        <input type="hidden" name="mailId" />
        <input type="hidden" name="mail" />
        <button type="submit">Submit</button>
      </Form> */}
    </div>
  );
}
