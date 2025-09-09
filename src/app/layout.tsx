import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datatone - Fine-Tuned AI for Startups',
  description: 'Custom AI models that adapt to your business. Professional AI fine-tuning services for startups and small companies.',
  keywords: 'AI, machine learning, fine-tuning, startups, custom models',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
