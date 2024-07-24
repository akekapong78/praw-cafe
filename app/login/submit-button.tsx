"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  pendingText?: string;
};

export function SubmitButton({ children, pendingText, ...props }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <button {...props} className="btn text-lg bg-customOrange text-white border-0 hover:bg-customOrangeHover" type="submit" aria-disabled={pending}>
      {isPending ? pendingText : children}
    </button>
  );
}
