import emailjs from "@emailjs/browser"

export const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ""
export const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ""
export const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""

export interface DevisFormData {
  nom: string
  prenom: string
  telephone: string
  email: string
  prestation: string
  commune: string
  description: string
  rgpd: boolean
}

export async function sendDevis(data: DevisFormData): Promise<void> {
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name: `${data.prenom} ${data.nom}`,
      telephone: data.telephone,
      email: data.email,
      commune: data.commune,
      description: data.description,
    },
    EMAILJS_PUBLIC_KEY
  )
}
