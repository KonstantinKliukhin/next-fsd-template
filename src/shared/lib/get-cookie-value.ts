export function getCookieValue(cookieKey: string): string | null {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === cookieKey) {
      return decodeURIComponent(value);
    }
  }

  return null;
}
