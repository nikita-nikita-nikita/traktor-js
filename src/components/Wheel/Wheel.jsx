import React from "react";
import {Wheel as WheelStyled, Bolt} from "./wheel.styled";

export const Wheel = ({size = 120}) => {
    return (
        <WheelStyled height={size} width={size}>
            <Bolt/>
            <Bolt top="calc(75% - 7.5px)"/>
            <Bolt top="calc(50% - 7.5px)" left="calc(25% - 7.5px)"/>
            <Bolt top="calc(50% - 7.5px)" left="calc(75% - 7.5px)"/>
        </WheelStyled>
    )
}