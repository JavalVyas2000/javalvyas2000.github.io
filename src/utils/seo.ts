export function absoluteUrl(path: string): string {
  const base = "https://javalvyas2000.github.io";
  if (!path.startsWith("/")) path = `/${path}`;
  return `${base}${path}`;
}
