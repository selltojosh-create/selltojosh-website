export const metadata = {
  title: 'Sell to Josh - CMS Studio',
  description: 'Content management for SellToJosh.com',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
