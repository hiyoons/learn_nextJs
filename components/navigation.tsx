"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from '../app/styles/navigation.module.css';
export default function Navigation() {
    const path = usePathname();
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>{path === "/" ? "❤️" : ""}
                </li>
                <li><Link href="/about-us">About us</Link>{path === "/about-us" ? "🍊" : ""}
                </li>

            </ul>
        </nav>
    )
}

// 'use client'가 있음 -> event listener가 있는 component가 hydrate가 됨