import ProgrammeItem from "../ProgrammeItem";
import conferenceImage from "@assets/stock_images/african_conference_e_984f8971.jpg";

export default function ProgrammeItemExample() {
  return (
    <ProgrammeItem
      time="10:00 - 11:30"
      title="Ouverture officielle de CNP 2025"
      description="Cérémonie d'ouverture avec les discours des organisateurs et des représentants officiels. Présentation du thème de cette 7ème édition."
      image={conferenceImage}
      imagePosition="left"
    />
  );
}
