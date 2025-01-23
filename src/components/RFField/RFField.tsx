import { Field, Input, Label, Select } from "@headlessui/react"
import type {_internal_ComponentInput, _internal_ComponentSelect} from "@headlessui/react"

type Option = {
    value: string;
    label: string;
}

export type RFFieldProps = {
    label: string
} & ({
    variant: "input";
    props?: _internal_ComponentInput;
    options?: never;
} | {
    variant: "select";
    props?: _internal_ComponentSelect
    options: Option[]
})

export default function RFField({variant, label, props, options}: RFFieldProps){
   

    function renderLabel(){
        return <Label>{label}</Label>
    }


    if(variant === "select"){
        return <Field className="flex items-start items-start">
               {renderLabel()}
               <Select {...props}>
                {options.map(option => <option value={option.value} key={option.value}>{option.label}</option>)}
               </Select>
               </Field>
    }

    return <Field className="flex flex-col items-start">
       {renderLabel()}
       <Input className="rounded w-full border" type="text" {...props} />
       </Field>

}