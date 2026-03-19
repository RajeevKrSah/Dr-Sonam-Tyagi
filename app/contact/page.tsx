import Breadcrumb from "@/components/breadcrumb"
import FAQs from "@/components/faqs"
import Contact from "@/components/home/contact"

const ContactPage = () => {
    return (
        <main>
            <Breadcrumb title="Contact Us" />
            <Contact />
            <FAQs />
        </main>
    )
}

export default ContactPage
