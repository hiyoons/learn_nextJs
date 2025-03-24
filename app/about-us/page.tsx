export const metadata = {
    title: "About us",

}


export default function Page() {
    return <div>
        <h1>About us</h1>
    </div>
}

// 'use client'지시어가 없음 => hydration되지않음(interactive하지 않게됨) =>그저 html로 존재, 인터렉티브하지 않음