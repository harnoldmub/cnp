import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { Loader2, Upload, FileText, Briefcase, MapPin, Euro, Video, Check } from "lucide-react";

const sectors = [
  "Agriculture & Agroalimentaire",
  "Artisanat & Mode",
  "Art & Culture",
  "BTP & Immobilier",
  "Commerce & Distribution",
  "Education & Formation",
  "Energie & Environnement",
  "Finance & Assurance",
  "Industrie & Manufacture",
  "Numérique & Technologies",
  "Santé & Bien-être",
  "Services aux entreprises",
  "Tourisme & Hôtellerie",
  "Transport & Logistique",
  "Autre",
];

const budgetRanges = [
  "Moins de 10 000 €",
  "10 000 € - 50 000 €",
  "50 000 € - 100 000 €",
  "100 000 € - 500 000 €",
  "Plus de 500 000 €",
];

const projectFormSchema = z.object({
  fullName: z.string().min(2, "Nom complet requis"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().min(8, "Numéro de téléphone requis"),
  projectName: z.string().min(3, "Nom du projet requis"),
  description: z
    .string()
    .min(100, "Description minimum 100 caractères")
    .max(2000, "Description maximum 2000 caractères"),
  sector: z.string().min(1, "Secteur d'activité requis"),
  location: z.string().min(2, "Localisation requise"),
  budget: z.string().min(1, "Budget estimé requis"),
  attachmentUrl: z.string().optional(),
  videoLink: z
    .string()
    .url("URL invalide")
    .optional()
    .or(z.literal("")),
  dataConsent: z.boolean().refine((val) => val === true, "Vous devez accepter les conditions"),
});

type ProjectFormValues = z.infer<typeof projectFormSchema>;

export default function SoumettreProjet() {
  const { toast } = useToast();
  const [, navigate] = useLocation();

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      projectName: "",
      description: "",
      sector: "",
      location: "",
      budget: "",
      attachmentUrl: "",
      videoLink: "",
      dataConsent: false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ProjectFormValues) => {
      const submissionData = {
        ...data,
        dataConsent: data.dataConsent ? "true" : "false",
        videoLink: data.videoLink || "",
        attachmentUrl: data.attachmentUrl || null,
      };
      return apiRequest("POST", "/api/project-submission", submissionData);
    },
    onSuccess: () => {
      toast({
        title: "Projet soumis avec succès",
        description: "Nous avons bien reçu votre candidature. Nous vous contacterons prochainement.",
      });
      navigate("/projet-soumis");
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ProjectFormValues) => {
    mutation.mutate(data);
  };

  const descriptionLength = form.watch("description")?.length || 0;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title="Soumettre un projet"
          subtitle="Proposez votre projet pour l'édition 2025 de Congo Na Paris"
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-card rounded-lg p-6 md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Formulaire de candidature
                </h2>
                <p className="text-muted-foreground">
                  Remplissez ce formulaire pour soumettre votre projet. Tous les champs marqués d'un * sont obligatoires.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom & Prénom *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Votre nom complet"
                              {...field}
                              data-testid="input-fullname"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="votre@email.com"
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Numéro de téléphone *</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+33 6 12 34 56 78"
                              {...field}
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom du projet *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Titre de votre projet"
                              {...field}
                              data-testid="input-project-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description du projet * (100-2000 caractères)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Décrivez votre projet en détail : objectifs, innovation, impact attendu..."
                            className="min-h-[180px] resize-y"
                            {...field}
                            data-testid="textarea-description"
                          />
                        </FormControl>
                        <div className="flex justify-between items-center">
                          <FormMessage />
                          <span
                            className={`text-xs ${
                              descriptionLength < 100
                                ? "text-destructive"
                                : descriptionLength > 2000
                                ? "text-destructive"
                                : "text-muted-foreground"
                            }`}
                          >
                            {descriptionLength} / 2000 caractères
                          </span>
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="sector"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            Secteur d'activité *
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-sector">
                                <SelectValue placeholder="Sélectionnez un secteur" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {sectors.map((sector) => (
                                <SelectItem key={sector} value={sector}>
                                  {sector}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            Localisation du projet *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ex: Kinshasa, Brazzaville, Paris..."
                              {...field}
                              data-testid="input-location"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Euro className="w-4 h-4" />
                            Budget estimé *
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-budget">
                                <SelectValue placeholder="Sélectionnez une fourchette" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="videoLink"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Video className="w-4 h-4" />
                            Lien vers une vidéo (optionnel)
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="url"
                              placeholder="https://youtube.com/..."
                              {...field}
                              data-testid="input-video-link"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="attachmentUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Document de présentation (optionnel)
                        </FormLabel>
                        <FormControl>
                          <div className="border border-dashed rounded-md p-6 text-center bg-muted/30">
                            <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                            <p className="text-sm text-muted-foreground mb-2">
                              Téléversez votre fichier PDF ou PPT
                            </p>
                            <Input
                              type="url"
                              placeholder="Ou collez un lien vers votre document (Google Drive, Dropbox...)"
                              className="max-w-md mx-auto"
                              {...field}
                              data-testid="input-attachment"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dataConsent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-muted/30">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-consent"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            J'accepte que mes données soient utilisées dans le cadre de l'évaluation
                            de mon projet et que l'équipe Congo Na Paris me contacte concernant ma candidature. *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto rounded-full px-10 uppercase font-semibold"
                      disabled={mutation.isPending}
                      data-testid="button-submit-project"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Soumettre mon projet
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
