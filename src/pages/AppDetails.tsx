import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import joelLogo from "@/assets/apps/joeljota.png";
import tubeLogo from "@/assets/apps/tubenotify.png";
import govLogo from "@/assets/apps/govlicit.png";

const APPS = [
  {
    slug: "joel-jota-notifier",
    name: "Joel Jota Notifier",
    description: "Frases e áudios motivacionais diariamente do Joel Jota.",
    logo: joelLogo,
    long: "Receba diariamente frases e áudios motivacionais do Joel Jota diretamente no seu dispositivo. Personalize o horário e a frequência das notificações.",
  },
  {
    slug: "tubenotify",
    name: "TubeNotify",
    description: "Notifica novos vídeos dos seus canais favoritos no YouTube.",
    logo: tubeLogo,
    long: "Monitore canais específicos do YouTube e receba alertas imediatos quando novos vídeos forem publicados.",
  },
  {
    slug: "govlicit",
    name: "GovLicit",
    description: "Acompanhe licitações públicas e receba alertas importantes.",
    logo: govLogo,
    long: "Fique por dentro das licitações públicas relevantes. Receba avisos sobre prazos, documentos e movimentações importantes.",
  },
];

export default function AppDetails() {
  const { slug } = useParams();
  const app = useMemo(() => APPS.find(a => a.slug === slug), [slug]);

  if (!app) {
    return (
      <main className="min-h-screen container py-16">
        <SEO title="App não encontrado – NotifyG" description="O app solicitado não foi encontrado." canonicalUrl={`/apps/${slug ?? ''}`} />
        <div className="text-center text-muted-foreground">App não encontrado.</div>
        <div className="mt-6 text-center">
          <Link className="story-link text-[hsl(var(--brand))]" to="/">Voltar</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <SEO title={`${app.name} – Detalhes | NotifyG`} description={app.description} canonicalUrl={`/apps/${app.slug}`} />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-primary opacity-50" aria-hidden="true" />
        <div className="container relative py-12">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-accent/60 ring-1 ring-border overflow-hidden">
              <img src={app.logo} alt={`Logo do ${app.name}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{app.name}</h1>
              <p className="text-muted-foreground">{app.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16">
        <div className="prose max-w-3xl text-foreground">
          <p className="mt-6 text-base text-muted-foreground">{app.long}</p>
        </div>
        <div className="mt-8">
          <Link to="/" className="story-link text-[hsl(var(--brand))]">← Voltar para a vitrine</Link>
        </div>
      </section>
    </main>
  );
}
