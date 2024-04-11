import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import "@/styles/globals.css"
export const metadata = {
  title: 'Klassenfurz',
  description: 'Klassenfurz - Eine Schülerzeitung von Philskillz_',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="de">
            <body>
                <div id="app" className="bg-t-dark-gray">
                    <Navigation />
                    <div className="content">
                        {children}
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
