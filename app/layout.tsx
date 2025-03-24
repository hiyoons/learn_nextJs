import { Metadata } from "next"
import Navigation from "../components/navigation"
import './styles/global.css'
export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading...",
  },
  description: 'The best movie framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}</body>
    </html>
  )
}


/*
<RootLayout>
 url분석 ->component넣기
</RootLayout>
*/