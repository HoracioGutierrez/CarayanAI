"use client"

import { useState } from "react"
import Image1 from "../assets/ej-1.png"
import Image2 from "../assets/ej-2.png"
import Image3 from "../assets/ej-3.png"
import Image from "next/image"

type Props = {}

function Page({ }: Props) {

  const [show, setShow] = useState(false)
  const [image, setImage] = useState("")

  const handleClick = (e: any) => {
    setShow(true)
    setImage(e.target.src)
  }

  return (
    <>
      <h2 className="text-2xl">Showcase</h2>
      <p className="font-thin font-xs mt-4">En esta seccion pueden ver algunos de los ejemplos de cosas que se pueden hacer con el chat o que nos ha respondido a lo largo de los distintos tests que fuimos haciendo en el desarrollo : </p>
      <section className="mt-8  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 justify-items-center">
        <article className="p-4 min-h-[300px] w-[180px] relative transition duration-300 rounded-lg hover:scale-125 hover:bg-[rgba(255,255,255,0.3)] flex flex-col z-0 gap-2 hover:z-10">
          <div className="relative grow min-h-[270px]">
            <Image src={Image1} alt="Ejemplo de chat 1" fill onClick={handleClick} />
          </div>
          <p>Ejemplo 1 : Que opinas de nancy pasos?</p>
        </article>
        <article className="p-4 min-h-[300px] w-[180px] relative transition duration-300 rounded-lg hover:scale-125 hover:bg-[rgba(255,255,255,0.3)] flex flex-col z-0 gap-2 hover:z-10">
          <div className="relative grow min-h-[270px]">
            <Image src={Image2} alt="Ejemplo de chat 1" fill onClick={handleClick} />
          </div>
          <p>Ejemplo 2 : Generacion de outfits cancheros</p>
        </article>
        <article className="p-4 min-h-[300px] w-[180px] relative transition duration-300 rounded-lg hover:scale-125 hover:bg-[rgba(255,255,255,0.3)] flex flex-col z-0 gap-2 hover:z-10">
          <div className="relative grow min-h-[270px]">
            <Image src={Image3} alt="Ejemplo de chat 1" fill onClick={handleClick} />
          </div>
          <p>Ejemplo 3:  chat nada que ver</p>
        </article>
      </section>
      {show && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center" onClick={() => setShow(false)}>
          <div className="relative w-[90%] h-[90%]">
            <img src={image} alt="Ejemplo de chat 1" className="w-full h-full object-contain" />
          </div>
        </div>
      )}
    </>
  )
}

export default Page