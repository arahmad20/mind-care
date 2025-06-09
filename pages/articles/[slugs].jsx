import Seo from "@/components/layouts/seo";
import CardNews from "@/components/ui/card-news";
import { dataArticleHome } from "@/lib/data-artikel";
import Image from "next/image";
import { useRouter } from "next/router";

const DetailArticelPages = () => {
    const router = useRouter();
    const slugs = router.query.slugs;

    const article = dataArticleHome.find((item) => item.slugs === slugs);
    const recentArticles = dataArticleHome
    .filter((item) => item.slugs !== slugs)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 3);

    if (!article) return <p className="text-center">Artikel tidak ditemukan.</p>;

    return(
        <div className="mb-14 space-y-2">
            <Seo title={article.title} />
            <section className="space-y-4 mb-2">
                <h1 className="text-xl font-serif text-slate-700">{article.title}</h1>
                <small>Oleh : {article.created_by} || dibuat pada : {article.created_at}</small>
                <div className="w-full h-80 relative">
                    <Image 
                        src="https://dummyimage.com/200x200" 
                        fill
                        alt="team" 
                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" 
                    />
                </div>
                <div
                    className="prose max-w-none text-justify"
                    dangerouslySetInnerHTML={{ __html: article.article }}
                />
            </section>
            <section className="">
                <h2 className="font-semibold text-slate-700">Recent Article</h2>
            </section>
            <section className="space-y-4">
                {recentArticles.map((article, index) => (
                    <CardNews data={article} key={index} />
                ))}
            </section>
        </div>
    )
}

DetailArticelPages.layout = 'Homelayout';
export default DetailArticelPages;