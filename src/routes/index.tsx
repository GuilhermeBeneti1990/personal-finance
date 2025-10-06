import { Route, Routes } from "react-router-dom"
import { Auth } from "../pages/Auth"
import { Layout } from "../components/Layout"
import { Dashboard } from "../pages/Dashboard"
import { NewTransaction } from "../pages/Transaction/New"
import { EditTransaction } from "../pages/Transaction/Edit"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/signin" element={<Auth type="signin" />} />
            <Route path="/signup" element={<Auth type="signup" />} />

            <Route element={<Layout />}>
                <Route 
                    index
                    element={<Dashboard />}
                />

                <Route path="/transactions">
                    <Route path="new" element={<NewTransaction />}/>
                    <Route path=":id/edit" element={<EditTransaction />}/>
                </Route>
            </Route>
        </Routes>
    )
}