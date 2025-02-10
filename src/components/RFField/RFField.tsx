import { Field, Input, Label, Select } from "@headlessui/react";
import { RegisterOptions, useFormContext } from "react-hook-form";

type Option = {
  value: string;
  label?: string;
};

type FieldValidation = Pick<RegisterOptions, "required" | "min" | "max" | "validate">;

export type RFFieldProps = {
  label: string;
  name: string;
  validation?: FieldValidation;
} & (
  | {
      variant: "input";
      options?: never;
    }
  | {
      variant: "select";
      options: Option[];
    }
);

export default function RFField({ variant, label, name, options, validation = { required: false } }: RFFieldProps) {
  const { register } = useFormContext();

  function renderLabel() {
    return <Label>{label}</Label>;
  }

  if (variant === "select") {
    return (
      <Field className="flex flex-col items-start">
        {renderLabel()}
        <Select className="rounded w-full border h-[26px]" {...register(name, { ...(validation ?? {}) })}>
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label ?? option.value}
            </option>
          ))}
        </Select>
      </Field>
    );
  }

  return (
    <Field className="flex flex-col items-start">
      {renderLabel()}
      <Input {...register(name, { ...(validation ?? {}) })} className="rounded w-full border h-[26px]" type="text" />
    </Field>
  );
}
