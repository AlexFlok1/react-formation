import * as yup from "yup";
import type { FieldVariant } from "../types/field";
import type { RFRowProps } from "../components/RFRow/RFRow";

function generateRowSchema(row: RFRowProps) {
  if (row.fieldsGroupName) {
    return {
      [row.fieldsGroupName]: yup.object().shape({
        ...row.fields
          .map((field) => ({ [field.name]: generateFieldSchema(field.variant) }))
          .reduce((newObj, el) => ({ ...newObj, ...el }), {}),
      }),
    };
  }

  return row.fields
    .map((field) => ({ [field.name]: generateFieldSchema(field.variant) }))
    .reduce((newObj, el) => ({ ...newObj, ...el }), {});
}

function generateFieldSchema(variant: FieldVariant): yup.Schema {
  let schema: yup.Schema;

  switch (variant) {
    case "input":
    case "textarea":
    case "select":
      schema = yup.string();
      break;
    case "number":
      schema = yup.number();
      break;
    case "date":
      schema = yup.date();
      break;
    case "switch":
    case "checkbox":
      schema = yup.boolean();
      break;
  }

  return schema;
}

export { generateFieldSchema, generateRowSchema };
