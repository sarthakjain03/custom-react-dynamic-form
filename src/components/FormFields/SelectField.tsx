import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { FormFieldProps } from "@/types/formTypes";


export default function SelectField(props: FormFieldProps) {
  const { label, onChange, error, formControl, selectFieldOptions, value, inputWidth, name, placeholder, defaultValue } = props;

  return (
    <FormField
      control={formControl}
      name={name as keyof FormFieldProps["validationSchema"]}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-black">{label}</FormLabel>
          <Select
            onValueChange={(value) => {
                field.onChange(value);
                onChange(value);
            }}
            defaultValue={defaultValue as string}
            value={value ? value as string : ""}
          >
            <FormControl>
              <SelectTrigger
                className={`w-[${inputWidth ?? "300px"}] ${
                  error ? "border-red-500" : ""
                }`}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {selectFieldOptions?.map((option) => (
                <SelectItem key={option} value={option as string}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}
