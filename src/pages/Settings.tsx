import SEO from "@/components/SEO";

export default function Settings() {
  return (
    <main className="min-h-[60vh]">
      <SEO title="Configurações — NotifyG" description="Gerencie perfil, senha e idioma da sua conta NotifyG." canonicalUrl="/settings" />
      <section className="container py-10 space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Configurações do Usuário</h1>
        <p className="text-muted-foreground">Escolha uma seção no menu da conta (canto superior direito) para editar perfil, senha ou idioma.</p>
      </section>
    </main>
  );
}
