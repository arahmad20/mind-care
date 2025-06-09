import DetailPagesAfirmasi from "@/components/details/afirmasi-card";
import { Button } from "@/components/ui/button";
import therapyModules from "@/lib/therapy-data";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/router";
import { Fragment } from "react";

const TherapyDetailPages = () => {
    const router = useRouter();
    const slugs = router.query.slugs;

    const detailData = therapyModules.find((item) => item.slug === slugs);
    
    return(
        <Fragment>
            <section className="flex items-center gap-2 p-4">
                <div >
                    <Button onClick={() => router.back()} variant={`outline`} size={`sm`}><ChevronLeft /></Button>
                </div>
                <span className="font-semibold">
                    {detailData.title}
                </span>
            </section>
            {detailData.slug != 'afirmasi-positif' ?
                <section>
                    <div
                        className="prose max-w-none text-justify p-4"
                        dangerouslySetInnerHTML={{ __html: detailData.content }}
                    />
                </section>
                :
                <section className="p-4">
                    <DetailPagesAfirmasi />
                </section>
            }
        </Fragment>
    )
}

export default TherapyDetailPages;