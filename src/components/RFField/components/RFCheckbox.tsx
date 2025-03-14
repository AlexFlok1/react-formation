import { Checkbox } from "@headlessui/react";
import type { RFFieldProps } from "../../../types/field";
import { useFormContext } from "react-hook-form";

export type RFCheckboxProps = { defaultValue?: boolean } & RFFieldProps;

export default function RFCheckbox({ name, defaultValue = false }: RFCheckboxProps) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const value = watch(name);

  console.log(errors[name]);

  return (
    <Checkbox
      {...register(name)}
      className={`${
        errors[name] ? "border-red-400" : "border"
      } group block size-4 border-1 rounded bg-white data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500`}
      defaultChecked={defaultValue}
      onChange={(checked: boolean) => {
        setValue(name, checked);
      }}
    >
      <svg className={`stroke-white ${value ? "opacity-100" : "opacity-0"}`} viewBox="0 0 14 14" fill="none">
        <path d="M3 8L6 11L11 3.5" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Checkbox>
  );
}
