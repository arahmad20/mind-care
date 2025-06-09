import { Fragment } from "react";
import FooterHome from "./footer/footers";

export default function BlanksLayout({children}){
    return(
        <div className="relative min-h-screen bg-slate-100 max-w-xl mx-auto">
            <div className="p-4 space-y-4">
                {children}
            </div>
        </div>
    )
}