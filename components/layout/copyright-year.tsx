"use client";
import { useEffect, useState } from "react";
export function CopyrightYear() {
    const [year, setYear] = useState<number>();
    useEffect(() => setYear(new Date().getFullYear()), []);
    return <span>{year}</span>;
}
