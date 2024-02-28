import React from "react";
import "./btn.scss"

interface ButtonProps {
    children: React.ReactNode;
    classBtn: string;
}

const Btn = ({ children, classBtn }: ButtonProps) => {
    return <button className={classBtn}>{children}</button>
}

export default Btn;
