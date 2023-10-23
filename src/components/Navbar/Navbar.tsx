import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Outlet, useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { BodyDiv, MainDiv, NavDiv, NavHr } from "./styles";

export default function Navbar() {
  const { pathname } = useLocation();
  const firstRoute = pathname.split("/")[1];
  return (
    <MainDiv>
      <NavDiv>
        <NavItem
          current={firstRoute === ""}
          path={"/"}
          Icon={HomeIcon}
          text="Home"
        />
        <NavHr />
        <NavItem
          current={firstRoute === "venda"}
          path={"/venda"}
          Icon={AttachMoneyIcon}
          text="Venda"
        />
        <NavHr />

        <NavItem
          current={firstRoute === "compra"}
          path={"/compra"}
          Icon={ShoppingCartIcon}
          text="Compra"
        />
        <NavHr />

        <NavHr />
      </NavDiv>
      <BodyDiv>
        <Outlet />
      </BodyDiv>
    </MainDiv>
  );
}
