import speedService from 'services/speed.service';
import {Provider} from "./speed.context";
import {useState} from "react";

export const SpeedProvider = ({children}) => {
    console.log(document.body.clientWidth )
    const [isForward, setIsForward] = useState(true);
    return (
        <Provider value={getValue(isForward)}>
            {children}
        </Provider>
    );
}

function getValue(isForward) {
    const value = {};
    const speed = speedService.getSpeed(isForward);
    const linearSpeed = speedService.getLinearSpeed(speed)
    value.radiuses = {
        small: speedService.small,
        main: speedService.main,
    }
    value.time = speedService.getTime(linearSpeed);
    value.linearSpeed = linearSpeed;
    value.wheelsSpeed = {
        small: speedService.getSmallRadialSpeed(speed),
        main: speed,
    };
    value.tractorWidth = speedService.tractorWidth
    return value;
}