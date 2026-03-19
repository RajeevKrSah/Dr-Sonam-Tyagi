import About from "@/components/home/about"
import Breadcrumb from "@/components/breadcrumb"
import Testimonials from "@/components/home/testimonials"
import FAQs from "@/components/faqs"

const AboutPage = () => {
    return (
        <main>
            <Breadcrumb title="About Us" />
            <About />
            <FAQs />
            <Testimonials />
        </main>
    )
}

export default AboutPage
