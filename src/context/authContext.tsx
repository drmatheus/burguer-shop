import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext({} as IValueAuthContext);

interface IAuthContext {
  children: React.ReactNode;
}

interface IValueAuthContext {
  isLoading: boolean;
  menu: IMenu[];
  filterMenu: string;
  setFilterMenu: Dispatch<SetStateAction<string>>;
  filteredMenu: IMenu[];
}

export interface IMenu {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantity?: number;
}

export interface IUser {
  email: string;
  password: string;
  name: string;
  passwordConfirmation: string;
  id: number;
}

interface IToken {
  token: string;
}

export function AuthProvider({ children }: IAuthContext) {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState([] as IMenu[]);
  const [, setUserData] = useState({} as IUser);
  const [filterMenu, setFilterMenu] = useState("Todos");
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
    getMenu();
  }, []);

  function filter() {
    if (filterMenu === "Todos" || filterMenu.trim().length >= 0) {
      return menu;
    } else {
      const newMenu = menu.filter((e) => {
        return (
          e.name.toLowerCase().search(filterMenu.toLowerCase()) >= 0 ||
          e.category.toLowerCase().search(filterMenu.toLowerCase()) >= 0
        );
      });

      return newMenu;
    }
  }

  const filteredMenu = filter();

  const token = JSON.parse(localStorage.getItem("@BKTOKEN")!);
  const userId = localStorage.getItem("@BKUSERID");

  if (!token) {
    setIsLoading(false);
  }

  async function getUserData() {
    try {
      const { data } = await api.get<IUser>(`users/${userId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setUserData(data);
      return data;
    } catch (error) {
      console.log(error);
      navigate("/login");
    } finally {
      setIsLoading(false);
    }
  }

  async function getMenu() {
    try {
      const { data } = await api.get<IMenu[]>("products", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setMenu(data);
      return data;
    } catch (error) {
      console.log(error);
      navigate("/login");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{ menu, isLoading, filterMenu, setFilterMenu, filteredMenu }}
    >
      {children}
    </AuthContext.Provider>
  );
}
