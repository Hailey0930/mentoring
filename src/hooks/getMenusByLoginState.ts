import { ILoginState } from "../types/Login.types";

const headerItems = [
  {
    label: "대시보드",
    path: "/",
    shouldRender: (login: ILoginState) => true,
    isExternal: false,
  },
  {
    label: "송장조회",
    path: "/work",
    shouldRender: (login: ILoginState) => true,
    isExternal: false,
  },
  {
    label: "이미지 조회",
    path: "/image",
    shouldRender: (login: ILoginState) =>
      login.camUsable === "1" || login.camStatus === "1",
    isExternal: false,
  },
  {
    label: "영상추적",
    path: "/vass",
    shouldRender: (login: ILoginState) => login.camUsable === "2",
    isExternal: false,
  },
  {
    label: "업무수정",
    path: "/edit",
    shouldRender: (login: ILoginState) =>
      login.company === "LOGEN" || login.company === "LOTTE",
    isExternal: false,
  },
  {
    label: "Admin",
    path: "/admin",
    shouldRender: (login: ILoginState) => login.isAdmin,
    isExternal: false,
  },
  {
    label: "gigaeyes",
    path: "https://gigaeyes.co.kr/memberN/loginForm",
    shouldRender: (login: ILoginState) =>
      login.company === "LOGEN" && login.camUsable === "2",
    isExternal: true,
    imgSrc: "abc",
  },
];

export const getMenusByLoginState = (login: ILoginState) => {
  return headerItems.filter((menu) => menu.shouldRender(login));
};
