import { Description, Field, Input, Label, Select } from "@headlessui/react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import defaultErrorMessages from "../../services/defaultErrorMessages";

type Option = {
  value: string;
  label?: string;
};

type FieldValidation = Pick<RegisterOptions, "required" | "min" | "max" | "validate">;
type ErrorSettings = {
  message?: string;
  showOnChange?: boolean;
};

export type RFFieldProps = {
  label: string;
  name: string;
  validation?: FieldValidation;
  errorSettings?: ErrorSettings;
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

export default function RFField({
  variant,
  label,
  name,
  options,
  validation = { required: false },
  errorSettings = { showOnChange: true },
}: RFFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldClasses = ["rounded", "w-full", "border", "h-[26px]", "outline-none"];

  if (errorSettings.showOnChange && errors[name]) {
    fieldClasses.push(...["border-red-400"]);
  }

  function renderLabel() {
    const classes = [];
    if (errorSettings.showOnChange && errors[name]) {
      classes.push("text-red-400");
    }

    return <Label className={classes.join(" ")}>{label}</Label>;
  }

  function renderErrorMsg() {
    const classes = ["text-xs"];
    if (errorSettings.showOnChange && errors[name]) {
      classes.push("text-red-400");
    }
    return <Description className={classes.join(" ")}>{defaultErrorMessages(errors[name]?.type, name)}</Description>;
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
      <Input {...register(name, { ...(validation ?? {}) })} className={fieldClasses.join(" ")} type="text" />
      {errorSettings.showOnChange && errors[name] && renderErrorMsg()}
    </Field>
  );
}
