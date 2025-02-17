import { ElementType } from "react";
import RFField, { RFFieldProps } from "../RFField/RFField";
import type { NumberRange } from "../../types/generic";
import { getGapSize, getGridSize } from "./logic";

export type RFRowProps = {
  size?: NumberRange<7>;
  gap?: NumberRange<7>;
  className?: string;
  customComponent?: ElementType;
  fieldsGroupName?: string;
  fields: RFFieldProps[];
};

export default function RFRow({ size = 3, gap = 3, ...rest }: RFRowProps) {
  const classes = ["grid", getGridSize(size), getGapSize(gap)];

  function renderFields() {
    return rest.fields.map((field, index) => (
      <RFField
        key={index}
        {...field}
        name={rest.fieldsGroupName ? `${rest.fieldsGroupName}.${field.name}` : field.name}
      />
    ));
  }

  if (rest.customComponent) {
    const CustomRowComponent = rest.customComponent;
    return <CustomRowComponent>{renderFields()}</CustomRowComponent>;
  }

  return <div className={`${classes.join(" ")} ${rest.className ?? ""}`}>{renderFields()}</div>;
}
