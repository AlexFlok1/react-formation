import { Description, Field, Input, Label, Select, Textarea } from "@headlessui/react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import defaultErrorMessages from "../../services/defaultErrorMessages";

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
      rows?: never;
      cols?: never;
      allowResize?: never;
      options?: never;
    }
  | {
      variant: "textarea";
      rows?: number;
      cols?: number;
      allowResize?: boolean;
      options?: never;
    }
  | {
      variant: "select";
      rows?: never;
      cols?: never;
      allowResize?: never;
      options: Option[];
    }
);

export default function RFField({
  variant,
  label,
  name,
  options,
  validation = { required: false },
  rows = 3,
  cols,
  allowResize = true,
}: RFFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldClasses = ["rounded", "w-full", "border", "outline-none"];

  if (variant !== "textarea") {
    fieldClasses.push("h-[26px]");
  }

  if (!allowResize && variant === "textarea") {
    fieldClasses.push("resize-none");
  }

  if (errors[name]) {
    fieldClasses.push(...["border-red-400"]);
  }

  function renderLabel() {
    const classes = [];
    if (errors[name]) {
      classes.push("text-red-400");
    }

    return <Label className={classes.join(" ")}>{label}</Label>;
  }

  function renderErrorMsg() {
    const classes = ["text-xs"];
    if (errors[name]) {
      classes.push("text-red-400");
    }
    return (
      <Description className={classes.join(" ")}>
        {defaultErrorMessages(String(errors[name]?.type ?? "custom"), name)}
      </Description>
    );
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
        {errors[name] && renderErrorMsg()}
      </Field>
    );
  }

  return (
    <Field className="flex flex-col items-start">
      {renderLabel()}
      {variant === "input" && (
        <Input {...register(name, { ...(validation ?? {}) })} className={fieldClasses.join(" ")} type="text" />
      )}
      {variant === "textarea" && (
        <Textarea
          {...register(name, { ...(validation ?? {}) })}
          className={fieldClasses.join(" ")}
          rows={rows}
          cols={cols}
        />
      )}
      {errors[name] && renderErrorMsg()}
    </Field>
  );
}
