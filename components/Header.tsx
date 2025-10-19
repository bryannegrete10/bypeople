import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-offwhite border-b border-softgray">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sunyellow flex items-center justify-center"></div>
            <span className="font-poppins font-semibold text-xl text-charcoal">bypeople</span>
          </a>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/explore"><a className="text-charcoal">Explorar</a></Link>
          <Link href="/pricing"><a className="text-charcoal">Precios</a></Link>
          <Link href="/login"><a className="px-4 py-2 border rounded-md text-charcoal">Inicia sesión</a></Link>
          <Link href="/signup"><a className="px-4 py-2 bg-terra rounded-md text-white" style={{backgroundColor: '#E27D60'}}>Regístrate</a></Link>
        </nav>
      </div>
    </header>
  );
}
