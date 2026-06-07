import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("./HeroForm"), {
  ssr: true,
});

export default ContactForm;
