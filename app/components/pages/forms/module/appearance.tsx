"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { toast } from "~/components/ui/use-toast";

const FormSchema = z.object({
  theme: z.enum(["light", "dark"], {
    required_error: "You need to select a theme",
  }),
  font: z.string({
    required_error: "Please select a font.",
  }),
});

export default function PagesFormsModuleApperance() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div>
      <div className="flex flex-col">
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">
          Customize the appearance of the app. Automatically switch between day
          and night themes.
        </p>
      </div>
      <hr className="my-3" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="font"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Font</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select you font in the dashboard." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="inter">Inter</SelectItem>
                    <SelectItem value="manrope">Manrope</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Set the font you want to use in the dashboard.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="theme"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>
                  Theme
                  <FormDescription className="mt-0  text-sm">
                    Select the theme for the dashboard.
                  </FormDescription>
                </FormLabel>

                <FormControl>
                  <RadioGroup
                    orientation="horizontal"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-colx "
                  >
                    <FormItem>
                      <div className="flex items-center gap-3 flex-col ">
                        <div
                          className={`flex border-2  p-1 rounded  items-center ${
                            form.watch("theme") === "light" && `border-black`
                          } `}
                        >
                          <div
                            onClick={() => form.setValue("theme", "light")}
                            className="space-y-2 rounded-sm  bg-[#ecedef] p-2"
                          >
                            <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                              <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]"></div>
                              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
                            </div>
                            <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                              <div className="h-4 w-4 rounded-full bg-[#ecedef]"></div>
                              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
                            </div>
                            <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                              <div className="h-4 w-4 rounded-full bg-[#ecedef]"></div>
                              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
                            </div>
                          </div>
                        </div>
                        <span className="text-md">Light</span>
                      </div>
                    </FormItem>
                    <FormItem>
                      <div className="flex items-center gap-3 flex-col ">
                        <div
                          className={`flex border-2 p-1 rounded  items-center ${
                            form.watch("theme") === "dark" && `border-black`
                          } `}
                        >
                          <div
                            onClick={() => form.setValue("theme", "dark")}
                            className="space-y-2 rounded-sm  bg-[#424242] p-2"
                          >
                            <div className="space-y-2 rounded-md bg-black p-2 shadow-sm">
                              <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]"></div>
                              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
                            </div>
                            <div className="flex items-center space-x-2 rounded-md bg-black p-2 shadow-sm">
                              <div className="h-4 w-4 rounded-full bg-[#ecedef]"></div>
                              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
                            </div>
                            <div className="flex items-center space-x-2 rounded-md bg-black p-2 shadow-sm">
                              <div className="h-4 w-4 rounded-full bg-[#ecedef]"></div>
                              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
                            </div>
                          </div>
                        </div>
                        <span className="text-md">Dark</span>
                      </div>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Update preferences</Button>
        </form>
      </Form>
    </div>
  );
}
