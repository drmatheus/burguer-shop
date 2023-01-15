import { createContext } from "react";
import { api } from "../services/api";
import { ILogin } from "../pages/login";
import { IRegister } from "../pages/register";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IUserContext {
  children: React.ReactNode;
}

interface IValueUserContext {
  handleLogin(loginData: ILogin): Promise<ILoginResponse | undefined>;
  handleRegister(loginData: IRegister): Promise<ILoginResponse | undefined>;
}

interface ILoginResponse {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const UserContext = createContext({} as IValueUserContext);

export function UserProvider({ children }: IUserContext) {
  const navigate = useNavigate();

  async function handleLogin(
    loginData: ILogin
  ): Promise<ILoginResponse | undefined> {
    const login = toast.loading("Por favor, espere...", { autoClose: 3000 });

    try {
      const { data } = await api.post("login", loginData);
      localStorage.setItem("@BKTOKEN", JSON.stringify(data.accessToken));
      localStorage.setItem("@BKUSERID", JSON.stringify(data.user.id));
      navigate("/home");
      toast.update(login, {
        render: "Redirecionando...",
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });
      return data;
    } catch (error) {
      toast.update(login, {
        render: "Email e/ou senha incorreto(s).",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });

      console.log(error);
    }
  }

  async function handleRegister(
    loginData: ILogin
  ): Promise<ILoginResponse | undefined> {
    const register = toast.loading("Por favor, espere...", { autoClose: 3000 });

    try {
      const { data } = await api.post("users", loginData);
      localStorage.setItem("@BKTOKEN", JSON.stringify(data.accessToken));
      localStorage.setItem("@BKUSERID", JSON.stringify(data.user.id));

      toast.update(register, {
        render: "Cadastro realizado com sucesso!",
        type: "success",
        isLoading: false,
        autoClose: 2500,
      });
      setTimeout(() => {
        navigate("/home");
      }, 4000);
      return data;
    } catch (error) {
      toast.update(register, {
        render: "Email já cadastrado.",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
      console.log(error);
    }
  }

  return (
    <UserContext.Provider value={{ handleLogin, handleRegister }}>
      {children}
    </UserContext.Provider>
  );
}
