import Wheel from "components/Wheel";
import {Wheels, Tractor as TractorStyled, TractorBody, TractorCabin, TractorContainer} from "./tractor.styled";
import {useSpeedContext} from "context";

export const Tractor = () => {
    const data = useSpeedContext();
    console.log({data})
     return (
        <TractorContainer >
            <TractorStyled>
                <TractorCabin/>
                <TractorBody/>
                <Wheels>
                    <Wheel size={150}/>
                    <Wheel />
                </Wheels>
            </TractorStyled>
        </TractorContainer>
    )
}