import { Button } from "@/components/ui/button";
import therapyModules from "@/lib/therapy-data";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const TherapyPages = () => {
    return(
        <Fragment>
            <div className="grid grid-cols-1 space-y-2 mb-14">
                {therapyModules.map((item) => (
                    <div key={item.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
                    <div className="w-20 h-20 relative mb-3">
                        <Image 
                            src="https://dummyimage.com/200x200" 
                            fill
                            alt="team" 
                            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" 
                        />
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <Link href={`/therapy/${item.slug}`}>
                        <Button variant="outline">{item.action}</Button>
                    </Link>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

TherapyPages.layout = 'Homelayout'
export default TherapyPages;