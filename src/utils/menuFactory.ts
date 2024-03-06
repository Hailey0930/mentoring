import { ILoginState } from "../types/Login.types";
import { IMenu } from "../types/Menu.types";

export class MenuFactory {
  baseMenu = [{ label: "대시보드", path: "/", isExternal: false }];

  public createMenuList(login: ILoginState): IMenu[] {
    return [];
  }

  public createVideoMenu(login: ILoginState): IMenu[] {
    const videoMenu = [];

    if (login.camUsable === "1" || login.camStatus === "1") {
      videoMenu.push({
        label: "이미지 조회",
        path: "/image",
        isExternal: false,
      });
    }

    if (login.camUsable === "2") {
      videoMenu.push({
        label: "영상추적",
        path: "/vass",
        isExternal: false,
      });
    }

    return videoMenu;
  }

  public createAdminMenu(login: ILoginState): IMenu[] {
    const adminMenu = [];

    if (login.isAdmin) {
      adminMenu.push({
        label: "Admin",
        path: "/admin",
        isExternal: false,
      });
    }

    return adminMenu;
  }
}

export class LogenMenuFactory extends MenuFactory {
  public createMenuList(login: ILoginState): IMenu[] {
    const additionalMenus = this.createVideoMenu(login);
    const adminMenu = this.createAdminMenu(login);

    const editMenu = {
      label: "업무수정",
      path: "/edit",
      isExternal: false,
    };

    const deleteMenu = {
      label: "업무삭제",
      path: "/delete-todo",
      isExternal: false,
    };

    // NOTE 여기서 camUsable이 침범하는데... 이게 맞을까?
    const gigaeyes = [];
    if (login.camUsable === "2") {
      gigaeyes.push({
        label: "gigaeyes",
        path: "https://gigaeyes.co.kr/memberN/loginForm",
        isExternal: true,
      });
    }

    return [
      ...this.baseMenu,
      ...additionalMenus,
      editMenu,
      deleteMenu,
      ...adminMenu,
      ...gigaeyes,
    ];
  }
}

export class LotteMenuFactory extends MenuFactory {
  public createMenuList(login: ILoginState): IMenu[] {
    const additionalMenus = this.createVideoMenu(login);
    const adminMenu = this.createAdminMenu(login);

    const editMenu = {
      label: "업무수정",
      path: "/edit",
      isExternal: false,
    };

    const addMenu = {
      label: "업무추가",
      path: "/add-todo",
      isExternal: false,
    };

    return [
      ...this.baseMenu,
      ...additionalMenus,
      editMenu,
      addMenu,
      ...adminMenu,
    ];
  }
}

const getMenuFactory = (company: string) => {
  switch (company) {
    case "LOGEN":
      return new LogenMenuFactory();
    case "LOTTE":
      return new LotteMenuFactory();
    default:
      return new MenuFactory();
  }
};

export const getMenuList = (login: ILoginState) => {
  const factory = getMenuFactory(login.company);

  return factory.createMenuList(login);
};
