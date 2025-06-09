import FooterHome from "@/components/layouts/footer/footers";
import Seo from "@/components/layouts/seo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MonitorCog, Settings } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

const UserProfilPages = () => {
    const menus = [
        {label: 'Preference', short_desc:"untuk men setting lainnya", link : '/users/preference', icons:<Settings />},
        {label: 'Notification', short_desc:"untk setting notifikasi", link : '/users/notification', icons: <MonitorCog />},
    ]
    return(
        <Fragment>
            <Seo title={`Journal`} />
            <section className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-gray-400">
                    </div>
                    <div className="flex flex-col space-y-0">
                        <h2>Ahmad Dani A</h2>
                        <small>afrizal@ut.ac.id</small>
                    </div>
                </div>
                <div>
                    <Button>Edit Profil</Button>
                </div>
            </section>
            <Separator />
            <section className="grid grid-cols-1 space-y-4">
                {menus.map((men, index) => (
                    <Link href={men.link} key={index} passHref>
                        <div className="p-4 bg-white rounded-md shadow-lg shadow-blue-100 flex gap-4">
                            <div className="w-10 h-10 flex items-center justify-center">{men.icons}</div>
                            <div className="flex flex-col space-y-0">
                                <h2>{men.label}</h2>
                                <small>{men.short_desc}</small>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
            <FooterHome />
        </Fragment>
    )
}

UserProfilPages.layout = 'Homelayout';
export default UserProfilPages;