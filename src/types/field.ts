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

type FieldVariant = "input" | "textarea" | "select" | "number" | "date" | "switch" | "checkbox";

type RFFieldProps = {
  name: string;
  fieldClasses?: string[];
};

type FieldSetup =
  | {
      variant: "input";
      defaultValie?: string;
      validation?: StringValidation;
      rows?: never;
      cols?: never;
      allowResize?: never;
      options?: never;
    }
  | {
      variant: "textarea";
      defaultValie?: string;
      validation?: StringValidation;
      rows?: number;
      cols?: number;
      allowResize?: boolean;
      options?: never;
    }
  | {
      variant: "select";
      defaultValie?: string;
      validation?: StringValidation;
      rows?: never;
      cols?: never;
      allowResize?: never;
      options: Option[];
    }
  | {
      variant: "checkbox";
      validation?: GeneralValidation;
      defaultValie?: boolean;
      rows?: never;
      cols?: never;
      allowResize?: never;
      options?: never;
    };

export type { FieldVariant, FieldSetup, StringValidation, Option, RFFieldProps };
