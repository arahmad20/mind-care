import Seo from "@/components/layouts/seo";
import { Fragment } from "react";

const FaqPages = () => {
    return(
        <Fragment>
            <Seo title={`FAQ`} />
            Faq
        </Fragment>
    )
}

FaqPages.layout = 'Homelayout';
export default FaqPages;