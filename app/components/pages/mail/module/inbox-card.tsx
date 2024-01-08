import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
export default function PagesMailModuleInboxCard() {
  return (
    <div>
      <Card className="hover:bg-accent">
        <CardHeader className="px-3 py-2">
          <CardTitle className="font-semibold text-md">William Smith</CardTitle>
          <CardDescription className="text-xs font-medium">
            Meeting Tomorrow
          </CardDescription>
        </CardHeader>
        <CardContent className="px-3">
          <div className=" line-clamp-2  text-xs text-muted-foreground">
            Hi, let's have a meeting tomorrow to discuss the project. I've been
            reviewing the project details and have some ideas I'd like to share.
            It's crucial that we align on our next steps to ensure the project's
            success. Please come prepared with any questions or insights you may
            have. Looking forward to
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
