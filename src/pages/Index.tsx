import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  },
  {
    slug: "tubenotify",
    name: "TubeNotify",
    description: "Notifica novos vídeos dos seus canais favoritos no YouTube.",
    logo: tubeLogo,
  },
  {
    slug: "govlicit",
    name: "GovLicit",
    description: "Acompanhe licitações públicas e receba alertas importantes.",
    logo: govLogo,
  },
];

const Index = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 8;
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return APPS;
    return APPS.filter(a => a.name.toLowerCase().includes(q));
  }, [query]);

  // reset page when search changes
  useEffect(() => { setPage(1); }, [query]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const start = (page - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);

  return (
    <main className="min-h-screen bg-background">
      <SEO title="NotifyG – Catálogo de Aplicativos" description="Explore os apps do NotifyG e descubra novas funcionalidades." canonicalUrl="/" />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-primary opacity-60" aria-hidden="true" />
        <div className="container relative py-14 sm:py-16">
          <header className="mx-auto max-w-3xl text-center space-y-4 animate-enter">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Descubra apps do NotifyG</h1>
            <p className="text-muted-foreground">Pesquise e encontre aplicativos que potencializam suas notificações.</p>
          </header>
          <div className="mx-auto mt-6 max-w-2xl animate-enter delay-100">
            <div className="relative">
              <Input
                type="search"
                placeholder="Buscar apps por nome..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Buscar aplicativos"
                className="pl-4 pr-4 h-11 bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/70"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mt-12 pb-16">
        <article className="rounded-2xl border bg-card shadow-sm p-4 sm:p-6 lg:p-8">
          <h2 className="sr-only">Aplicativos</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-enter delay-150">
            {filtered.length === 0 ? (
              <div className="col-span-full text-center text-muted-foreground py-12">Nenhum app encontrado para "{query}".</div>
            ) : (
              pageItems.map((app) => (
                <Link key={app.slug} to={`/apps/${app.slug}`} className="group focus:outline-none">
                  <Card className="h-full transition-transform duration-200 transform-gpu group-hover:-translate-y-1 hover-scale border-border/60 hover:border-border/80">
                    <CardHeader className="flex-row items-center gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-lg bg-accent/60 ring-1 ring-border overflow-hidden">
                        <img src={app.logo} alt={`Logo do ${app.name}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div>
                        <CardTitle className="text-base font-semibold text-foreground">{app.name}</CardTitle>
                        <CardDescription className="line-clamp-2 text-muted-foreground">{app.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="story-link">Ver detalhes</span>
                        <span className="transition-colors group-hover:text-[hsl(var(--brand))]">→</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </div>

          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    size="default"
                    aria-label="Página anterior"
                    onClick={(e) => { e.preventDefault(); setPage(Math.max(1, page - 1)); }}
                    className="gap-1 pl-2.5"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Anterior</span>
                  </PaginationLink>
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <PaginationItem key={p}>
                    <PaginationLink
                      href="#"
                      isActive={p === page}
                      onClick={(e) => { e.preventDefault(); setPage(p); }}
                      aria-label={`Ir para página ${p}`}
                    >
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    size="default"
                    aria-label="Próxima página"
                    onClick={(e) => { e.preventDefault(); setPage(Math.min(totalPages, page + 1)); }}
                    className="gap-1 pr-2.5"
                  >
                    <span>Próxima</span>
                    <ChevronRight className="h-4 w-4" />
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </article>
      </section>
    </main>
  );
};

export default Index;
