import { Button } from "@headlessui/react";

export type RFSubmitProps = {
  label?: string;
};

export default function RFSubmit({ label = "Submit" }: RFSubmitProps) {
  return (
    <Button className="mt-2" type="submit">
      {label}
    </Button>
  );
}
