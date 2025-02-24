import { Textarea } from "@headlessui/react";
import type { RFFieldProps } from "../../../types/field";
import { useFormContext } from "react-hook-form";

type RFTextAreaProps = {
  defaultValue?: string;
  cols?: number;
  rows?: number;
} & RFFieldProps;

export default function RFTextArea({ name, rows = 3, cols, defaultValue, fieldClasses = [] }: RFTextAreaProps) {
  const { register } = useFormContext();

  return <Textarea defaultValue={defaultValue} {...register(name)} className={fieldClasses.join(" ")} rows={rows} cols={cols} />;
}
