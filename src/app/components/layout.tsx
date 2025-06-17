import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <h1>hea</h1>
      <main>{children}</main>
    </div>
  );
}
