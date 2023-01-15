import { StyledInput } from "./style";
import { FieldError, UseFormRegister } from "react-hook-form";

interface iInputProps {
  type: string;
  span: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldError | undefined;
}

export function Input({
  type,
  span,
  placeholder,
  name,
  register,
  errors,
}: iInputProps) {
  return (
    <StyledInput>
      <input type={type} placeholder={placeholder} {...register(name)} />
      <span>{span}</span>
      {errors && <p>* {errors.message}</p>}
    </StyledInput>
  );
}
