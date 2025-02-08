import { Field, Input, Label, Select } from "@headlessui/react"
import type {_internal_ComponentInput, _internal_ComponentSelect} from "@headlessui/react"
import { useFormContext } from "react-hook-form";

type Option = {
    value: string;
    label?: string;
}

export type RFFieldProps = {
    label: string;
    name: string;
} & ({
    variant: "input";
    props?: Omit<_internal_ComponentInput, "name">;
    options?: never;
} | {
    variant: "select";
    props?: Omit<_internal_ComponentSelect, "name">;
    options: Option[]
})

export default function RFField({variant, label, name, props, options}: RFFieldProps){
   
    const {register} = useFormContext()

    function renderLabel(){
        return <Label>{label}</Label>
    }


    if(variant === "select"){
        return <Field className="flex items-start items-start">
               {renderLabel()}
               <Select 
                {...register(name)}
               {...props}>
                {options.map(option => <option value={option.value} key={option.value}>{option.label ?? option.value}</option>)}
               </Select>
               </Field>
    }

    return <Field className="">
       {renderLabel()}
       <Input 
       {...register(name)}
       className="rounded w-full border" 
       type="text" {...props} />
       </Field>

}