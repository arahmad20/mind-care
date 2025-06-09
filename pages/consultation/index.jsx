import FooterHome from "@/components/layouts/footer/footers";
import Seo from "@/components/layouts/seo";
import { Button } from "@/components/ui/button";
import { psychologistsList } from "@/lib/data-psikolog";
import { Fragment } from "react"

const ConsultationPages = () => {
    return(
        <Fragment>
            <Seo title={`Consultation`} />
            <section className="">
                <div className="bg-white rounded-lg p-4">
                    <h1>Yukk Konsultasikan</h1>
                    <small className="text-justify">
                        mulai percakapan dengan konsultan / psikolog profesional untuk mendalami kesehatan mental anda
                    </small>
                    <div className="flex justify-end">
                        <Button>Lebih Lanjut</Button>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-between">
                <h2 className="text-slate-600 font-semibold">Konsultan</h2>
                <span className="text-sm">Lihat Semua</span>
            </section>
            <section className="grid grid-cols-1 space-y-2 pb-14">
                {psychologistsList.map((psikolog) => (
                    <div key={psikolog.id} className="p-4 border rounded-xl bg-white shadow hover:shadow-lg transition">
                    <img src={`https://dummyimage.com/200x200`} alt={psikolog.name} className="w-full h-48 object-cover rounded-md mb-2" />
                    <h3 className="font-semibold text-lg">{psikolog.name}</h3>
                    <p className="text-sm text-gray-500">{psikolog.specialization}</p>
                    <p className="text-sm text-gray-600 mt-1">{psikolog.location} • {psikolog.experience} • ⭐ {psikolog.rating}</p>
                    <p className="text-sm mt-2 text-gray-700">{psikolog.description}</p>
                    <button
                        className={`mt-3 w-full text-sm py-2 rounded-md font-medium ${
                        psikolog.available ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!psikolog.available}
                    >
                        {psikolog.available ? "Konsultasi Sekarang" : "Tidak Tersedia"}
                    </button>
                    </div>
                ))}
            </section>
            <FooterHome />
        </Fragment>
    )
}

ConsultationPages.layout = 'Blanklayout';
export default ConsultationPages