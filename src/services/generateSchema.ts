import * as yup from "yup";
import type { FieldVariant, GeneralValidation, StringValidation } from "../types/field";
import type { RFRowProps } from "../components/RFRow/RFRow";

function generateRowSchema(row: RFRowProps) {
  if (row.fieldsGroupName) {
    return {
      [row.fieldsGroupName]: yup.object().shape({
        ...row.fields.map((field) => ({ [field.name]: generateFieldSchema(field.variant, field.validation) })).reduce((newObj, el) => ({ ...newObj, ...el }), {}),
      }),
    };
  }

  return row.fields.map((field) => ({ [field.name]: generateFieldSchema(field.variant, field.validation) })).reduce((newObj, el) => ({ ...newObj, ...el }), {});
}

function addedValidationRulesToStringSchema<T>(schema: yup.Schema<T>, validation: StringValidation = {}) {
  if (validation.required) {
    schema = schema.required("This field is required");
  }
  if (validation.min && schema instanceof yup.StringSchema) {
    schema = schema.min(validation.min, `Min characters: ${validation.min}`);
  }
  if (validation.max && schema instanceof yup.StringSchema) {
    schema = schema.max(validation.max, `Max characters: ${validation.max}`);
  }
  if (validation.matches && schema instanceof yup.StringSchema) {
    schema = schema.matches(validation.matches, `Does not match: ${validation.matches}`);
  }

  return schema;
}

function addedValidationRulesToBoolSchema<T>(schema: yup.Schema<T>, validation: GeneralValidation = {}) {
  if (validation.required && schema instanceof yup.BooleanSchema) {
    schema = schema.required("").oneOf([true], "");
  }
  return schema;
}

function generateFieldSchema(variant: FieldVariant, validation: StringValidation = {}): yup.Schema {
  let schema: yup.Schema;
  console.log(variant);
  switch (variant) {
    case "input":
    case "textarea":
    case "select":
      schema = yup.string();
      schema = addedValidationRulesToStringSchema<string>(schema, validation);
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
      schema = addedValidationRulesToBoolSchema<boolean>(schema, validation);
      break;
  }

  return schema;
}

export { generateFieldSchema, generateRowSchema };
