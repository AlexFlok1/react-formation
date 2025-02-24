import { Input } from "@headlessui/react";
import { useFormContext } from "react-hook-form";
import type { RFFieldProps } from "../../../types/field";

type RFTextFieldProps = {
  defaultValue?: string;
  fieldClasses?: string[];
} & RFFieldProps;

export default function RFTextField({ name, defaultValue, fieldClasses = [] }: RFTextFieldProps) {
  const { register } = useFormContext();

  return <Input defaultValue={defaultValue} {...register(name)} className={fieldClasses.join(" ")} type="text" />;
}
