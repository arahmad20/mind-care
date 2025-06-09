import { BookText, ClipboardCheck, Headset, House, UserRound } from "lucide-react";
import Link from "next/link";
export default function FooterHome(){
    return(
        <div className="fixed bottom-0 right-0 left-0 bg-white max-w-lg mx-auto">
            <div className="flex p-4 items-center gap-4 justify-around">
                <div className="flex flex-col items-center justify-center">
                    <Link href={`/`} passHref>
                        <House />
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={`/questioner`} passHref>
                        <ClipboardCheck />
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={`/consultation`} passHref>
                        <Headset />
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={`/users`} passHref>
                        <UserRound />
                    </Link>
                </div>
            </div>
        </div>
    )
}