type Props = {}

function Loading({}: Props) {

  return (
    <div className="h-full flex justify-center items-center grow">
    <img className="rounded-full w-44 h-44 lg:w-44 lg:h-44 customBounce " src="https://pbs.twimg.com/media/E7fCVsUWUAUWtDG.jpg" alt="Test" />
    </div>
  )
}

export default Loading