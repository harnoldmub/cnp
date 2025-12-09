import SpeakerCard from "../SpeakerCard";
import speakerImage from "@assets/stock_images/professional_african_7fc83f19.jpg";

export default function SpeakerCardExample() {
  return (
    <div className="max-w-xs">
      <SpeakerCard
        name="Marie Lumbala"
        role="Directrice Générale, Congo Tech"
        image={speakerImage}
      />
    </div>
  );
}
