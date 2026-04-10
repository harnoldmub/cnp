import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Mail, Inbox, Users, LockKeyhole, LogOut, LayoutPanelLeft } from "lucide-react";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { MANAGED_PAGES, type ManagedPageKey } from "@shared/page-settings";

type NewsletterSubscription = {
  id: string;
  email: string;
  createdAt: string;
};

type ContactMessage = {
  id: string;
  firstName: string;
  lastName: string | null;
  email: string;
  subject: string | null;
  message: string;
  createdAt: string;
};

type AdminSession = {
  authenticated: boolean;
};

type AdminPageSetting = {
  id: string;
  key: ManagedPageKey;
  label: string;
  href: string;
  isEnabled: string;
  updatedAt: string;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function Sidebar({ onLogout }: { onLogout: () => void }) {
  return (
    <aside className="cnp-card p-6">
      <p className="cnp-eyebrow">Admin</p>
      <h1 className="mt-4 font-display text-5xl uppercase text-foreground">Tableau de bord</h1>
      <div className="mt-8 space-y-3">
        <a href="#pages" className="flex items-center gap-3 rounded-2xl border border-[#ead9cc] bg-[#fcf7f3] px-4 py-4 text-foreground/80 transition hover:border-primary/25 hover:text-foreground">
          <LayoutPanelLeft className="h-5 w-5 text-primary" />
          Pages du site
        </a>
        <a href="#newsletter" className="flex items-center gap-3 rounded-2xl border border-[#ead9cc] bg-[#fcf7f3] px-4 py-4 text-foreground/80 transition hover:border-primary/25 hover:text-foreground">
          <Mail className="h-5 w-5 text-primary" />
          Newsletter
        </a>
        <a href="#messages" className="flex items-center gap-3 rounded-2xl border border-[#ead9cc] bg-[#fcf7f3] px-4 py-4 text-foreground/80 transition hover:border-primary/25 hover:text-foreground">
          <Inbox className="h-5 w-5 text-primary" />
          Messages contact
        </a>
      </div>
      <Button variant="outline" className="mt-8 w-full rounded-full" onClick={onLogout}>
        Deconnexion
        <LogOut className="h-4 w-4" />
      </Button>
    </aside>
  );
}

function PageSettingsTable() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { data = [], isLoading } = useQuery<AdminPageSetting[]>({
    queryKey: ["/api/admin/page-settings"],
  });

  const updateMutation = useMutation({
    mutationFn: async ({ key, isEnabled }: { key: ManagedPageKey; isEnabled: boolean }) => {
      await apiRequest("POST", `/api/admin/page-settings/${key}`, { isEnabled });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["/api/admin/page-settings"] });
      await queryClient.invalidateQueries({ queryKey: ["/api/page-settings"] });
    },
    onError: () => {
      toast({
        title: "Mise a jour impossible",
        description: "Le statut de la page n'a pas pu etre enregistre.",
        variant: "destructive",
      });
    },
  });

  const settingsByKey = new Map(data.map((item) => [item.key, item]));

  return (
    <section id="pages" className="cnp-card p-6 md:p-8">
      <div className="flex items-center gap-3">
        <LayoutPanelLeft className="h-5 w-5 text-primary" />
        <div>
          <p className="cnp-eyebrow">Contenu</p>
          <h2 className="mt-3 font-display text-4xl uppercase text-foreground">
            Pages du site
          </h2>
        </div>
      </div>
      <p className="mt-4 max-w-2xl text-foreground/65">
        Activez ou masquez chaque page du site. Une page desactivee disparait des menus et son URL
        affiche une page introuvable.
      </p>

      <div className="mt-6 overflow-hidden rounded-[24px] border border-[#ead9cc]">
        <table className="w-full border-collapse text-left">
          <thead className="bg-[#fcf7f3] text-sm uppercase tracking-[0.18em] text-foreground/55">
            <tr>
              <th className="px-5 py-4 font-medium">Page</th>
              <th className="px-5 py-4 font-medium">Lien</th>
              <th className="px-5 py-4 font-medium">Statut</th>
              <th className="px-5 py-4 font-medium text-right">Activation</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {isLoading ? (
              <tr>
                <td className="px-5 py-5 text-foreground/60" colSpan={4}>
                  Chargement...
                </td>
              </tr>
            ) : (
              MANAGED_PAGES.map((page) => {
                const setting = settingsByKey.get(page.key);
                const isEnabled = setting?.isEnabled === "true";
                const isPending =
                  updateMutation.isPending && updateMutation.variables?.key === page.key;

                return (
                  <tr key={page.key} className="border-t border-[#f0e2d7]">
                    <td className="px-5 py-4 text-foreground">{page.label}</td>
                    <td className="px-5 py-4 text-foreground/65">{page.href}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] ${
                          isEnabled
                            ? "bg-[#f2eadf] text-[#8c551f]"
                            : "bg-[#f5f0ec] text-foreground/55"
                        }`}
                      >
                        {isEnabled ? "Activee" : "Masquee"}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-3">
                        <span className="text-sm text-foreground/55">
                          {isPending ? "Mise a jour..." : isEnabled ? "Visible" : "Cachee"}
                        </span>
                        <Switch
                          checked={isEnabled}
                          disabled={isPending}
                          onCheckedChange={(checked) => {
                            updateMutation.mutate({ key: page.key, isEnabled: checked });
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function NewsletterTable() {
  const { data = [], isLoading } = useQuery<NewsletterSubscription[]>({
    queryKey: ["/api/admin/newsletter"],
  });

  return (
    <section id="newsletter" className="cnp-card p-6 md:p-8">
      <div className="flex items-center gap-3">
        <Users className="h-5 w-5 text-primary" />
        <div>
          <p className="cnp-eyebrow">Newsletter</p>
          <h2 className="mt-3 font-display text-4xl uppercase text-foreground">
            Inscriptions
          </h2>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-[24px] border border-[#ead9cc]">
        <table className="w-full border-collapse text-left">
          <thead className="bg-[#fcf7f3] text-sm uppercase tracking-[0.18em] text-foreground/55">
            <tr>
              <th className="px-5 py-4 font-medium">Email</th>
              <th className="px-5 py-4 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {isLoading ? (
              <tr>
                <td className="px-5 py-5 text-foreground/60" colSpan={2}>
                  Chargement...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td className="px-5 py-5 text-foreground/60" colSpan={2}>
                  Aucune inscription pour le moment.
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id} className="border-t border-[#f0e2d7]">
                  <td className="px-5 py-4 text-foreground">{item.email}</td>
                  <td className="px-5 py-4 text-foreground/65">{formatDate(item.createdAt)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function MessagesTable() {
  const { data = [], isLoading } = useQuery<ContactMessage[]>({
    queryKey: ["/api/admin/contact-messages"],
  });

  return (
    <section id="messages" className="cnp-card p-6 md:p-8">
      <div className="flex items-center gap-3">
        <Inbox className="h-5 w-5 text-primary" />
        <div>
          <p className="cnp-eyebrow">Contact</p>
          <h2 className="mt-3 font-display text-4xl uppercase text-foreground">
            Messages recus
          </h2>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-[24px] border border-[#ead9cc]">
        <table className="w-full border-collapse text-left">
          <thead className="bg-[#fcf7f3] text-sm uppercase tracking-[0.18em] text-foreground/55">
            <tr>
              <th className="px-5 py-4 font-medium">Nom</th>
              <th className="px-5 py-4 font-medium">Email</th>
              <th className="px-5 py-4 font-medium">Sujet</th>
              <th className="px-5 py-4 font-medium">Message</th>
              <th className="px-5 py-4 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {isLoading ? (
              <tr>
                <td className="px-5 py-5 text-foreground/60" colSpan={5}>
                  Chargement...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td className="px-5 py-5 text-foreground/60" colSpan={5}>
                  Aucun message pour le moment.
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id} className="border-t border-[#f0e2d7] align-top">
                  <td className="px-5 py-4 text-foreground">
                    {[item.firstName, item.lastName].filter(Boolean).join(" ")}
                  </td>
                  <td className="px-5 py-4 text-foreground/70">{item.email}</td>
                  <td className="px-5 py-4 text-foreground/70">{item.subject || "Sans objet"}</td>
                  <td className="max-w-[360px] px-5 py-4 text-foreground/72">
                    {item.message}
                  </td>
                  <td className="px-5 py-4 text-foreground/65">{formatDate(item.createdAt)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const loginMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/admin/login", { username, password });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["/api/admin/session"] });
    },
    onError: () => {
      toast({
        title: "Connexion impossible",
        description: "Identifiants invalides.",
        variant: "destructive",
      });
    },
  });

  return (
    <section className="cnp-section">
      <div className="cnp-container">
        <div className="mx-auto max-w-md cnp-card p-8">
          <div className="flex items-center gap-3">
            <LockKeyhole className="h-5 w-5 text-primary" />
            <p className="cnp-eyebrow">Admin</p>
          </div>
          <h1 className="mt-5 font-display text-5xl uppercase text-foreground">Connexion</h1>
          <p className="mt-4 text-foreground/65">
            Connectez-vous pour piloter les pages du site, consulter les inscriptions newsletter
            et les messages de contact.
          </p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              loginMutation.mutate();
            }}
          >
            <Input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Nom d'utilisateur"
              className="h-12 rounded-2xl border-[#ead9cc] bg-white text-foreground"
            />
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Mot de passe"
              className="h-12 rounded-2xl border-[#ead9cc] bg-white text-foreground"
            />
            <Button className="w-full rounded-full uppercase" disabled={loginMutation.isPending}>
              {loginMutation.isPending ? "Connexion..." : "Se connecter"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function AdminPage() {
  const queryClient = useQueryClient();
  const sessionQuery = useQuery<AdminSession>({
    queryKey: ["/api/admin/session"],
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/admin/logout");
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["/api/admin/session"] });
      await queryClient.removeQueries({ queryKey: ["/api/admin/page-settings"] });
      await queryClient.removeQueries({ queryKey: ["/api/admin/newsletter"] });
      await queryClient.removeQueries({ queryKey: ["/api/admin/contact-messages"] });
    },
  });

  return (
    <div className="cnp-shell">
      <Header />
      <main>
        {sessionQuery.data?.authenticated ? (
          <section className="cnp-section">
            <div className="cnp-container grid gap-6 lg:grid-cols-[280px_1fr]">
              <Sidebar onLogout={() => logoutMutation.mutate()} />
              <div className="space-y-6">
                <PageSettingsTable />
                <NewsletterTable />
                <MessagesTable />
              </div>
            </div>
          </section>
        ) : (
          <AdminLogin />
        )}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
