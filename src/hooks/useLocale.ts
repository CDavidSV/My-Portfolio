"use client";

import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";

import { fallbackLanguage, languages } from "../../i18next.config";

export default function useLocale(): string {
    const params = useParams();
    const pathname = usePathname();

    const localeFromParams = useMemo(() => {
        return params?.locale as string | undefined;
    }, [params.locale]);

    const localeFromPathname = useMemo(() => {
        return pathname?.split?.("/")?.[1] as string | undefined;
    }, [pathname]);

    const finalLocale = useMemo(() => {
        const decision = localeFromParams ?? localeFromPathname;
        if (!!decision && languages.includes(decision)) return decision;
        return fallbackLanguage;
    }, [localeFromParams, localeFromPathname]);

    return finalLocale;
}
