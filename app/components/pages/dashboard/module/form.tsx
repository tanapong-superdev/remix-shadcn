import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
const formSchema = z.object({
  team_name: z.string().min(1).max(50),
  plan: z.string({
    required_error: "Please select an plan to display.",
  }),
});
export type FormAccountProps = {
  onSubmitForm?: (values: z.infer<typeof formSchema>) => void;
};
export default function PagesDashboardModuleForm({
  onSubmitForm,
}: FormAccountProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      team_name: "",
      plan: "free",
    },
  });
  const plans = [
    {
      value: "free",
      label: "Free",
      description: "Trial for two weeks",
    },

    {
      value: "pro",
      label: "Pro",
      description: " $9/month per user",
    },
  ];
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (onSubmitForm && onSubmitForm instanceof Function) {
      onSubmitForm(values);
    }
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="team_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team name</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Inc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="plan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subscription plan</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent align="center">
                    {plans.map((plan, key) => (
                      <SelectItem key={key} value={plan.value}>
                        <div className="flex gap-1 items-center">
                          <div className="text-sm font-medium">
                            {plan.label} -
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {plan.description}
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
