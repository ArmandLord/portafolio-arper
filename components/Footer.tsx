import Link from "next/link";
import { personalInfo, navigation } from "@/lib/data";
import { Mail, MapPin, Code2, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const GithubIcon = ({ className }: { className?: string }) => (
  <FaGithub className={className} />
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <FaLinkedin className={className} />
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-semibold text-foreground">
                Arman<span className="text-primary">dev</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {personalInfo.bio}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">Navegación</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">Conectar</h3>
            <div className="flex gap-3 mb-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Armando Pérez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}