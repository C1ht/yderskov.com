import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("./ContactFormInner"), {
  ssr: true,
});

export default ContactForm;
