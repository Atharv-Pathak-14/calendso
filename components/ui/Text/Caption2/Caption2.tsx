import React from "react";
import classnames from "classnames";
import { TextProps } from "../Text";

const Caption2: React.FunctionComponent<TextProps> = (props: TextProps) => {
  const classes = classnames("text-xs italic text-gray-500 dark:text-white leading-tight");

  return <p className={classes}>{props.children}</p>;
};

export default Caption2;
