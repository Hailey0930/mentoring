import { useNavigate } from "react-router-dom";

export default function MenuItemFactory(
  label: string,
  path: string,
  isExternal: boolean,
  imgSrc?: string
) {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    if (isExternal) {
      window.open(`${path}`);
    } else {
      navigate(path);
    }
  };

  return (
    <div
      key={label}
      style={{ padding: "10px", cursor: "pointer" }}
      onClick={handleMenuClick}
    >
      {isExternal ? <img src={imgSrc} alt="이미지" /> : label}
    </div>
  );
}
