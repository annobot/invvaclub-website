import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FormFrame } from "@/components/FormFrame";

export const metadata: Metadata = {
  title: "Sponsors & Corporate",
  description:
    "Partner with Invva Club for cafe footfall, brand sponsorships, kids events, and corporate games & shows in Ahmedabad.",
};

export default function SponsorsPage() {
  return (
    <FormFrame kicker="Sponsors · Corporate · Venues" title="Bring Invva to your room">
      <p className="text-muted text-lg leading-relaxed mb-4">
        We run open mics at cafes and restaurants to drive footfall, host
        games and shows for corporates, and build brand nights that feel
        alive — not stiff. Actively looking for more corporate gigs.
      </p>
      <p className="text-muted mb-10">
        Tell us what you need. We&apos;ll shape the night.
      </p>

      <ContactForm
        endpoint="/api/sponsors"
        submitLabel="Send partnership enquiry"
        successMessage="Thanks — Datt or Badal will get back to you shortly. Or call 7002472946 anytime."
        fields={[
          {
            name: "name",
            label: "Your name",
            placeholder: "Contact person",
          },
          {
            name: "organization",
            label: "Company / Cafe / Brand",
            placeholder: "Organization name",
          },
          {
            name: "phone",
            label: "Phone / WhatsApp",
            type: "tel",
            placeholder: "10-digit number",
          },
          {
            name: "email",
            label: "Work email",
            type: "email",
            placeholder: "you@company.com",
          },
          {
            name: "type",
            label: "What are you looking for?",
            as: "select",
            options: [
              { value: "corporate", label: "Corporate games / shows" },
              { value: "cafe", label: "Cafe / restaurant takeover" },
              { value: "sponsor", label: "Event sponsorship" },
              { value: "kids", label: "Kids event" },
              { value: "brand", label: "Brand collaboration" },
              { value: "other", label: "Something else" },
            ],
          },
          {
            name: "budget",
            label: "Approx. budget range (optional)",
            as: "select",
            required: false,
            options: [
              { value: "explore", label: "Still exploring" },
              { value: "under-25k", label: "Under ₹25k" },
              { value: "25-75k", label: "₹25k – ₹75k" },
              { value: "75k-plus", label: "₹75k+" },
            ],
          },
          {
            name: "details",
            label: "Project details",
            as: "textarea",
            placeholder:
              "Date window, headcount, venue, vibe you're aiming for…",
          },
        ]}
      />

      <p className="mt-10 text-sm text-muted">
        Or reach us directly:{" "}
        <a href="tel:7002472946" className="text-teal-bright hover:underline">
          7002472946
        </a>
        {" · "}
        <a
          href="mailto:badalmishr7035@gmail.com"
          className="text-teal-bright hover:underline"
        >
          badalmishr7035@gmail.com
        </a>
        {" · "}
        <Link href="/" className="text-teal-bright hover:underline">
          Back home
        </Link>
      </p>
    </FormFrame>
  );
}
