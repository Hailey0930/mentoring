import { ILoginState } from "./Login.types";

export interface IMenu {
  label: string;
  path: string;
  isExternal: boolean;
}

export interface IMenuFactory {
  createMenuList: (login: ILoginState) => IMenu[];
}
