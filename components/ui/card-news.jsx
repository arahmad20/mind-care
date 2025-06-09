import Image from "next/image";
import Link from "next/link";

export default function CardNews({data, location}){
    let alamat;

    switch (location) {
        case 'artikel':
            alamat = `/articles/${data.slugs}`
        break;
        
        case 'journal':
            alamat = `/journal/${data.slugs}`
        break;
            
        default:
            alamat = `/journal/${data.slugs}`
        break;
    }
    return(
        <div data-aos="fade-up" className="flex bg-white p-2 gap-2 rounded-md shadow-lg shadow-blue-100">
            <div className="w-1/3 relative">
                <Image 
                    src="https://dummyimage.com/200x200" 
                    fill
                    alt="team" 
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" 
                />
            </div>
            <div className="w-2/3 flex flex-col space-y-1 p-1">
                <h1 className="font-semibold">
                    {data.title}
                </h1>
                <small className="text-justify">
                    {data.description}
                </small>
                <div className="flex justify-end">
                    <Link href={alamat} passHref>
                        <span className="text-blue-500 font-semibold text-sm">Selengkapnya ...</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}