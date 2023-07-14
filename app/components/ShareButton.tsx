import { Share1Icon } from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {
    id: string
}

export default function ShareButton({ id }: Props) {
    return (
        <Link href={`/share/${id}`}>
            <Share1Icon width={20} height={20} />
        </Link>
    )
}