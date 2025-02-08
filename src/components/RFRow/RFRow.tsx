import {ElementType} from "react";
import RFField, { RFFieldProps } from "../RFField/RFField";

type NumberRange<N extends number, Result extends number[] = []> =
  Result['length'] extends N 
    ? Result[number] 
    : NumberRange<N, [...Result, Result['length']]>;

export type RFRowProps = {
    size?: NumberRange<7>
    gap?: NumberRange<12>,
    className?: string;
    customComponent?:ElementType,
    fields: RFFieldProps[]
}

export default function RFRow({size = 6, gap = 4, ...rest}: RFRowProps){

    const classes = ["grid", `grid-cols-${size}`, `gap-${gap}`]

    function renderFields(){
        return rest.fields.map((field, index) => <RFField key={index} {...field} />)
    }

    if(rest.customComponent){
       const CustomRowComponent = rest.customComponent;
       return <CustomRowComponent>{renderFields()}</CustomRowComponent>
    }

    return <div className={`${classes.join(" ")} ${rest.className ?? ""}`} >
        {renderFields()}
    </div>
}