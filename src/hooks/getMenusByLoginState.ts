import { ILoginState } from "../types/Login.types";

const renderingConditions = {
  always: () => true,
  camUsableOne: (login: ILoginState) => login.camUsable === "1",
  camUsableTwo: (login: ILoginState) => login.camUsable === "2",
  companyLogen: (login: ILoginState) => login.company === "LOGEN",
  companyLotte: (login: ILoginState) => login.company === "LOTTE",
  camStatusOne: (login: ILoginState) => login.camStatus === "1",
  isAdmin: (login: ILoginState) => login.isAdmin,
};

const headerItems = [
  {
    label: "대시보드",
    path: "/",
    shouldRender: renderingConditions.always,
    isExternal: false,
  },
  {
    label: "송장조회",
    path: "/work",
    shouldRender: renderingConditions.always,
    isExternal: false,
  },
  {
    label: "이미지 조회",
    path: "/image",
    shouldRender: (login: ILoginState) =>
      renderingConditions.camUsableOne(login) ||
      renderingConditions.camStatusOne(login),
    isExternal: false,
  },
  {
    label: "영상추적",
    path: "/vass",
    shouldRender: (login: ILoginState) =>
      renderingConditions.camUsableTwo(login),
    isExternal: false,
  },
  {
    label: "업무수정",
    path: "/edit",
    shouldRender: (login: ILoginState) =>
      renderingConditions.companyLogen(login) ||
      renderingConditions.companyLotte(login),
    isExternal: false,
  },
  {
    label: "업무추가",
    path: "/add-todo",
    shouldRender: (login: ILoginState) =>
      renderingConditions.companyLotte(login),
    isExternal: false,
  },
  {
    label: "업무삭제",
    path: "/delete-todo",
    shouldRender: (login: ILoginState) =>
      renderingConditions.companyLogen(login),
    isExternal: false,
  },
  {
    label: "Admin",
    path: "/admin",
    shouldRender: (login: ILoginState) => renderingConditions.isAdmin(login),
    isExternal: false,
  },
  {
    label: "gigaeyes",
    path: "https://gigaeyes.co.kr/memberN/loginForm",
    shouldRender: (login: ILoginState) =>
      renderingConditions.companyLogen(login) &&
      renderingConditions.camUsableTwo(login),
    isExternal: true,
    imgSrc: "abc",
  },
];

export const getMenusByLoginState = (login: ILoginState) => {
  return headerItems.filter((menu) => menu.shouldRender(login));
};
