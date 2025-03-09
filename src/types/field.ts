type Option = {
  value: string;
  label?: string;
};

type GeneralValidation = {
  required?: boolean;
};

type StringValidation = {
  min?: number;
  max?: number;
  matches?: RegExp;
} & GeneralValidation;

type FieldVariant = "input" | "textarea" | "select" | "number" | "date" | "switch" | "checkbox" | "switch";

type RFFieldProps = {
  name: string;
  fieldClasses?: string[];
};

type FieldSetup =
  | {
      variant: "input";
      defaultValue?: string;
      validation?: StringValidation;
      rows?: never;
      cols?: never;
      allowResize?: never;
      options?: never;
    }
  | {
      variant: "textarea";
      defaultValue?: string;
      checked?: never;
      validation?: StringValidation;
      rows?: number;
      cols?: number;
      allowResize?: boolean;
      options?: never;
    }
  | {
      variant: "select";
      defaultValue?: string;
      checked?: never;
      validation?: StringValidation;
      rows?: never;
      cols?: never;
      allowResize?: never;
      options: Option[];
    }
  | {
      variant: "checkbox";
      validation?: GeneralValidation;
      defaultValue?: boolean;
      checked?: never;
      rows?: never;
      cols?: never;
      allowResize?: never;
      options?: never;
    }
  | {
      variant: "switch";
      validation?: GeneralValidation;
      checked?: boolean;
      defaultValue?: never;
      rows?: never;
      cols?: never;
      allowResize?: never;
      options?: never;
    };

export type { FieldVariant, FieldSetup, StringValidation, Option, RFFieldProps, GeneralValidation };
