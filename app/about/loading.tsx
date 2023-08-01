import Image from "next/image"

type Props = {}

function Loading({}: Props) {

  return (
    <div className="h-full flex justify-center items-center grow">
    <Image 
      src="https://pbs.twimg.com/media/E7fCVsUWUAUWtDG.jpg"
      alt="Loading"
      width={200}
      height={200}
      className="rounded-full customBounce"
    />
    </div>
  )
}

export default Loading