import { Logo } from "../logo/logo";
import { StyledLanding } from "./style";
import ballGrid from "../../assets/img/ballGrid.svg";

export function Landing() {
  return (
    <StyledLanding>
      <Logo />
      <section>
        <div></div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os <b>melhores</b>{" "}
          ingredientes.
        </p>
      </section>
      <img src={ballGrid} alt="" />
    </StyledLanding>
  );
}
