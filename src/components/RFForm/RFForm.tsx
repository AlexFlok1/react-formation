import RFRow, { RFRowProps } from "../RFRow/RFRow"

type FormProps = {
    form: RFRowProps[]
}

export default function RFForm(props: FormProps){
    return <>
        {props.form.map(rowProps => <RFRow {...rowProps} />)}
    </>
}