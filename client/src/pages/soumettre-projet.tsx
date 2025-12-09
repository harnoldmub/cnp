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
import { motion } from "framer-motion";
import {
  Loader2,
  Upload,
  FileText,
  Briefcase,
  MapPin,
  Euro,
  Video,
  Check,
  Sparkles,
  Rocket,
  Target,
  Users,
} from "lucide-react";

import logoPng from "@assets/LOGOS-CNP_1765307996147.png";
import lightbulbImg from "@assets/IMG_1357_1765314655387.png";
import patternImg from "@assets/Graphic-Pattern-03_1765314722206.png";
import tongaMbokaLogo from "@assets/Logo-PNG-01_1765314722208.png";

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

const stats = [
  { icon: Rocket, value: "50+", label: "Projets accompagnés" },
  { icon: Users, value: "18 500", label: "Visiteurs" },
  { icon: Target, value: "€2M+", label: "Levés" },
];

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
        description: "Nous avons bien reçu votre candidature.",
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
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-10"
        style={{
          backgroundImage: `url(${patternImg})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '400px',
        }}
      />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <header className="py-6 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex justify-center">
            <img
              src={logoPng}
              alt="Congo Na Paris"
              className="h-16 md:h-20"
              data-testid="img-logo"
            />
          </div>
        </header>

        <section className="py-8 md:py-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  Appel à projets 2025
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Propulsez votre{" "}
                  <span className="text-primary">projet</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                  Rejoignez la 7ème édition de Congo Na Paris et présentez votre initiative
                  devant investisseurs, partenaires et une audience de plus de 18 500 visiteurs.
                </p>
                
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 mb-8">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm"
                    >
                      <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="text-xl md:text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center lg:justify-start">
                  <img
                    src={tongaMbokaLogo}
                    alt="Tonga Mboka - Construire le Pays"
                    className="h-16 md:h-20 opacity-80"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:flex justify-center"
              >
                <img
                  src={lightbulbImg}
                  alt="Innovation Congo Na Paris"
                  className="max-h-[500px] object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-white/10">
              <div className="mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Formulaire de candidature
                </h2>
                <p className="text-gray-400">
                  Tous les champs marqués d'un * sont obligatoires
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
                          <FormLabel className="text-gray-300">Nom & Prénom *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Votre nom complet"
                              {...field}
                              className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-primary"
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
                          <FormLabel className="text-gray-300">Email *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="votre@email.com"
                              {...field}
                              className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-primary"
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
                          <FormLabel className="text-gray-300">Téléphone *</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+33 6 12 34 56 78"
                              {...field}
                              className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-primary"
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
                          <FormLabel className="text-gray-300">Nom du projet *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Titre de votre projet"
                              {...field}
                              className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-primary"
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
                        <FormLabel className="text-gray-300">
                          Description du projet * (100-2000 caractères)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Décrivez votre projet : objectifs, innovation, impact attendu..."
                            className="min-h-[180px] resize-y bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-primary"
                            {...field}
                            data-testid="textarea-description"
                          />
                        </FormControl>
                        <div className="flex justify-between items-center">
                          <FormMessage />
                          <span
                            className={`text-xs ${
                              descriptionLength < 100
                                ? "text-red-400"
                                : descriptionLength > 2000
                                ? "text-red-400"
                                : "text-gray-500"
                            }`}
                          >
                            {descriptionLength} / 2000
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
                          <FormLabel className="text-gray-300 flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            Secteur d'activité *
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger
                                className="bg-white/10 border-white/20 text-white"
                                data-testid="select-sector"
                              >
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
                          <FormLabel className="text-gray-300 flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            Localisation du projet *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ex: Kinshasa, Brazzaville, Paris..."
                              {...field}
                              className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-primary"
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
                          <FormLabel className="text-gray-300 flex items-center gap-2">
                            <Euro className="w-4 h-4" />
                            Budget estimé *
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger
                                className="bg-white/10 border-white/20 text-white"
                                data-testid="select-budget"
                              >
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
                          <FormLabel className="text-gray-300 flex items-center gap-2">
                            <Video className="w-4 h-4" />
                            Lien vidéo (optionnel)
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="url"
                              placeholder="https://youtube.com/..."
                              {...field}
                              className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-primary"
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
                        <FormLabel className="text-gray-300 flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Document de présentation (optionnel)
                        </FormLabel>
                        <FormControl>
                          <div className="border border-dashed border-white/20 rounded-lg p-6 text-center bg-white/5">
                            <Upload className="w-8 h-8 mx-auto text-gray-500 mb-2" />
                            <p className="text-sm text-gray-400 mb-2">
                              Téléversez votre fichier PDF ou PPT
                            </p>
                            <Input
                              type="url"
                              placeholder="Ou collez un lien (Google Drive, Dropbox...)"
                              className="max-w-md mx-auto bg-white/10 border-white/20 text-white placeholder:text-gray-500"
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
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border border-white/10 p-4 bg-white/5">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                            data-testid="checkbox-consent"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal text-gray-300 cursor-pointer">
                            J'accepte que mes données soient utilisées dans le cadre de
                            l'évaluation de mon projet et que l'équipe Congo Na Paris me
                            contacte concernant ma candidature. *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="pt-4 text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="px-12 rounded-full uppercase font-semibold text-lg"
                      disabled={mutation.isPending}
                      data-testid="button-submit-project"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Check className="mr-2 h-5 w-5" />
                          Soumettre mon projet
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </motion.div>
        </section>

        <footer className="py-8 px-4 sm:px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 text-sm">
              Congo Na Paris 2025 - 27 & 28 Septembre - Paris
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Pour toute question : financement@congonaparis.fr
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
