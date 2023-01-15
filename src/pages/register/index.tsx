import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Input } from "../../components/input/input";
import { Landing } from "../../components/landing";
import { UserContext } from "../../context/userContext";
import { StyledButton } from "../../styles/buttons";
import { StyledForm } from "../../styles/form";
import { RegisterStyled } from "./style";

export interface IRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export function Register() {
  const registerSchena = yup.object().shape({
    name: yup
      .string()
      .required("Informe seu nome")
      .min(8, "Insira pelo menos um nome e um sobrenome"),
    email: yup.string().required("Informe seu email").email("Email invalido"),
    password: yup
      .string()
      .required("Informe sua senha")
      .min(8, "Insira pelo menos 8 caracteres"),
    passwordConfirmation: yup
      .string()
      .required("Repita sua senha")
      .oneOf([yup.ref("password")], "A senhas deve ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IRegister>({
    mode: "onBlur",
    resolver: yupResolver(registerSchena),
  });

  const { handleRegister } = useContext(UserContext);

  return (
    <RegisterStyled>
      <StyledForm onSubmit={handleSubmit(handleRegister)}>
        <div>
          <h2>Cadastro</h2>
          <Link to={"/login"}>Voltar</Link>
        </div>

        <Input
          type="text"
          placeholder="Nome"
          span="Nome"
          name="name"
          register={register}
          errors={errors.name}
        />
        <Input
          type="email"
          placeholder="Email"
          span="Email"
          name="email"
          register={register}
          errors={errors.email}
        />
        <Input
          type="password"
          placeholder="Senha"
          span="Senha"
          name="password"
          register={register}
          errors={errors.password}
        />
        <Input
          type="password"
          placeholder="Confirmar Senha"
          span="Confirmar Senha"
          name="passwordConfirmation"
          register={register}
          errors={errors.passwordConfirmation}
        />

        <StyledButton type="submit">Cadastrar</StyledButton>
      </StyledForm>
      <Landing />
    </RegisterStyled>
  );
}
