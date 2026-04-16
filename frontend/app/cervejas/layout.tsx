// app/cervejas/layout.tsx
import React from "react";

export default function CervejasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* Opção de adicionar elementos para aparecer em todas as subpáginas de cervejas (ex: /cervejas, /cervejas/ipa, /cervejas/stout)
    */
    <div className="flex flex-col w-full min-h-screen bg-tavern">
      {/* Exemplo para um sub-header ou filtro lateral*/}

      <div className="flex-1 w-full">{children}</div>

      {/* Botão flutuante de 'Voltar ao Topo' */}
    </div>
  );
}
