import {ElementType} from "react";
import RFField, { RFFieldProps } from "../RFField/RFField";

type NumberRange<N extends number, Result extends number[] = []> =
  Result['length'] extends N 
    ? Result[number] 
    : NumberRange<N, [...Result, Result['length']]>;

export type RFRowProps = {
    size?: NumberRange<13>
    gap?: NumberRange<9>,
    className?: string;
    customComponent?:ElementType,
    fields: RFFieldProps[]
}

export default function RFRow({size = 12, gap = 1, ...rest}: RFRowProps){

    function renderFields(){
        return rest.fields.map(field => <RFField {...field} />)
    }

    if(rest.customComponent){
       const CustomRowComponent = rest.customComponent;
       return <CustomRowComponent>{renderFields()}</CustomRowComponent>
    }

    return <div style={{display: "flex", gap: `${gap * 8}px`, width: `${size * 8.3}`, padding: '0.2%'}} className={rest.className} >
        {renderFields()}
    </div>
}