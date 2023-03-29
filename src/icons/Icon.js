import s from "./Icon.module.scss";

function Icon({ children }) {
  return <div className={s.wrapper}>{children}</div>;
}

export default Icon;
