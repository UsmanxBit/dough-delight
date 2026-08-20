import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "iconoir-react"
import { SITE_CONFIG } from "@/siteConfig"

export const metadata = {
  title: `AGB & Terms | ${SITE_CONFIG.store?.name || "Store"}`,
  description: `General terms and conditions for ${SITE_CONFIG.store?.name || "Store"}`,
}

export default function AGBPage() {
  const storeName = SITE_CONFIG.store?.name || "The Foodie Wagon"
  const phoneDisplay = SITE_CONFIG.contact?.phoneDisplay || SITE_CONFIG.contact?.whatsapp || ""
  const rawWhatsapp = SITE_CONFIG.contact?.whatsapp || ""
  const email = SITE_CONFIG.contact?.email || "contact@store.com"

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
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-4 uppercase">
              Terms & Conditions (AGB)
            </h1>
            <p className="text-muted-foreground">
              General terms of service and order fulfillment for {storeName}.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-6">
            <section className="bg-card p-6 sm:p-8 rounded-2xl border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">1. Scope of Service</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                These terms govern all orders placed directly at the food truck or submitted online via our WhatsApp order workflow. All food and drinks are freshly prepared according to health, hygiene, and dietary standards.
              </p>
            </section>

            <section className="bg-card p-6 sm:p-8 rounded-2xl border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">2. Orders & Payment</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Orders submitted via WhatsApp will be confirmed with estimated preparation and delivery times. Payment can be fulfilled via cash on delivery or accepted digital payment methods upon confirmation.
              </p>
            </section>

            <section className="bg-card p-6 sm:p-8 rounded-2xl border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">3. Inquiries & Support</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For questions regarding terms, catering bookings, or special dietary requirements, please contact us at {phoneDisplay} or via email at {email}.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
