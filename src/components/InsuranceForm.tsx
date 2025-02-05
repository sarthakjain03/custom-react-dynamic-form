// Third Party Imports
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Local Imports
import { useState } from "react";
import { FormFieldProps } from "@/types/formTypes";
import { InsuranceFormSchema } from "@/lib/validationSchemas";
import { selectFieldOptions } from "@/data/formOptions";

// Component Imports
import SelectField from "./FormFields/SelectField";
import InputField from "./FormFields/InputField";
import DateSelectField from "./FormFields/DateSelectField";
import RadioGroupField from "./FormFields/RadioGroupField";
import { PremiumPlansDialog } from "./PremiumPlansDialog";
import { Button } from "@/components/ui/button";
import { Form, FormDescription } from "@/components/ui/form";

export function InsuranceForm() {
  const form = useForm<z.infer<typeof InsuranceFormSchema>>({
    resolver: zodResolver(InsuranceFormSchema),
    defaultValues: {
      makeYear: 2025,
      makeMonth: "January",
      vehicleClass: "Two Wheeler",
    },
  });

  const { formState: { errors } } = form;

  const [openPremiumPlansDialog, setOpenPremiumPlansDialog] = useState(false);
  const [formFields, setFormFields] = useState<FormFieldProps[]>([
    {
      type: "select",
      selectFieldOptions: selectFieldOptions.registrationStates,
      label: "Registration State *",
      name: "registrationState",
      placeholder: "Select a Registration State",
      value: undefined,
      onChange: (value?: string | Date) => {
        form.resetField("manufacturer");
        form.resetField("model");
        form.resetField("rtoName");

        const manufacturerOptions =
          selectFieldOptions.manufacturers[
            value as keyof typeof selectFieldOptions.manufacturers
          ];

        setFormFields((prev) => {
          return [
            {
              ...prev[0],
              value: value
            },
            {
              ...prev[1],
              selectFieldOptions: manufacturerOptions,
              value: undefined,
            },
            {
              ...prev[2],
              selectFieldOptions: [],
              value: undefined,
            },
            ...prev.slice(3, 5),
            {
              ...prev[5],
              selectFieldOptions: [],
              value: undefined,
            },
            ...prev.slice(6),
          ];
        });
      },
      inputWidth: "300px",
      defaultValue: undefined,
      formControl: form.control,
      validationSchema: InsuranceFormSchema,
    },
    {
      type: "select",
      selectFieldOptions: [],
      label: "Manufacturer *",
      name: "manufacturer",
      placeholder: "Select a Manufacturer",
      value: undefined,
      onChange: (value?: string | Date) => {
        form.resetField("model");
        form.resetField("rtoName");

        const modelOptions =
          selectFieldOptions.models[
            value as keyof typeof selectFieldOptions.models
          ];

        setFormFields((prev) => {
          return [
            ...prev.slice(0, 1),
            {
              ...prev[1],
              value: value,
            },
            {
              ...prev[2],
              selectFieldOptions: modelOptions,
              value: undefined,
            },
            ...prev.slice(3, 5),
            {
              ...prev[5],
              selectFieldOptions: [],
              value: undefined,
            },
            ...prev.slice(6),
          ];
        });
      },
      inputWidth: "300px",
      defaultValue: undefined,
      formControl: form.control,
      validationSchema: InsuranceFormSchema,
    },
    {
      type: "select",
      selectFieldOptions: [],
      label: "Model *",
      name: "model",
      placeholder: "Select a Model",
      value: undefined,
      onChange: (value?: string | Date) => {
        const rtoNameOptions =
          selectFieldOptions.rtoNames[
            value as keyof typeof selectFieldOptions.rtoNames
          ];

        setFormFields((prev) => {
          return [
            ...prev.slice(0, 2),
            {
              ...prev[2],
              value: value,
            },
            ...prev.slice(3, 5),
            {
              ...prev[5],
              selectFieldOptions: rtoNameOptions,
              value: undefined,
            },
            ...prev.slice(6),
          ];
        });
      },
      inputWidth: "300px",
      defaultValue: undefined,
      formControl: form.control,
      validationSchema: InsuranceFormSchema,
    },
    {
      type: "select",
      selectFieldOptions: selectFieldOptions.fuelTypes,
      label: "Fuel Type *",
      name: "fuelType",
      placeholder: "Select a Fuel Type",
      value: undefined,
      onChange: (value?: string | Date) => {
        setFormFields((prev) => {
          return [
            ...prev.slice(0, 3),
            {
              ...prev[3],
              value: value,
            },
            ...prev.slice(4),
          ];
        });
      },
      inputWidth: "300px",
      defaultValue: undefined,
      formControl: form.control,
      validationSchema: InsuranceFormSchema,
    },
    {
      type: "select",
      selectFieldOptions: [2025],
      label: "Make Year *",
      name: "makeYear",
      placeholder: "Select a Make Year",
      value: 2025,
      onChange: (value?: string | Date) => {
        setFormFields((prev) => {
          return [
            ...prev.slice(0, 4),
            {
              ...prev[4],
              value: value,
            },
            ...prev.slice(5),
          ];
        });
      },
      inputWidth: "300px",
      defaultValue: 2025,
      formControl: form.control,
      validationSchema: InsuranceFormSchema,
    },
    {
      type: "select",
      selectFieldOptions: [],
      label: "RTO Name *",
      name: "rtoName",
      placeholder: "Select an RTO Name",
      value: undefined,
      onChange: (value?: string | Date) => {
        setFormFields((prev) => {
          return [
            ...prev.slice(0, 5),
            {
              ...prev[5],
              value: value,
            },
            ...prev.slice(6),
          ];
        });
      },
      inputWidth: "300px",
      defaultValue: undefined,
      formControl: form.control,
      validationSchema: InsuranceFormSchema,
    },
    {
      type: "select",
      selectFieldOptions: selectFieldOptions.longTermCoverPeriods,
      label: "Long Term Cover Period *",
      name: "longTermCoverPeriod",
      placeholder: "Select a Long Term Cover Period",
      value: undefined,
      onChange: (value?: string | Date) => {
        setFormFields((prev) => {
          return [
            ...prev.slice(0, 6),
            {
              ...prev[6],
              value: value,
            },
            ...prev.slice(7),
          ];
        });
      },
      inputWidth: "300px",
      defaultValue: undefined,
      formControl: form.control,
      validationSchema: InsuranceFormSchema,
    },
    {
      type: "select",
      selectFieldOptions: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      label: "Make Month *",
      name: "makeMonth",
      placeholder: "Select a Make Month",
      value: "January",
      onChange: (value?: string | Date) => {
        setFormFields((prev) => {
          return [
            ...prev.slice(0, 7),
            {
              ...prev[7],
              value: value,
            },
            ...prev.slice(8)
          ];
        });
      },
      inputWidth: "300px",
      defaultValue: "January",
      formControl: form.control,
      validationSchema: InsuranceFormSchema,
    },
    {
      type: "input",
      label: "IDV *",
      name: "idv",
      placeholder: "Enter IDV",
      value: undefined,
      onChange: (value?: string | Date) => {
        setFormFields((prev) => {
          return [
            ...prev.slice(0, 8),
            {
              ...prev[8],
              value: value,
            },
            ...prev.slice(9),
          ];
        });
      },
      inputWidth: "300px",
      defaultValue: undefined,
      formControl: form.control,
      validationSchema: InsuranceFormSchema,
    },
    {
      type: "date",
      label: "Date of Registration *",
      name: "dateOfRegistration",
      placeholder: "Select a Date of Registration",
      value: undefined,
      onChange: (value?: string | Date) => {
        setFormFields((prev) => {
          return [
            ...prev.slice(0, 9),
            {
              ...prev[9],
              value: value,
            },
            ...prev.slice(10),
          ];
        });
      },
      inputWidth: "300px",
      defaultValue: undefined,
      formControl: form.control,
      validationSchema: InsuranceFormSchema,
    },
    {
      type: "radio",
      radioFieldOptions: [
        { label: "Two Wheeler", value: "Two Wheeler" },
        { label: "Private Car", value: "Private Car" },
      ],
      label: "Vehicle Class *",
      name: "vehicleClass",
      placeholder: "",
      value: "Two Wheeler",
      onChange: (value?: string | Date) => {
        setFormFields((prev) => {
          return [
            ...prev.slice(0, 10),
            {
              ...prev[10],
              value: value,
            },
          ];
        });
      },
      inputWidth: "300px",
      defaultValue: "Two Wheeler",
      formControl: form.control,
      validationSchema: InsuranceFormSchema,
    },
  ]);

  function onSubmit(data: z.infer<typeof InsuranceFormSchema>) {
    setOpenPremiumPlansDialog(true);
    console.log(data);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-y-3 gap-x-8"
        >
          {formFields?.map((formField) => {
            if (formField.type === "select" && formField.selectFieldOptions) {
              return (
                <SelectField
                  key={formField.name}
                  {...formField}
                  error={!!errors[formField.name as keyof typeof errors]}
                />
              )
            }
            else if (formField.type === "input") {
              return (
                <InputField
                  key={formField.name}
                  {...formField}
                  error={!!errors[formField.name as keyof typeof errors]}
                />
              );
            }
            else if (formField.type === "date") {
              return (
                <DateSelectField
                  key={formField.name}
                  {...formField}
                  error={!!errors[formField.name as keyof typeof errors]}
                />
              );
            }
            else {
              return (
                <RadioGroupField
                  key={formField.name}
                  {...formField}
                  error={!!errors[formField.name as keyof typeof errors]}
                />
              );
            }
          })}
          <FormDescription className="col-span-2">
            *Mandatory fields
          </FormDescription>
          <Button type="submit" className="col-span-2">
            Get Premium Plans
          </Button>
        </form>
      </Form>
      {openPremiumPlansDialog && (
        <PremiumPlansDialog
          open={openPremiumPlansDialog}
          onClose={() => setOpenPremiumPlansDialog(false)}
        />
      )}
    </>
  );
}
