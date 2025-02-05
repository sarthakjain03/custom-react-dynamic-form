import { z } from "zod";

export const InsuranceFormSchema = z.object({
  registrationState: z.string({
    required_error: "Please select a Registration State",
  }),
  manufacturer: z.string({
    required_error: "Please select a Manufacturer",
  }),
  model: z.string({
    required_error: "Please select a Model",
  }),
  fuelType: z.string({
    required_error: "Please select a Fuel Type",
  }),
  makeYear: z.number({
    required_error: "Please select a Make Year",
  }),
  rtoName: z.string({
    required_error: "Please select an RTO Name",
  }),
  idv: z.string({
    required_error: "Please enter the IDV",
  }),
  longTermCoverPeriod: z.string({
    required_error: "Please select a Long Term Cover Period",
  }),
  makeMonth: z.string({
    required_error: "Please select a Make Month",
  }),
  dateOfRegistration: z.date({
    required_error: "Please select a date of registration",
  }),
  vehicleClass: z.enum(["Two Wheeler", "Private Car"], {
    required_error: "You need to select a Vehicle class",
  }),
});

