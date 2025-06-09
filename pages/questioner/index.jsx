import Seo from "@/components/layouts/seo";
import Link from "next/link";
import { Fragment } from "react";

const QuestionerPages = () => {
    return(
        <Fragment>
            <Seo title={`Questioner`} />
            <section data-aos="fade-up" className="bg-white p-4 rounded-md shadow-lg shadow-blue-100 ">
                <div className="flex items-center">
                    <h1>Test Tingakatan Stress</h1>
                </div>
                <p></p>
                <div className="flex items-end justify-end">
                    <Link href={`/questioner/stress`} passHref>
                        <button className="p-1 px-4 rounded-md bg-secondary text-slate-700">Test</button>
                    </Link>
                </div>
            </section>
            <section data-aos="fade-up" className="bg-white p-4 rounded-md shadow-lg shadow-blue-100 ">
                <div className="flex items-center">
                    <h1>Manage Emotion</h1>
                </div>
                <p></p>
                <div className="flex items-end justify-end">
                    <button className="p-1 px-4 rounded-md bg-secondary text-slate-700">Test</button>
                </div>
            </section>
            <section data-aos="fade-up" className="bg-white p-4 rounded-md shadow-lg shadow-blue-100 ">
                <div className="flex items-center">
                    <h1>Test ISFT</h1>
                </div>
                <p></p>
                <div className="flex items-end justify-end">
                    <button className="p-1 px-4 rounded-md bg-secondary text-slate-700">Test</button>
                </div>
            </section>
        </Fragment>
    )
}

QuestionerPages.layout = 'Homelayout'
export default QuestionerPages;