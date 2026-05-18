import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSEO, SITE_URL } from "../data/seo";
import { SITE } from "../data/site";

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function usePageSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSEO(pathname);
    const canonical = `${SITE_URL}${seo.path}`;

    document.title = seo.title;
    setMeta("description", seo.description);
    setMeta("keywords", seo.keywords);
    setMeta("robots", "index, follow");

    setMeta("og:title", seo.title, true);
    setMeta("og:description", seo.description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", canonical, true);
    setMeta("og:locale", "es_CO", true);
    setMeta("og:site_name", SITE.name, true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", seo.title);
    setMeta("twitter:description", seo.description);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [pathname]);
}
