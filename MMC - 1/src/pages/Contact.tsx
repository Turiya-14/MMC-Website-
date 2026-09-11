import { type FormEvent, useState } from 'react'
import PageHero from '../components/PageHero'
import { AGENCY_INFO, SERVICES } from '../data/content'
import { EASE, gsap } from '../lib/gsap'
import { useScrollReveal } from '../lib/useScrollReveal'

const CLASSIFICATIONS = ['Business', 'Political', 'Institutional'] as const
const TIMELINES = ['Immediately', 'Within 1 month', '1–3 months', '3+ months', 'Just exploring'] as const

interface FormState {
  fullName: string
  organisation: string
  mobile: string
  email: string
  serviceRequired: string
  classification: (typeof CLASSIFICATIONS)[number]
  timeline: (typeof TIMELINES)[number]
  brief: string
  consent: boolean
}

const INITIAL_STATE: FormState = {
  fullName: '',
  organisation: '',
  mobile: '',
  email: '',
  serviceRequired: SERVICES[0].title,
  classification: 'Business',
  timeline: 'Within 1 month',
  brief: '',
  consent: false,
}

const inputClasses =
  'w-full rounded-lg border border-ink/15 bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20'
const labelClasses = 'text-sm font-semibold text-ink'

function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  // NOTE: no form backend has been chosen yet (Web3Forms / Formspree / CRM —
  // see Phase 8). Until that decision is made, submitting opens a pre-filled
  // email to AGENCY_INFO.email so no enquiry silently goes nowhere.
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!form.consent) return

    const body = [
      `Full Name: ${form.fullName}`,
      `Organisation/Campaign Name: ${form.organisation}`,
      `Mobile Number: ${form.mobile}`,
      `Email: ${form.email}`,
      `Service Required: ${form.serviceRequired}`,
      `Classification: ${form.classification}`,
      `Project Timeline: ${form.timeline}`,
      '',
      'Brief:',
      form.brief,
    ].join('\n')

    window.location.href = `mailto:${AGENCY_INFO.email}?subject=${encodeURIComponent(
      `New enquiry from ${form.fullName || 'website'}`,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="fullName">
          Full Name
        </label>
        <input
          id="fullName"
          required
          className={inputClasses}
          value={form.fullName}
          onChange={(e) => update('fullName', e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="organisation">
          Organisation / Campaign Name
        </label>
        <input
          id="organisation"
          className={inputClasses}
          value={form.organisation}
          onChange={(e) => update('organisation', e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="mobile">
          Mobile Number
        </label>
        <input
          id="mobile"
          type="tel"
          required
          className={inputClasses}
          value={form.mobile}
          onChange={(e) => update('mobile', e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          className={inputClasses}
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="serviceRequired">
          Service Required
        </label>
        <select
          id="serviceRequired"
          className={inputClasses}
          value={form.serviceRequired}
          onChange={(e) => update('serviceRequired', e.target.value)}
        >
          {SERVICES.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="timeline">
          Project Timeline
        </label>
        <select
          id="timeline"
          className={inputClasses}
          value={form.timeline}
          onChange={(e) => update('timeline', e.target.value as FormState['timeline'])}
        >
          {TIMELINES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <span className={labelClasses}>This enquiry is</span>
        <div className="flex flex-wrap gap-3">
          {CLASSIFICATIONS.map((c) => (
            <label
              key={c}
              className={`inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-sm font-semibold transition-colors ${
                form.classification === c
                  ? 'border-brand-blue bg-blue-wash text-brand-blue'
                  : 'border-ink/15 text-ink/70 hover:border-ink/30'
              }`}
            >
              <input
                type="radio"
                name="classification"
                value={c}
                checked={form.classification === c}
                onChange={() => update('classification', c)}
                className="sr-only"
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label className={labelClasses} htmlFor="brief">
          Brief Requirement
        </label>
        <textarea
          id="brief"
          rows={5}
          required
          className={inputClasses}
          value={form.brief}
          onChange={(e) => update('brief', e.target.value)}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink/70 sm:col-span-2">
        <input
          type="checkbox"
          required
          checked={form.consent}
          onChange={(e) => update('consent', e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-ink/30 text-brand-blue focus:ring-brand-blue/40"
        />
        I consent to MakeMyCampaign contacting me about this enquiry.
      </label>

      <button
        type="submit"
        className="inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange sm:col-span-2"
      >
        Send Enquiry
      </button>
    </form>
  )
}

function ContactDetails() {
  const sectionRef = useScrollReveal<HTMLElement>((scope) => {
    gsap.from(scope.querySelectorAll('[data-reveal="text"]'), {
      opacity: 0,
      y: 14,
      duration: 0.9,
      ease: EASE,
      stagger: 0.08,
      scrollTrigger: { trigger: scope, start: 'top 85%' },
    })
  })

  return (
    <section ref={sectionRef} className="bg-surface px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 pb-12 text-center text-sm text-ink/60">
        <p data-reveal="text">
          Prefer to talk directly? Call {AGENCY_INFO.phonePrimary} or {AGENCY_INFO.phoneSecondary}, or write to{' '}
          <a className="font-semibold text-brand-blue hover:underline" href={`mailto:${AGENCY_INFO.email}`}>
            {AGENCY_INFO.email}
          </a>
          .
        </p>
      </div>
      <ContactForm />
    </section>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        heading="Let's build your next campaign."
        description="Tell us what you're building — a brand, an institution or a candidacy — and we'll come back with a focused point of view."
      />
      <ContactDetails />
    </>
  )
}
