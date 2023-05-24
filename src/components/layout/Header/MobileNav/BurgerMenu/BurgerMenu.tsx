import { FC } from "react"
import "./styles.scss"

type BurgerMenuProps = {
  isActive: boolean,
  onClick: (...args: unknown[]) => unknown,
  className?: string
}

const BurgerMenu: FC<BurgerMenuProps> = ({
  isActive,
  onClick,
  className = ''
}) => (
  <button
    className={`hamburger hamburger--collapse ${isActive ? "is-active" : ""} ${className}`}
    type="button"
    onClick={onClick}
  >
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
)

export default BurgerMenu