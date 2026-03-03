import { MetadataRoute } from "next";

const baseUrl = "https://eventsamaroh.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "services",
    "services/wedding-planning",
    "services/corporate-events",
    "services/birthday-parties",
    "services/private-parties",
    "services/decor-design",
    "contact",
    "book-event",
    "locations",
    "locations/baner",
    "locations/hinjewadi",
    "locations/kharadi",
    "locations/wakad",
    "blog",
    "blog/wedding-planning-cost-in-pune",
    "blog/best-wedding-venues-in-pune",
    "blog/how-to-plan-wedding-in-pune",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("blog") ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route.startsWith("services")
        ? 0.9
        : route.startsWith("locations")
        ? 0.8
        : route.startsWith("blog")
        ? 0.7
        : 0.6,
  }));
}