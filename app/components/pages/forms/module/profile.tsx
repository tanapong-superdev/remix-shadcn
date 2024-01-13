"use client";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { Input } from "~/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFieldArray, Controller } from "react-hook-form";
import { toast } from "~/components/ui/use-toast";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email({
      message: "Please enter a valid email.",
    }),
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
  urls: z.array(
    z.object({
      value: z.string().refine(
        (value) => {
          const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
          return urlPattern.test(value);
        },
        {
          message: "Please enter a valid URL.",
        }
      ),
    })
  ),
});
export default function PagesFormsProfile() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "I own a computer.",
      urls: [
        {
          value: "https://shadcn.com",
        },
        {
          value: "http://twitter.com/shadcn",
        },
      ],
    },
  });

  const {
    control,
    formState: { errors },
  } = form;

  const { fields, append } = useFieldArray({
    name: "urls",
    control,
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
    console.log(values);
  }
  return (
    <div>
      <div className="flex flex-col">
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <hr className="my-3" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name. It can be your real name or
                  a pseudonym. You can only change this once every 30 days.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="py-4"></div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  ou can manage verified email addresses in your email settings.{" "}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="py-4"></div>
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can <span>@mention</span> other users and organizations.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="py-4"></div>
          <div>
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              URLs
            </label>
            <p className="text-[0.8rem] text-muted-foreground">
              Add links to your website, blog, or social media profiles.
            </p>
          </div>
          <div className="space-y-2">
            {fields.map((fieldForm, index) => {
              const errorForField = errors?.urls?.[index]?.value;
              return (
                <Controller
                  key={index}
                  control={control}
                  name={`urls.${index}.value`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage>{errorForField?.message}</FormMessage>
                    </FormItem>
                  )}
                />
              );
            })}
          </div>
          <div className="flex mt-3 mb-3 gap-6 flex-col">
            <div>
              <Button
                variant="secondary"
                className="h-8 w-20"
                type="button"
                onClick={() => append({ value: "" })}
              >
                Add URL
              </Button>
            </div>

            <div>
              <Button type="submit">Update profile</Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
