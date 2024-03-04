import { ReactNode } from "react";
import Header from "./Header";

type ILayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
