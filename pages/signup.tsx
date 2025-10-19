import Head from "next/head";
import Header from "../components/Header";
import PortfolioUploader from "../components/PortfolioUploader";
import { useState } from "react";

export default function Signup() {
  const [role, setRole] = useState<"creator"|"brand" | null>(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // For now we store in localStorage — later we will save to DB via API.
    const user = { name, role, bio };
    localStorage.setItem("bypeople_user", JSON.stringify(user));
    alert("Perfil guardado localmente. Next steps: integrate with backend.");
  }

  return (
    <>
      <Head>
        <title>Registro — ByPeople</title>
      </Head>

      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="font-poppins text-2xl font-bold mb-4">Regístrate</h1>

        <div className="mb-6">
          <p className="text-sm text-gray-700">¿Eres creador o marca?</p>
          <div className="flex gap-4 mt-3">
            <button onClick={() => setRole("creator")} className={`px-4 py-2 rounded ${role==="creator" ? "bg-sunyellow" : "border"}`}>Creador</button>
            <button onClick={() => setRole("brand")} className={`px-4 py-2 rounded ${role==="brand" ? "bg-terra" : "border"}`} style={{backgroundColor: role==="brand" ? "#E27D60" : undefined}}>Marca / Agencia</button>
          </div>
        </div>

        {role && (
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-sm">
            <div>
              <label className="block text-sm font-medium">Nombre</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium">Bio corta</label>
              <textarea value={bio} onChange={(e)=>setBio(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
            </div>

            {role === "creator" && (
              <div>
                <h3 className="font-semibold mb-2">Portfolio</h3>
                <PortfolioUploader />
                <p className="text-xs text-gray-500 mt-2">Súbelo aquí para mostrarlo en tu perfil. Videos deben ser ≤ 2 min.</p>
              </div>
            )}

            <div className="flex justify-between items-center">
              <button type="submit" className="px-4 py-2 bg-charcoal text-white rounded">Guardar perfil</button>
              <p className="text-sm text-gray-500">Tus datos se guardarán localmente por ahora.</p>
            </div>
          </form>
        )}

      </main>
    </>
  );
}
