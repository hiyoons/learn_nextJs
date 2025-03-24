

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <div>
            {children}
            &copy; NextJS is great!
        </div>
    )
}


/*
<RootLayout>
 url분석 ->component넣기
</RootLayout>
*/