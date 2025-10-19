import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>ByPeople — UGC para marcas y creadores (MX)</title>
        <meta name="description" content="Conecta marcas y creadores UGC en México. Plataforma minimalista, humana y pensada para creadores." />
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto px-6 py-20">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-poppins text-4xl font-bold text-charcoal mb-4">
              Creadores + Marcas. Contenido real que convierte.
            </h1>
            <p className="text-lg text-charcoal mb-6" style={{lineHeight: 1.6}}>
              ByPeople es una plataforma para crear y escalar UGC en México. Encuentra creadores, gestiona campañas y mide ROAS en Meta y TikTok.
            </p>

            <div className="flex gap-4">
              <Link href="/signup?role=creator">
                <a className="px-6 py-3 rounded-md font-poppins text-sm" style={{backgroundColor: '#F9D45C'}}>Soy creador</a>
              </Link>
              <Link href="/signup?role=brand">
                <a className="px-6 py-3 rounded-md border font-poppins text-sm">Soy marca</a>
              </Link>
            </div>
          </div>

          <div>
            <div className="bg-beige rounded-lg p-6">
              <h3 className="font-poppins font-semibold mb-4">Cómo funciona</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Publica un brief o únete como creador.</li>
                <li>Creadores aplican y entregan UGC (vídeo ≤ 2 min).</li>
                <li>Revisa, aprueba y paga (50% upfront / 50% on approval).</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-poppins text-2xl font-semibold mb-4">Para marcas</h2>
          <p className="mb-8">Contrata paquetes de UGC o trabaja por pieza. Managed service disponible para 15 / 25 videos.</p>

          <h2 className="font-poppins text-2xl font-semibold mb-4">Para creadores</h2>
          <p>Sube tu portfolio, conecta tus redes y aplica a campañas. Pagos seguros y soporte.</p>
        </section>
      </main>
    </>
  );
}
