import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Presentation from "@/pages/presentation";
import Contact from "@/pages/contact";
import Programme from "@/pages/programme";
import Intervenants from "@/pages/intervenants";
import Partenaires from "@/pages/partenaires";
import Participer from "@/pages/participer";
import Magazine from "@/pages/magazine";
import SoumettreProjet from "@/pages/soumettre-projet";
import ProjetSoumis from "@/pages/projet-soumis";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/presentation" component={Presentation} />
      <Route path="/contact" component={Contact} />
      <Route path="/programme" component={Programme} />
      <Route path="/intervenants" component={Intervenants} />
      <Route path="/partenaires" component={Partenaires} />
      <Route path="/participer" component={Participer} />
      <Route path="/magazine" component={Magazine} />
      <Route path="/magazine/:id" component={Magazine} />
      <Route path="/soumettre-projet" component={SoumettreProjet} />
      <Route path="/projet-soumis" component={ProjetSoumis} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
