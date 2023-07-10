"use client"

type Props = {
    children: React.ReactNode,
    set: React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean
}

function Modal({ children, set , open }: Props) {

    return (
        <div className={`transition duration-300 bg-transparent pointer-events-none fixed w-full h-full top-0 left-0  flex items-center justify-center ${open && "!z-10 !bg-[rgba(0,0,0,0.8)] pointer-events-auto"}`} onClick={() => set(!open)}>
            <div onClick={e=>e.stopPropagation()} className={`rounded-md max-w-lg min-h-max p-4 bg-white text-black opacity-0 transition duration-300 z-20 ${open && "!opacity-100"}`}>
                {children}
            </div>
        </div>
    )
}

export default Modal