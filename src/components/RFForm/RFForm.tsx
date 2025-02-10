import RFRow, { RFRowProps } from "../RFRow/RFRow";
import RFSubmit, { RFSubmitProps } from "../RFSubmit/RFSubmit";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

type FormProps = {
  form: RFRowProps[];
  onSubmit: SubmitHandler<FieldValues>;
  onError?: SubmitErrorHandler<FieldValues>;
  submit?: RFSubmitProps;
};

export default function RFForm({ form, submit, onSubmit, onError }: FormProps) {
  const methods = useForm({ defaultValues: {} });
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
