import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message envoye",
        description: "Notre equipe vous recontactera rapidement.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    },
    onError: () => {
      toast({
        title: "Envoi impossible",
        description: "Une erreur est survenue. Merci de reessayer.",
        variant: "destructive",
      });
    },
  });

  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        if (!formData.firstName || !formData.email || !formData.message) {
          toast({
            title: "Champs requis",
            description: "Merci de completer le prenom, l'email et le message.",
            variant: "destructive",
          });
          return;
        }
        contactMutation.mutate(formData);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          placeholder="Prenom"
          value={formData.firstName}
          onChange={(event) => setFormData({ ...formData, firstName: event.target.value })}
          className="h-12 rounded-2xl border-[#ead9cc] bg-white text-foreground placeholder:text-foreground/35"
        />
        <Input
          placeholder="Nom"
          value={formData.lastName}
          onChange={(event) => setFormData({ ...formData, lastName: event.target.value })}
          className="h-12 rounded-2xl border-[#ead9cc] bg-white text-foreground placeholder:text-foreground/35"
        />
      </div>
      <Input
        type="email"
        placeholder="Adresse email"
        value={formData.email}
        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
        className="h-12 rounded-2xl border-[#ead9cc] bg-white text-foreground placeholder:text-foreground/35"
      />
      <Input
        placeholder="Sujet"
        value={formData.subject}
        onChange={(event) => setFormData({ ...formData, subject: event.target.value })}
        className="h-12 rounded-2xl border-[#ead9cc] bg-white text-foreground placeholder:text-foreground/35"
      />
      <Textarea
        placeholder="Votre message"
        value={formData.message}
        onChange={(event) => setFormData({ ...formData, message: event.target.value })}
        className="min-h-[160px] rounded-[24px] border-[#ead9cc] bg-white text-foreground placeholder:text-foreground/35"
      />
      <Button className="rounded-full px-8 uppercase" disabled={contactMutation.isPending}>
        {contactMutation.isPending ? "Envoi..." : "Envoyer le message"}
      </Button>
    </form>
  );
}
