import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-1 flex-col bg-neutral-50">
        {children}
      </main>
      <Footer />
    </>
  );
}
