import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

type Props = {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
};

export const SEO = ({ title, description, pathname, children }: Props) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    icon,
    siteUrl,
  } = useSiteMetadata();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    icon: `${siteUrl}${icon}`,
    url: `${siteUrl}${pathname || ``}`,
  };
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <link rel="icon" href={seo.icon} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:icon" content={seo.icon} />
      <meta
        property="og:image:alt"
        content="The text Lingustic Antipatterns in a logo that is half white half red"
      />
      <meta property="og:description" content={seo.description} />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:locale" content="en_US" />
      <meta property="article:author" content="James Koppel"></meta>
      {children}
    </>
  );
};
