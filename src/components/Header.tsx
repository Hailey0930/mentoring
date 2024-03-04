import { getMenusByLoginState } from "../hooks/getMenusByLoginState";
import MenuItemFactory from "../hooks/MenuItemFactory";

const state = {
  isLogin: true,
  isUserIdStored: true,
  company: "LOGEN",
  userId: "test",
  branchName: "test",
  branchCode: "test",
  localIP: "test",
  saId: "test",
  accountId: "test",
  camUsable: "2",
  isAdmin: true,
  camStatus: "1",
};

export default function Header() {
  const menuList = getMenusByLoginState(state);

  return (
    <div style={{ display: "flex" }}>
      {menuList.map(({ label, path, isExternal, imgSrc }) =>
        MenuItemFactory(label, path, isExternal, imgSrc)
      )}
    </div>
  );
}
