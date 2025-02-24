import { Description, Field, Label } from "@headlessui/react";
import { useFormContext } from "react-hook-form";
import type { FieldSetup } from "../../types/field";
import RFSelect from "./components/RFSelect";
import RFTextField from "./components/RFTextField";
import RFTextArea from "./components/RFTextArea";
import RFCheckbox from "./components/RFCheckbox";

export type RFFieldProps = {
  label: string;
  name: string;
} & FieldSetup;

export default function RFField({ variant, label, name, allowResize, ...rest }: RFFieldProps) {
  const {
    formState: { errors },
  } = useFormContext();

  const fieldClasses = ["rounded", "w-full", "border", "outline-none"];
  const fieldWrapperClasses = ["flex"];

  if (variant !== "textarea") {
    fieldClasses.push("h-[26px]");
  }

  if (!allowResize && variant === "textarea") {
    fieldClasses.push("resize-none");
  }

  if (errors[name]) {
    fieldClasses.push(...["border-red-400"]);
  }

  if (variant === "checkbox") {
    fieldWrapperClasses.push(...["flex-row", "justify-center", "items-center", "gap-2"]);
  }

  if (variant !== "checkbox") {
    fieldWrapperClasses.push(...["flex-col", "items-start"]);
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

  function renderField() {
    switch (variant) {
      case "input":
        return <RFTextField name={name} fieldClasses={fieldClasses} {...rest} />;
      case "textarea":
        return <RFTextArea name={name} fieldClasses={fieldClasses} {...rest} />;
      case "select":
        return <RFSelect name={name} fieldClasses={fieldClasses} {...rest} />;
      case "checkbox":
        return <RFCheckbox name={name} {...rest} />;
    }
  }

  return (
    <Field className={fieldWrapperClasses.join(" ")}>
      {renderLabel()}
      {renderField()}
      {errors[name] && renderErrorMsg()}
    </Field>
  );
}
