"use client"

import { CheckIcon, Cross2Icon, TrashIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import Modal from "./Modal"
import { deleteChat } from "../lib/serverActions"

type Props = {
    id: string
}

function DeleteButton({ id }: Props) {

    const [open, setOpen] = useState(false)

    const handleClick = async () => {
        setOpen(true)
    }

    const handleDelete = async () => {
        const result = await deleteChat(id)
        if(result){
            setOpen(false)
        }
    }

    return (
        <>
            <button onClick={handleClick}>
                <TrashIcon width={25} height={20} />
            </button>
            <Modal set={setOpen} open={open}>
                <h2>Estas seguro que queres borrar este chat?</h2>
                <nav className="flex justify-end mt-8 gap-4">
                    <button className="flex items-center" onClick={() => setOpen(false)}>
                        cancelar
                        <Cross2Icon width={25} height={25} className="text-red-300" />
                    </button>
                    <button className="flex items-center" onClick={handleDelete}>
                        aceptar
                        <CheckIcon width={25} height={25} className="text-green-300" />
                    </button>
                </nav>
            </Modal>
        </>
    )
}

export default DeleteButton