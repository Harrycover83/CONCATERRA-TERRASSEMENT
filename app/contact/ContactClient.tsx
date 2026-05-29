"use client"

import { useState } from "react"
import { toast } from "sonner"
import Link from "next/link"
import { Breadcrumb } from "@/components/common/Breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { sendDevis, type DevisFormData } from "@/lib/emailjs"
import { COMPANY, SERVICES } from "@/lib/constants"

const INITIAL_FORM: DevisFormData = {
  nom: "",
  prenom: "",
  telephone: "",
  email: "",
  prestation: "",
  commune: "",
  description: "",
  rgpd: false,
}

const PHONE_REGEX = /^(?:(?:\+|00)33|0)[1-9](?:[0-9]{8})$/

export function ContactClient() {
  const [form, setForm] = useState<DevisFormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<Partial<Record<keyof DevisFormData, string>>>({})
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof DevisFormData, string>> = {}

    if (!form.nom.trim()) newErrors.nom = "Nom requis"
    if (!form.prenom.trim()) newErrors.prenom = "Prénom requis"

    const phoneClean = form.telephone.replace(/\s/g, "")
    if (!phoneClean) {
      newErrors.telephone = "Téléphone requis"
    } else if (!PHONE_REGEX.test(phoneClean)) {
      newErrors.telephone = "Numéro de téléphone français invalide"
    }

    if (!form.email.trim()) {
      newErrors.email = "Email requis"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Adresse email invalide"
    }

    if (!form.prestation) newErrors.prestation = "Veuillez sélectionner une prestation"
    if (!form.commune.trim()) newErrors.commune = "Commune requise"
    if (!form.description.trim()) newErrors.description = "Description requise"
    if (!form.rgpd) newErrors.rgpd = "Vous devez accepter la politique de confidentialité"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
    if (errors[name as keyof DevisFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSelectChange = (value: string) => {
    setForm((prev) => ({ ...prev, prestation: value }))
    if (errors.prestation) {
      setErrors((prev) => ({ ...prev, prestation: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    try {
      await sendDevis(form)
      toast.success("Votre demande de devis a bien été envoyée ! Nous vous répondrons sous 24h.")
      setForm(INITIAL_FORM)
      setErrors({})
    } catch {
      toast.error("Une erreur s'est produite. Veuillez réessayer ou nous appeler directement.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Breadcrumb items={[{ label: "Contact & Devis", href: "/contact" }]} />

      <div className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-[#1A3020] py-16 text-white">
          <div className="container mx-auto px-4">
            <p className="text-[#D42020] font-semibold uppercase tracking-widest text-sm mb-3">
              Devis gratuit — Réponse sous 24h
            </p>
            <h1 className="font-barlow-condensed font-extrabold text-4xl sm:text-5xl uppercase mb-4">
              Contactez Concaterra Terrassement
            </h1>
            <p className="text-gray-300 max-w-xl text-lg">
              Décrivez votre projet, nous vous répondons sous 24h avec un devis
              gratuit et sans engagement.
            </p>
          </div>
        </section>

        {/* Formulaire + infos */}
        <section className="py-16 bg-[#F5F5F0]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

              {/* Formulaire */}
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8">
                <h2 className="font-barlow-condensed font-bold text-2xl text-[#1A3020] uppercase mb-6">
                  Demande de devis
                </h2>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Nom / Prénom */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="nom">Nom *</Label>
                      <Input
                        id="nom"
                        name="nom"
                        value={form.nom}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        aria-invalid={!!errors.nom}
                        aria-describedby={errors.nom ? "nom-error" : undefined}
                        autoComplete="family-name"
                      />
                      {errors.nom && (
                        <p id="nom-error" className="text-red-500 text-xs">{errors.nom}</p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input
                        id="prenom"
                        name="prenom"
                        value={form.prenom}
                        onChange={handleChange}
                        placeholder="Votre prénom"
                        aria-invalid={!!errors.prenom}
                        aria-describedby={errors.prenom ? "prenom-error" : undefined}
                        autoComplete="given-name"
                      />
                      {errors.prenom && (
                        <p id="prenom-error" className="text-red-500 text-xs">{errors.prenom}</p>
                      )}
                    </div>
                  </div>

                  {/* Téléphone / Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="telephone">Téléphone *</Label>
                      <Input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        value={form.telephone}
                        onChange={handleChange}
                        placeholder="06 XX XX XX XX"
                        aria-invalid={!!errors.telephone}
                        aria-describedby={errors.telephone ? "tel-error" : undefined}
                        autoComplete="tel"
                      />
                      {errors.telephone && (
                        <p id="tel-error" className="text-red-500 text-xs">{errors.telephone}</p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="votre@email.fr"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-500 text-xs">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Type de prestation */}
                  <div className="space-y-1">
                    <Label htmlFor="prestation">Type de prestation *</Label>
                    <Select
                      value={form.prestation}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger
                        id="prestation"
                        aria-invalid={!!errors.prestation}
                        aria-describedby={errors.prestation ? "prestation-error" : undefined}
                      >
                        <SelectValue placeholder="Sélectionner une prestation" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((s) => (
                          <SelectItem key={s.slug} value={s.slug}>
                            {s.icon} {s.title}
                          </SelectItem>
                        ))}
                        <SelectItem value="autre">Autre / Je ne sais pas</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.prestation && (
                      <p id="prestation-error" className="text-red-500 text-xs">{errors.prestation}</p>
                    )}
                  </div>

                  {/* Commune */}
                  <div className="space-y-1">
                    <Label htmlFor="commune">Commune du chantier *</Label>
                    <Input
                      id="commune"
                      name="commune"
                      value={form.commune}
                      onChange={handleChange}
                      placeholder="Ex : Gonfaron, Le Luc, Draguignan…"
                      aria-invalid={!!errors.commune}
                      aria-describedby={errors.commune ? "commune-error" : undefined}
                    />
                    {errors.commune && (
                      <p id="commune-error" className="text-red-500 text-xs">{errors.commune}</p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="space-y-1">
                    <Label htmlFor="description">Description du projet *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet : surface approximative, nature des travaux, contraintes particulières, délai souhaité…"
                      rows={5}
                      aria-invalid={!!errors.description}
                      aria-describedby={errors.description ? "desc-error" : undefined}
                    />
                    {errors.description && (
                      <p id="desc-error" className="text-red-500 text-xs">{errors.description}</p>
                    )}
                  </div>

                  {/* RGPD */}
                  <div className="space-y-1">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="rgpd"
                        checked={form.rgpd}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-[#D42020] focus:ring-[#D42020]"
                        aria-describedby={errors.rgpd ? "rgpd-error" : undefined}
                      />
                      <span className="text-sm text-gray-600">
                        J&apos;accepte que mes données soient utilisées pour traiter ma demande de devis, conformément à la{" "}
                        <Link href="/mentions-legales" className="text-[#D42020] hover:underline">
                          politique de confidentialité
                        </Link>
                        . *
                      </span>
                    </label>
                    {errors.rgpd && (
                      <p id="rgpd-error" className="text-red-500 text-xs">{errors.rgpd}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#D42020] hover:bg-[#B01A1A] text-white font-bold text-base py-3"
                  >
                    {loading ? "Envoi en cours…" : "Envoyer ma demande de devis"}
                  </Button>
                </form>
              </div>

              {/* Infos contact */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="font-barlow-condensed font-bold text-xl text-[#1A3020] uppercase mb-4">
                    Nous contacter
                  </h3>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0" aria-hidden="true">📍</span>
                      <div>
                        <p className="font-semibold">Adresse</p>
                        <p>{COMPANY.address}</p>
                        <p>{COMPANY.city}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0" aria-hidden="true">📞</span>
                      <div>
                        <p className="font-semibold">Téléphone</p>
                        <a
                          href={`tel:${COMPANY.phone}`}
                          className="text-[#D42020] hover:underline font-semibold"
                        >
                          {COMPANY.phoneFormatted}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0" aria-hidden="true">✉️</span>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a
                          href={`mailto:${COMPANY.email}`}
                          className="text-[#D42020] hover:underline break-all"
                        >
                          {COMPANY.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0" aria-hidden="true">🕐</span>
                      <div>
                        <p className="font-semibold">Horaires</p>
                        <p>Lundi – Vendredi : 7h30 – 18h00</p>
                        <p>Samedi : 8h00 – 12h00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1A3020] rounded-2xl p-6 text-white">
                  <p className="font-barlow-condensed font-bold text-xl uppercase mb-2">
                    Devis sous 24h
                  </p>
                  <p className="text-gray-300 text-sm">
                    Nous nous engageons à vous répondre sous 24h ouvrées pour
                    tout projet dans le Var (83).
                  </p>
                </div>

                <div className="bg-[#D42020]/10 border border-[#D42020]/30 rounded-2xl p-6">
                  <p className="font-semibold text-[#1A3020] mb-1">Zone d&apos;intervention</p>
                  <p className="text-sm text-gray-600">
                    Var (83) — PACA. Gonfaron, Le Luc, Toulon, Draguignan,
                    Brignoles, Hyères et tout le département.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
