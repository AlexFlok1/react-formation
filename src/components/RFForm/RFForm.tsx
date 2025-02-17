import RFRow, { RFRowProps } from "../RFRow/RFRow";
import RFSubmit, { RFSubmitProps } from "../RFSubmit/RFSubmit";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { generateRowSchema } from "../../services/generateSchema";
import { ElementType } from "react";

type Slots = Partial<Record<"input" | "textarea" | "select" | "checkbox", ElementType>>;

type FormProps = {
  form: RFRowProps[];
  slots?: Slots;
  onSubmit: SubmitHandler<FieldValues>;
  onError?: SubmitErrorHandler<FieldValues>;
  submit?: RFSubmitProps;
};

export default function RFForm({ form, submit, onSubmit, onError }: FormProps) {
  const generatedSchema = yup.object().shape({
    ...form.map((row) => generateRowSchema(row)).reduce((newObj, el) => ({ ...newObj, ...el }), {}),
  });

  const methods = useForm({ defaultValues: {}, resolver: yupResolver(generatedSchema) });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {form.map((rowProps, index) => (
          <RFRow key={index} {...rowProps} />
        ))}
        {form.length > 0 && <RFSubmit {...submit} />}
      </form>
    </FormProvider>
  );
}
