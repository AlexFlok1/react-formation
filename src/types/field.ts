type Option = {
  value: string;
  label?: string;
};

type StringValidation = {
  required?: boolean;
  min?: number;
  max?: number;
  matches?: RegExp;
};

type FieldVariant = "input" | "textarea" | "select" | "number" | "date" | "switch" | "checkbox";
type FieldSetup =
  | {
      variant: "input";
      validation?: StringValidation;
      rows?: never;
      cols?: never;
      allowResize?: never;
      options?: never;
    }
  | {
      variant: "textarea";
      validation?: StringValidation;
      rows?: number;
      cols?: number;
      allowResize?: boolean;
      options?: never;
    }
  | {
      variant: "select";
      validation?: StringValidation;
      rows?: never;
      cols?: never;
      allowResize?: never;
      options: Option[];
    };

export type { FieldVariant, FieldSetup };
