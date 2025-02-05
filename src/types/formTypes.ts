import { Control } from "react-hook-form";
import { z } from "zod";

export interface RadioFieldProps {
  label: string;
  value: string;
}

export type SelectFieldOptions = string[] | number[];

export interface FormFieldProps {
  type: "select" | "radio" | "input" | "date";
  label: string;
  name: string;
  validationSchema: z.ZodSchema;
  formControl: Control<any>;
  placeholder?: string;
  defaultValue: string | number | undefined | Date;
  value: string | undefined | number | Date;
  onChange: (value?: string | Date) => void;
  error?: boolean;
  selectFieldOptions?: SelectFieldOptions;
  radioFieldOptions?: RadioFieldProps[];
}