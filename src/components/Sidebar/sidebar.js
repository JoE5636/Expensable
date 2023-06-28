import React from "react";
import { useAuth } from "../../context/auth-context";

import * as S from "./styles";
import { ReactComponent as Logo } from "../../assets/expensable-logo.svg";
import SidebarNav from "../SidebarNav";

function ProfileShower() {
  const { user, logout } = useAuth();

  function handleLogout() {
    logout().catch((e) => console.log(e));
  }

  return (
    <div>
      <S.Name>
        {user["first_name"]} {user["last_name"]}
      </S.Name>

      <S.Button onClick={handleLogout}>Logout</S.Button>
    </div>
  );
}

function Sidebar() {
  return (
    <S.Wrapper>
      <div>
        <Logo />
        <SidebarNav />
      </div>
      <ProfileShower></ProfileShower>
    </S.Wrapper>
  );
}

export default Sidebar;
