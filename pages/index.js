import FooterHome from "@/components/layouts/footer/footers";
import Seo from "@/components/layouts/seo"
import CardNews from "@/components/ui/card-news";
import { dataArticleHome } from "@/lib/data-artikel";
import { Bell, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react"

const HomePageLayout = () => {
  const recentArticles = dataArticleHome
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 3);

  return(
    <Fragment>
      <Seo title={`Home`} />
      <main className="bg-slate-100 max-w-lg mx-auto">
        <div className="relative">
          <div className="w-full h-60 relative">
            <Image 
              src={`/images/app/bg-flat-home.jpg`}
              fill
              alt="BG_HOME"
              className="object-cover"
            />
          </div>
          <section className="flex items-center justify-between absolute top-4 w-full p-8">
              <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gray-400">

                  </div>
                  <div className="flex flex-col space-y-0 text-white">
                      <h2>Ahmad Dani A</h2>
                      <small>afrizal@ut.ac.id</small>
                  </div>
              </div>
              <div className="flex items-center justify-center rounded-full bg-white/35 p-2">
                <Bell />
              </div>
          </section>
          <section className="p-8 absolute top-24 w-full">
            <div className="bg-white/80 rounded-full p-3 w-full">
              <Search size={20} />
            </div>
          </section>
          <div className="bg-white rounded-t-xl p-4 absolute w-full -mt-4 min-h-svh space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Kategori</h2>
              <span>lihat semua</span>
            </div>
            <div className="grid grid-cols-3 gap-4 justify-center">
              <div className="flex flex-col space-y-2 text-center">
                <Link href={`therapy`} passHref>
                  <div className="p-4 h-28 w-full bg-lime-100 rounded-lg shadow-lg shadow-blue-100 relative">
                    <Image 
                      src={`/images/app/meditation.png`}
                      fill
                      alt="Image Cover"
                      className="object-contain"
                    />
                  </div>
                </Link>
                <span>Terapi</span>
              </div>
              <div className="flex flex-col space-y-2 text-center">
                <Link href={`mood-tracker`} passHref>
                  <div className="p-4 h-28 w-full bg-purple-200 rounded-lg shadow-lg shadow-blue-100 relative">
                    <Image 
                      src={`/images/app/stay-home.png`}
                      fill
                      alt="Image Cover"
                      className="object-contain"
                    />
                  </div>
                </Link>
                <span>Mood Tracker</span>
              </div>
              <div className="flex flex-col space-y-2 text-center">
                <Link href={`journal`} passHref>
                  <div className="p-4 h-28 w-full bg-sky-100 rounded-lg shadow-lg shadow-blue-100 relative">
                    <Image 
                      src={`/images/app/reading-book.png`}
                      fill
                      alt="Image Cover"
                      className="object-contain"
                    />
                  </div>
                </Link>
                <span>Journaling</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Last Article</h2>
              <span>lihat semua</span>
            </div>
            <div className="space-y-2">
              {recentArticles.map((artikel, index) => (
                <CardNews data={artikel} key={index} location='artikel' />
              ))}
            </div>
          </div>
        </div>
      </main>
      <FooterHome />
    </Fragment>
  )
}

export default HomePageLayout;