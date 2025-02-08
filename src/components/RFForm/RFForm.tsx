import RFRow, { RFRowProps } from "../RFRow/RFRow"
import RFSubmit, { RFSubmitProps } from "../RFSubmit/RFSubmit"
import {FieldValues, FormProvider, SubmitHandler, useForm} from "react-hook-form"

type FormProps = {
    form: RFRowProps[]
    onSubmit: SubmitHandler<FieldValues>
    submit?: RFSubmitProps
}

export default function RFForm({form, submit, onSubmit}: FormProps){

    const methods = useForm({defaultValues: {}});
    const {handleSubmit} = methods

    return <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
        {form.map((rowProps, index) => <RFRow key={index} {...rowProps} />)}
        {form.length > 0 && <RFSubmit {...submit} />}
        </form>
    </FormProvider>
}