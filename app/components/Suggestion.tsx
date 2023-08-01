'use client'

import { ArrowRightIcon } from "@radix-ui/react-icons"

const contentSuggestions = [
    {
        heading: 'Hacer una descripcion general de outfit',
        content: `Me llamo Nerea, tengo 20 años y soy de Lanus. Tengo un joggin negro , remera rangle blanca y azul y una campertia gris, me haces una descripcion? \n`
    },
    {
        heading: 'Explicar otras cosas',
        content: 'la pagina martincirio.com me dio un error en pantalla que dice 404, que podria ser? \n'
    },
    {
        heading: 'Generar opiniones',
        content: `Que opinas de nancy pasos? \n`
    }
]

function CreateSuggestion({ set }: any) {

    const handleMoreDetail = (item:any) => {
        set(item.content)
    }

    return (
        <div className="mx-auto max-w-md">
            <h2 className="text-center text-4xl font-bold mb-4">Bienvenido!</h2>
            <p className="my-10 text-justify font-thin  text-lg  text-white">Soy CarayanAI, un homenaje en forma de bot que imita como habla Pablo Carayani Camara. Podes preguntarme lo que sea y si no te imaginas que decirme, aca te dejo algunas opciones muy chick para una persona aventurera como vos : </p>
            <nav className="flex flex-col">
                {contentSuggestions.map((item, i) => (
                    <button key={i} id={`${i}`} className={`${i == 0 && "animate-pulse"} px-2 py-1 hover:text-yellow-200 hover:animate-pulse hover:bg-slate-800 text-left flex items-center gap-4 group rounded text-base text-white font-medium`} onClick={()=>handleMoreDetail(item)}>
                        <ArrowRightIcon className="group-hover:rotate-90 transition duration-300" />
                        <span>
                            {item.heading}
                        </span>
                    </button>
                ))}
            </nav>
        </div>
    )
}

export default CreateSuggestion