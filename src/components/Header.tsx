import { Link, useNavigate } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-card/90 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-foreground">
          NotifyG
        </Link>

        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar className="h-9 w-9 ring-1 ring-border">
                <AvatarImage src="" alt="Avatar do usuário" />
                <AvatarFallback className="bg-primary/10 text-foreground">NG</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-50 bg-popover text-popover-foreground">
              <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => navigate("/settings?tab=profile")}>Perfil</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => navigate("/settings?tab=security")}>Alterar senha</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Idioma</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onSelect={() => navigate("/settings?tab=language")}>Português</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => navigate("/settings?tab=language")}>English</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => navigate("/settings?tab=language")}>Español</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => navigate("/")}>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
