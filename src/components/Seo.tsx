import { ENV } from "@/config/global.config";
import { Helmet } from "react-helmet-async";

export interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
}

const DEFAULT_DESCRIPTION =
  "A modern React Vite application optimized for SEO.";

const DEFAULT_IMAGE = "/og-image.png";

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonical,
  image = DEFAULT_IMAGE,
}: SeoProps) {
  const pageTitle = title ? `${title} | ${ENV.APP_NAME}` : ENV.APP_NAME;

  return (
    <Helmet>
      {/* Primary */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
