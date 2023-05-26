import { Routes, Route } from 'react-router-dom'

import { New } from '../pages/New'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<New />} />
        </Routes>
    )
}