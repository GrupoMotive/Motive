import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Aulas } from "./paginas/aulas/Aulas";
import { Contato } from "./paginas/contato/Contato";
import { Home } from "./paginas/home/Home";
import { Login } from "./paginas/login/Login";
import { Sobre } from "./paginas/sobre/Sobre";



export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/aulas' element={<Aulas />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}