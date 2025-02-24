import { Select } from "@headlessui/react";
import { useFormContext } from "react-hook-form";
import type { Option, RFFieldProps } from "../../../types/field";

type RFSelectProps = {
  defaultValue?: string;
  options?: Option[];
} & RFFieldProps;

export default function RFSelect({ name, defaultValue, options = [] }: RFSelectProps) {
  const { register } = useFormContext();

  return (
    <Select defaultValue={defaultValue} className="rounded w-full border h-[26px]" {...register(name)}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label ?? option.value}
        </option>
      ))}
    </Select>
  );
}
