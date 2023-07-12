import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, PostFormPage } from "./foro/pages"
import { Footer, Navbar } from "./foro/components"


export const AppRoute = () => {
  
    return (

        <>
            <Navbar />

            <Routes>

                <Route path="/" element={ <HomePage /> } />

                <Route path="/createPost" element={ <PostFormPage /> } />

                <Route path="/*" element={ <Navigate to="/"/> } />

            </Routes>

            <Footer />
        
        </>

    )
}
