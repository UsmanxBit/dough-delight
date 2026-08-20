import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "iconoir-react"
import { SITE_CONFIG } from "@/siteConfig"

export const metadata = {
  title: `Impressum | ${SITE_CONFIG.store?.name || "Store"}`,
  description: `Legal information and contact for ${SITE_CONFIG.store?.name || "Store"}`,
}

export default function ImpressumPage() {
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
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-4 uppercase">Impressum & Legal Notice</h1>
            <p className="text-muted-foreground">
              Official legal representation and operational information for {storeName}.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-6">
            
            {/* Company Information */}
            <section className="bg-card p-6 sm:p-8 rounded-2xl border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">Business Information</h2>
              <div className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <p><strong className="text-foreground">Store Name:</strong> {storeName}</p>
                <p><strong className="text-foreground">Motto:</strong> {SITE_CONFIG.store?.motto}</p>
                {address && <p><strong className="text-foreground">Address:</strong> {address}</p>}
              </div>
            </section>

            {/* Contact */}
            <section className="bg-card p-6 sm:p-8 rounded-2xl border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">Contact Information</h2>
              <div className="space-y-2 text-muted-foreground text-sm sm:text-base">
                {phoneDisplay && (
                  <p>
                    <strong className="text-foreground">Phone / WhatsApp:</strong>{" "}
                    <a href={`https://wa.me/${rawWhatsapp.replace(/\D/g, "")}`} className="text-primary hover:underline">
                      {phoneDisplay}
                    </a>
                  </p>
                )}
                {email && (
                  <p>
                    <strong className="text-foreground">Email:</strong>{" "}
                    <a href={`mailto:${email}`} className="text-primary hover:underline">
                      {email}
                    </a>
                  </p>
                )}
              </div>
            </section>

            {/* Disclaimer */}
            <section className="bg-card p-6 sm:p-8 rounded-2xl border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">Disclaimer & Liability</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The contents of our pages have been created with the greatest care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages according to statutory regulations.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
