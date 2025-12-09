// Resend email integration for Congo Na Paris
import { Resend } from "resend";

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? "repl " + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
      ? "depl " + process.env.WEB_REPL_RENEWAL
      : null;

  if (!xReplitToken) {
    throw new Error("X_REPLIT_TOKEN not found for repl/depl");
  }

  connectionSettings = await fetch(
    "https://" +
      hostname +
      "/api/v2/connection?include_secrets=true&connector_names=resend",
    {
      headers: {
        Accept: "application/json",
        X_REPLIT_TOKEN: xReplitToken,
      },
    },
  )
    .then((res) => res.json())
    .then((data) => data.items?.[0]);

  if (!connectionSettings || !connectionSettings.settings.api_key) {
    throw new Error("Resend not connected");
  }
  return {
    apiKey: connectionSettings.settings.api_key,
    fromEmail: connectionSettings.settings.from_email,
  };
}

async function getUncachableResendClient() {
  const credentials = await getCredentials();
  return {
    client: new Resend(credentials.apiKey),
    fromEmail: connectionSettings.settings.from_email,
  };
}

export async function sendProjectSubmissionNotification(project: {
  fullName: string;
  email: string;
  phone: string;
  projectName: string;
  description: string;
  sector: string;
  location: string;
  budget: string;
  attachmentUrl?: string | null;
  videoLink?: string | null;
}) {
  try {
    const { client, fromEmail } = await getUncachableResendClient();

    await client.emails.send({
      from: fromEmail || "Congo Na Paris <noreply@congonaparis.fr>",
      to: ["arnold@mubuanga.com"],
      subject: `Nouveau projet soumis: ${project.projectName}`,
      html: `
        <h2>Nouveau projet soumis sur Congo Na Paris</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Nom complet</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${project.fullName}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${project.email}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Téléphone</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${project.phone}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Nom du projet</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${project.projectName}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Secteur</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${project.sector}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Localisation</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${project.location}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Budget</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${project.budget}</td></tr>
          ${project.attachmentUrl ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Document</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="${project.attachmentUrl}">${project.attachmentUrl}</a></td></tr>` : ""}
          ${project.videoLink ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Vidéo</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="${project.videoLink}">${project.videoLink}</a></td></tr>` : ""}
        </table>
        <h3>Description du projet</h3>
        <p style="white-space: pre-wrap;">${project.description}</p>
      `,
    });

    console.log("Project submission notification sent successfully");
    return true;
  } catch (error) {
    console.error("Failed to send project notification email:", error);
    return false;
  }
}

export async function sendProjectConfirmationEmail(
  email: string,
  projectName: string,
  fullName: string,
) {
  try {
    const { client, fromEmail } = await getUncachableResendClient();

    await client.emails.send({
      from: fromEmail || "Congo Na Paris <noreply@congonaparis.fr>",
      to: [email],
      subject: `Confirmation de votre soumission: ${projectName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">Merci pour votre soumission, ${fullName}!</h2>
          <p>Nous avons bien reçu votre projet <strong>"${projectName}"</strong>.</p>
          <p>Notre équipe examinera votre candidature dans les plus brefs délais et vous contactera pour vous informer de la suite donnée.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666;">L'équipe Congo Na Paris</p>
          <p style="color: #666; font-size: 12px;">27 & 28 Septembre 2025 - Paris</p>
        </div>
      `,
    });

    console.log("Project confirmation email sent to:", email);
    return true;
  } catch (error) {
    console.error("Failed to send confirmation email:", error);
    return false;
  }
}
