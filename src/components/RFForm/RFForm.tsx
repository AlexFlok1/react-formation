import RFRow, { RFRowProps } from "../RFRow/RFRow"
import RFSubmit, { RFSubmitProps } from "../RFSubmit/RFSubmit"
import {useForm} from "react-hook-form"

type FormProps = {
    form: RFRowProps[]
    onSubmit: () => void
    submit?: RFSubmitProps
}

export default function RFForm({form, submit, onSubmit}: FormProps){

    const {handleSubmit} = useForm({defaultValues: {}})

    return <form onSubmit={handleSubmit(onSubmit)}>
        {form.map(rowProps => <RFRow {...rowProps} />)}
        {(form.length > 0 || submit?.label) && <RFSubmit {...submit} />}
        </form>
}