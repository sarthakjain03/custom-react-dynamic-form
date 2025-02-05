import { FormFieldProps } from "@/types/formTypes";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

export default function RadioGroupField(props: FormFieldProps) {
    const { label, onChange, error, formControl, value, defaultValue, name, radioFieldOptions } = props;

    return (
        <FormField
            control={formControl}
            name={name as keyof FormFieldProps["validationSchema"]}
            render={({ field }) => (
              <FormItem className="flex space-x-7 col-span-full items-center">
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) => {
                        field.onChange(value);
                        onChange(value);
                    }}
                    defaultValue={defaultValue as string}
                    value={value ? value as string : ""}
                    className={`flex space-x-1`}
                  >
                    {radioFieldOptions?.map((option) => (
                        <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <RadioGroupItem value={option.value} className={`${error && "border-red-500"}`} />
                            </FormControl>
                            <FormLabel className="font-normal">{option.label}</FormLabel>
                        </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
    );
};