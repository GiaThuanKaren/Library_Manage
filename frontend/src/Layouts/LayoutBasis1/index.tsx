import React from "react";
import { Header } from "src/components";
interface Props {
  children: any;
}
function LayoutBasis1({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <div>LayoutBasis1</div>
    </>
  );
}

export default LayoutBasis1;
