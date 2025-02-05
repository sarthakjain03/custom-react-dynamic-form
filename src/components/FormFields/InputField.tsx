import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { FormFieldProps } from "@/types/formTypes";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export default function InputField(props: FormFieldProps) {
  const {
    label,
    onChange,
    error,
    formControl,
    value,
    name,
    placeholder,
    defaultValue,
    inputWidth,
  } = props;

  return (
    <FormField
      control={formControl}
      name={name as keyof FormFieldProps["validationSchema"]}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-black">{label}</FormLabel>
          <FormControl>
            <Input
              className={cn(
                `w-[${inputWidth ? inputWidth : "300px"}]`,
                error && "border-red-500"
              )}
              placeholder={placeholder}
              defaultValue={defaultValue as string}
              value={value ? (value as string) : ""}
              onChange={(event) => {
                field.onChange(
                  event.target.value === "" ? undefined : event.target.value
                );
                onChange(event.target.value);
              }}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
