import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PrisResultDemo from "@/components/PrisResultDemo";

export const metadata = {
  robots: "noindex",
};

export default function PrisberegnDemoPage() {
  return (
    <>
      <Nav />
      <section className="s s-off">
        <div className="s-inner">
          <PrisResultDemo />
        </div>
      </section>
      <Footer />
    </>
  );
}
