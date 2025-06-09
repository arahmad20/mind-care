import { Bell, Menu, X } from "lucide-react";
import Image from "next/image";
import { Fragment, useState } from "react";

export default function HeadersHomePages(){
    const [openMenu, setOpenMenu] = useState(false);
    return(
        <Fragment>
            <header className="bg-primary w-full">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 relative">
                            <Image 
                                src={`/assets/images/logo/logo_black.png`}
                                fill
                                alt="Logo MindCare"
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <h2 className=" text-xl font-serif text-slate-700">MindCare</h2>
                    <div >
                        <Bell onClick={() => setOpenMenu(!openMenu)} />
                    </div>
                </div>
            </header>
        </Fragment>
    )
}