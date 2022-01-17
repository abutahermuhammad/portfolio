// Core Components
// Custom Components
import HomeAbout from "../components/home/HomeAbout";
import HomeHero from "../components/home/HomeHero";
import HomeProjects from "../components/home/HomeProjects";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";


export default function Index() {
    const pageData = {
        title: 'Abu Taher Muhammad',
        class: 'p_page_home'
    }
    const dataImg = {
        url: "/images/index.jpg",
        alt: 'About banner Image',
        width: 1444,
        height: 579
    }
    return (
        <>
            <Layout data={pageData}>
                <HomeHero />
                <HomeAbout />
                <HomeProjects />
            </Layout>
        </>
    )
}