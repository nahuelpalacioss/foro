import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, PostFormPage, PostPage } from "./foro/pages"
import { Navbar } from "./foro/components"

export const AppRoute = () => {
  
    return (

        <>
            <Navbar />

     

            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/createPost" element={ <PostFormPage /> } />
                <Route path="/post" element={ <PostPage /> } />
                <Route path="/*" element={ <Navigate to="/"/> } />
            </Routes>

        
        </>

    )
}
