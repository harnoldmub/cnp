import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
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
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
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
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Prénom *
          </label>
          <Input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Votre prénom"
            data-testid="input-firstname"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Nom
          </label>
          <Input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Votre nom"
            data-testid="input-lastname"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Email *
        </label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="votre@email.com"
          data-testid="input-email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Sujet
        </label>
        <Input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Sujet de votre message"
          data-testid="input-subject"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Message *
        </label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message..."
          rows={5}
          className="resize-none"
          data-testid="input-message"
        />
      </div>

      <Button
        type="submit"
        className="w-full sm:w-auto rounded-full px-8 uppercase font-semibold"
        disabled={contactMutation.isPending}
        data-testid="button-send-message"
      >
        {contactMutation.isPending ? "Envoi..." : "Envoyer"}
      </Button>
    </form>
  );
}
