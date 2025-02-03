import RFRow, { RFRowProps } from "../RFRow/RFRow"
import RFSubmit, { RFSubmitProps } from "../RFSubmit/RFSubmit"

type FormProps = {
    form: RFRowProps[]
    submit?: RFSubmitProps
}

export default function RFForm({form, submit}: FormProps){
    return <>
        {form.map(rowProps => <RFRow {...rowProps} />)}
        {(form.length > 0 || submit?.label) && <RFSubmit {...submit} />}
    </>
}