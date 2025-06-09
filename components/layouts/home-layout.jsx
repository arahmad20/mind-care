import FooterHome from "./footer/footers";
import HeadersHomePages from "./header/headers";

export default function HomeLayout({children}){
    return(
        <div className="relative min-h-screen bg-slate-100 max-w-xl mx-auto">
            <HeadersHomePages />
                <div className="p-4 space-y-4">
                    {children}
                </div>
            <FooterHome />
        </div>
    )
}