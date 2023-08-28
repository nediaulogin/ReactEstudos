'use client'

import Contador from "@/components/comunicacao/indireta/Contador"


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10">
      <h1 className="text-5xl font-black">Comunicação indireta</h1>
      <div className="flex gap-5">
        <Contador />
        <Contador />
        <Contador />
      </div>
    </div>
  )
}
