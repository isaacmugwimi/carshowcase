import { CSSProperties, MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: CSSProperties;
    handleClick?: MouseEventHandler<HTMLButtonElement>;

  }