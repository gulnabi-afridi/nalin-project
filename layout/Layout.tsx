import React, { ReactNode } from "react";
import Navibar from "./Navibar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navibar />
      {children}
    </>
  );
};

export default Layout;
