import Image from "next/image"

function AvatarLoader() {
    return (
        <div className="h-full flex justify-center items-center grow">
            <Image
                src="https://pbs.twimg.com/media/E7fCVsUWUAUWtDG.jpg"
                alt="Loading"
                width={170}
                height={170}
                className="rounded-full customBounce"
            />
        </div>
    )
}
export default AvatarLoader