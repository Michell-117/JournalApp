import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const AppRouter = () => {

    const {status} = useSelector(state=>state.auth)

    return (
        <Routes>

            {/* Login y registro */}
            {/* <Route path={status==='authenticated'?"/":"/auth/*"} element={<AuthRoutes />}/> */}
            {/* <Route path="/auth/*" element={ status === 'authenticated'? <Navigate to={ "/" }/> :  <AuthRoutes /> }/> */}
            <Route path="/auth/*" element={<AuthRoutes />}/>

            {/* Journal App ya autenticados */}
            <Route  path="/*" element={ <JournalRoutes /> } />

        </Routes>
    )
}
