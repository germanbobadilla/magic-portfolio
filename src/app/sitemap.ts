import { getPosts } from "@/utils/utils";
import { baseURL, routes as routesConfig } from "@/resources";

const locales = ['en', 'es'];

export default async function sitemap() {
  const blogPosts = getPosts(["src", "app", "[locale]", "blog", "posts"]);
  const workPosts = getPosts(["src", "app", "[locale]", "work", "projects"]);

  const blogs = locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: `${baseURL}/${locale}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }))
  );

  const works = locales.flatMap((locale) =>
    workPosts.map((post) => ({
      url: `${baseURL}/${locale}/work/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }))
  );

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = locales.flatMap((locale) =>
    activeRoutes.map((route) => ({
      url: `${baseURL}/${locale}${route !== "/" ? route : ""}`,
      lastModified: new Date().toISOString().split("T")[0],
    }))
  );

  return [...routes, ...blogs, ...works];
}
