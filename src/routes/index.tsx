import { Route, Routes } from "react-router-dom"
import { Auth } from "../pages/Auth"
import { Layout } from "../components/Layout"
import { Dashboard } from "../pages/Dashboard"
import { NewTransaction } from "../pages/Transaction/New"
import { EditTransaction } from "../pages/Transaction/Edit"
import { Transactions } from "../pages/Transaction/Transactions"
import { Account } from "../pages/Account"
import { NotFound } from "../pages/NotFound"

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

                <Route path="/account" element={<Account />}/>

                <Route path="/transactions">
                    <Route index element={<Transactions />}/>
                    <Route path="new" element={<NewTransaction />}/>
                    <Route path=":id/edit" element={<EditTransaction />}/>
                </Route>
            </Route>

            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}