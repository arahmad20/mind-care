const { default: Head } = require("next/head");
import favicon from '@/public/favicon.ico'

function Seo({title, keywords, meta_title, meta_keyword, meta_desc, image, link}){
    let i = `${title} - Mind Care`
    return(
        <Head>
            <title>{i}</title>
            <link href={favicon.src} rel="icon"></link>
            <meta name="description" content="Aplikasi Mind Care." />
            <meta name="keywords" content={`mind care,`+keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Dev - Ahmad Dani Af Rizal" />
            <meta property="og:title" content={meta_title}  />
            <meta property="og:description" content={meta_desc} />
            <meta property="og:keywords" content={meta_keyword} />
            <meta property="og:image" content={`https://mindcare.com`+image} />
            <meta property="og:url" content={link} />
            <meta property="og:type" content="website" />
        </Head>
    )
}

export default Seo;