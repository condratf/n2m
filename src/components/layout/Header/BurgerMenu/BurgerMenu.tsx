import { FC } from "react"
import "./styles.scss"

const BurgerMenu: FC<{ isActive: boolean, onClick: (...args: unknown[]) => unknown }> = ({
  isActive,
  onClick
}) => (
  <button
    className={`hamburger hamburger--collapse ${isActive ? "is-active" : ""}`}
    type="button"
    onClick={onClick}
  >
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
)

export default BurgerMenu