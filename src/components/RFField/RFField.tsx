import { Description, Field, Input, Label, Select, Textarea } from "@headlessui/react";
import { useFormContext } from "react-hook-form";
import type { FieldSetup } from "../../types/field";

export type RFFieldProps = {
  label: string;
  name: string;
} & FieldSetup;

export default function RFField({ variant, label, name, options, rows = 3, cols, allowResize = true }: RFFieldProps) {
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
    return <Description className={classes.join(" ")}>{String(errors?.[name]?.message ?? "")}</Description>;
  }

  if (variant === "select") {
    return (
      <Field className="flex flex-col items-start">
        {renderLabel()}
        <Select className="rounded w-full border h-[26px]" {...register(name)}>
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
      {variant === "input" && <Input {...register(name)} className={fieldClasses.join(" ")} type="text" />}
      {variant === "textarea" && (
        <Textarea {...register(name)} className={fieldClasses.join(" ")} rows={rows} cols={cols} />
      )}
      {errors[name] && renderErrorMsg()}
    </Field>
  );
}
