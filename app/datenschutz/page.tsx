import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "iconoir-react"
import { SITE_CONFIG } from "@/siteConfig"

export const metadata = {
  title: `Datenschutz | ${SITE_CONFIG.store?.name || "Store"}`,
  description: `Privacy policy and data protection for ${SITE_CONFIG.store?.name || "Store"}`,
}

export default function DatenschutzPage() {
  const storeName = SITE_CONFIG.store?.name || "The Foodie Wagon"
  const phoneDisplay = SITE_CONFIG.contact?.phoneDisplay || SITE_CONFIG.contact?.whatsapp || ""
  const rawWhatsapp = SITE_CONFIG.contact?.whatsapp || ""
  const email = SITE_CONFIG.contact?.email || "contact@store.com"
  const address = SITE_CONFIG.contact?.address || SITE_CONFIG.store?.mapAddress || ""

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 min-h-[44px]"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold">Back to Homepage</span>
          </Link>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-4 uppercase">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Information regarding data protection and user privacy for {storeName}.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-6">
            <section className="bg-card p-6 sm:p-8 rounded-2xl border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">1. Data Controller</h2>
              <div className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <p><strong className="text-foreground">Entity:</strong> {storeName}</p>
                {address && <p><strong className="text-foreground">Address:</strong> {address}</p>}
                {email && <p><strong className="text-foreground">Email:</strong> {email}</p>}
                {phoneDisplay && <p><strong className="text-foreground">Phone:</strong> {phoneDisplay}</p>}
              </div>
            </section>

            <section className="bg-card p-6 sm:p-8 rounded-2xl border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">2. Data Collection & Processing</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We only collect necessary information provided directly by you when placing orders via WhatsApp, requesting catering, or contacting our team. We do not sell or rent your personal data to third parties.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
