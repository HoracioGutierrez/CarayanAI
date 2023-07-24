import { verifyUser } from "../lib/serverActions"

async function Footer() {

    return (
        <footer className='flex flex-col items-center justify-center text-center text-neutral-300 text-xs py-2'>
            <p>CarayanAI es un proyecto de <a href="https://instagram.com/horagutierrez">Horacio Gutierrez</a> </p>
            <p>El código fuente de este proyecto está disponible en <a href="https://github.com/HoracioGutierrez">GitHub</a></p>
            <p>Este proyecto está bajo la licencia <a href="#">MIT</a></p>
            <p>Ante cualquier duda o consulta, puede contactarse a : horacio.estevez@gmail.com</p>
        </footer>
    )
}

export default Footer