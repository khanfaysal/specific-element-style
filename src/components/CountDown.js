import { faClock} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const CountDown = () => {
    return (
        <section>
            <div className="text-center shadow-sm w-4/6 m-auto">
                <FontAwesomeIcon icon={faClock} size="6x"color="#ff7675"/>
                <h1 className="font-bold text-yellow-500">Count Down In React</h1>
                <div>

                </div>
            </div>
        </section>
    )
}
export default CountDown;