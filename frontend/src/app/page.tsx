import { TopMenu } from "@/components/ui/TopMenu";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <TopMenu></TopMenu>
      <div className="flex flex-col items-center justify-center shadow-2xl w-1/2 py-5 rounded-md">
        <div className="py-5">
          <Image
            src="/logo.png"
            width={300}
            height={300}
            alt="logo"
            className="rounded mr-5"
          />
        </div>
        <div className="py-10 text-xl font-bold">Bienvenido Candidato 01</div>
        <div className="py-10">
          <Link href="/suppliers" className="btn-primary text-center">
            Continuar
          </Link>
        </div>
        <div className="flex flex-row items-end justify-end py-3 bg-slate-300 w-96 p-2 rounded-md">
          <p>Versión: 1.0.1</p>
        </div>
      </div>
    </main>
  );
}
