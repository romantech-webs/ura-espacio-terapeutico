import type { Metadata } from "next"
import { clinic } from "@/config/clinic"
import { generateLocalBusinessSchema, generateFAQSchema } from "@/lib/schema"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    template: clinic.seo.titleTemplate,
    default: clinic.seo.defaultTitle,
  },
  description: clinic.seo.defaultDescription,
  keywords: clinic.seo.keywords,
  openGraph: {
    title: clinic.seo.defaultTitle,
    description: clinic.seo.defaultDescription,
    images: [clinic.seo.ogImage],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: clinic.seo.defaultTitle,
    description: clinic.seo.defaultDescription,
    images: [clinic.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""

  return (
    <html lang="es">
      <head>
        {/* Dynamic CSS variables from config */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --color-primary: ${clinic.colors.primary};
                --color-secondary: ${clinic.colors.secondary};
                --color-accent: ${clinic.colors.accent};
                --color-neutral: ${clinic.colors.neutral};
              }
            `,
          }}
        />
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema(baseUrl)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema()),
          }}
        />
      
        <script dangerouslySetInnerHTML={{ __html: `window.__WIDGET_API_URL="http://localhost:3000";window.__PROJECT_ID="ura-espacio-terapeutico";` }} />

        <script
          src="http://localhost:3000/widget.js"
          data-project-name="URA Espacio Terapéutico"
          data-api-url="http://localhost:3000"
          data-project-id="ura-espacio-terapeutico"
          data-primary-color="#2563EB"
          defer
        ></script>
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            var sid=Math.random().toString(36).slice(2);
            var api="http://localhost:3000/api/widget/track";
            var pid="ura-espacio-terapeutico";
            function t(e){fetch(api,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectId:pid,event:e,sessionId:sid}),keepalive:true}).catch(function(){});}
            t("page_view");
            var scrolled=false;
            window.addEventListener("scroll",function(){if(!scrolled&&window.scrollY/(document.body.scrollHeight-window.innerHeight)>0.5){scrolled=true;t("scroll_50");}});
            document.addEventListener("click",function(e){if(e.target.closest("a[href^='tel:'],a[href^='mailto:'],button")){t("cta_click");}});
          })();
        ` }} />
      </body>
    </html>
  )
}
