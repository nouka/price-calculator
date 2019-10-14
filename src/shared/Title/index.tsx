import React from "react";
import { Link } from "react-router-dom";
import Style from "./index.module.css";
import SettingIcon from "../../settings.svg";

interface Props {
  label: string;
}

const Title = (props: Props) => (
  <h1 className={Style.title}>
    <Link to="/" className={Style.titleLink}>
      {props.label}
    </Link>
    <Link to="/settings">
      <img src={SettingIcon} alt="設定" className={Style.icon} />
    </Link>
  </h1>
);

export default Title;
