export default function defaultErrorMessages(variant: string, fieldName: string): string {
  switch (variant) {
    case "required":
      return `The field is required`;
    case "min":
      return `The field is failed 'max' rule`;
    case "max":
      return `The field failed 'min' rule`;
    default:
      return `Please make sure that ${fieldName} is validated`;
  }
}
