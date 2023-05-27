import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AthRoutes } from "./ath.routes";


export function Routes(){
    return(
        <BrowserRouter>
            <AthRoutes />
        </BrowserRouter>
    )
}