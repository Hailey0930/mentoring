import { useNavigate } from "react-router-dom";
import { getMenuList } from "../utils/menuFactory";

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
  isAdmin: false,
  camStatus: "1",
};

export default function Header() {
  const menuList = getMenuList(state);

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
      {menuList.map(({ label, path, isExternal }) => (
        <div
          key={label}
          style={{ padding: "10px", cursor: "pointer" }}
          onClick={() => handleMenuClick(isExternal, path)}
        >
          {isExternal ? <img src="" alt="이미지" /> : label}
        </div>
      ))}
    </div>
  );
}
