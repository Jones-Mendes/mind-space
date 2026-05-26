import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

const nav = [
  { to: "/", label: "Início" },
  { to: "/anamnese", label: "Anamnese" },
  { to: "/ambiente", label: "Ambiente" },
  { to: "/painel", label: "Profissional" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-brand grid place-items-center shadow-glow group-hover:scale-105 transition">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg">MindSpace</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-accent/60 transition"
              activeProps={{ className: "px-4 py-2 rounded-full text-sm bg-accent text-accent-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/anamnese"
          className="hidden sm:inline-flex px-5 py-2 rounded-full text-sm font-medium bg-gradient-brand text-primary-foreground shadow-soft hover:shadow-glow transition"
        >
          Começar
        </Link>
      </div>
    </header>
  );
}
