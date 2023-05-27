import { Routes, Route } from 'react-router-dom'

import { Profile } from '../pages/Profile'
import { New } from '../pages/New'
import { MoviePreview } from '../pages/MoviePreview'
import { Home } from '../pages/Home'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/new" element={<New />} />
            <Route path="/moviepreview" element={<MoviePreview />} />
        </Routes>
    )
}