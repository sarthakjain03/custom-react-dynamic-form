import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { useState } from "react";
import { FormFieldProps } from "@/types/formTypes";
import { cn } from "@/lib/utils";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DateSelectField(props: FormFieldProps) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const { label, onChange, error, formControl, inputWidth, name, placeholder } = props;

  return (
    <FormField
      control={formControl}
      name={name as keyof FormFieldProps["validationSchema"]}
      render={({ field }) => (
        <FormItem className="flex flex-col mt-2">
          <FormLabel className="text-black">{label}</FormLabel>
          <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    `w-[${inputWidth ?? "300px"}] text-left font-normal`,
                    !field.value && "text-muted-foreground",
                    error && "border-red-500"
                  )}
                  onClick={() => setPopoverOpen(true)}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>{placeholder}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={(date) => {
                  field.onChange(date);
                  onChange(date);
                  setPopoverOpen(false);
                }}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  );
}
