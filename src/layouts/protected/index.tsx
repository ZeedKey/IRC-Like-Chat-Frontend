import { useEffect } from "react";

type ProtectedProps = {
  children: React.ReactNode;
};

export const Protected: React.FC<ProtectedProps> = ({ children }) => {
  useEffect(() => console.log("rerender"), []);
  return <>{children}</>;
};
