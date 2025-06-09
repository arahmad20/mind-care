import Seo from "@/components/layouts/seo";
import CardNews from "@/components/ui/card-news";
import { mentalHealthArticles } from "@/lib/data-artikel";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const JournalPages = () => {
    return(
        <Fragment>
            <Seo title={`Journal`} />
            <section>
                <h2 className="font-semibold text-slate-700 text-xl font-sans">Popular Content</h2>
            </section>
            <section className="space-y-2">
                {mentalHealthArticles.map((article, index) => (
                    <CardNews data={article} key={index} location='journal' />
                ))}
            </section>
        </Fragment>
    )
}

JournalPages.layout = 'Homelayout';
export default JournalPages;