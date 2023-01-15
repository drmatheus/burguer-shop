import { Input } from "../../components/input/input";
import { StyledForm } from "../../styles/form";
import { LoginStyled } from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { StyledButton } from "../../styles/buttons";
import { Link } from "react-router-dom";
import { Landing } from "../../components/landing";

export interface ILogin {
  email: string;
  password: string;
}

export function Login() {
  const loginSchena = yup.object().shape({
    email: yup.string().required("Informe seu email").email("Email invalido"),
    password: yup.string().required("Informe sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    mode: "onBlur",
    resolver: yupResolver(loginSchena),
  });

  const { handleLogin } = useContext(UserContext);

  return (
    <LoginStyled>
      <Landing />
      <StyledForm onSubmit={handleSubmit(handleLogin)}>
        <div>
          <h2>Login</h2>
        </div>

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

        <StyledButton type="submit">Logar</StyledButton>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Link to="/register">Cadastrar</Link>
      </StyledForm>
    </LoginStyled>
  );
}
