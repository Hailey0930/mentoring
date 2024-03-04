import { useNavigate } from "react-router-dom";
import { getMenusByLoginState } from "../hooks/getMenusByLoginState";

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

  const navigate = useNavigate();

  const handleMenuClick = (isExternal: boolean, path: string) => {
    if (isExternal) {
      window.open(`${path}`);
    } else {
      navigate(path);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {menuList.map((menu) => (
        <div
          id="menu-btn"
          key={menu.label}
          style={{ padding: "10px", cursor: "pointer" }}
          onClick={() => handleMenuClick(menu.isExternal, menu.path)}
        >
          {menu.isExternal ? (
            <img src={menu.imgSrc} alt="이미지" />
          ) : (
            menu.label
          )}
        </div>
      ))}
    </div>
  );
}
