import BackToTop from "../BackToTop";

export default function BackToTopExample() {
  return (
    <div className="h-[150vh] bg-muted p-8">
      <p className="text-muted-foreground">Scroll down to see the button</p>
      <BackToTop />
    </div>
  );
}
