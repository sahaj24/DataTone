import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datatone - AI Fine-Tuning with NVIDIA A100 GPUs',
  description: 'Professional AI model fine-tuning services powered by NVIDIA A100 GPUs with 40GB HBM2e memory. Specialized solutions for startups and growing companies.',
  keywords: 'AI fine-tuning, NVIDIA A100, GPU training, machine learning, startups, custom models, A100 GPUs',
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
