import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { FormFieldProps } from "@/types/formTypes";
import { Input } from "../ui/input";

export default function InputField(props: FormFieldProps) {
  const { label, onChange, error, formControl, value, inputWidth, name, placeholder, defaultValue } = props;

  return (
    <FormField
      control={formControl}
      name={name as keyof FormFieldProps["validationSchema"]}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-black">{label}</FormLabel>
          <FormControl>
            <Input
              className={`w-[${inputWidth ?? "300px"}] ${
                error ? "border-red-500" : ""
              }`}
              placeholder={placeholder}
              defaultValue={defaultValue as string}
              value={value ? value as string : ""}
              onChange={(event) => {
                field.onChange(event.target.value === "" ? undefined : event.target.value);
                onChange(event.target.value);
              }}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
