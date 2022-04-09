// Setting Cookie Function
export function setToken(value: string): void {
  const domain =
    process.env.NODE_ENV === "production" ? `domain=.travoofy.com;` : "";
  const d = new Date();
  d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
  let expires = `expires=${d.toUTCString()}`;
  document.cookie = `token=${value};${expires};${domain}path=/`;
}

// Getting Cookie Function
export function getToken(defaultValue = ''): string {
  let name = "token=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return defaultValue;
}

// Deleting Cookie Function
export function deleteToken(): void {
  const domain =
    process.env.NODE_ENV === "production" ? `domain=.travoofy.com;` : "";
  const d = new Date();
  d.setTime(d.getTime() - 30 * 24 * 60 * 60 * 1000);
  let expires = `expires=${d.toUTCString()}`;
  document.cookie = `token=;${expires};${domain}path=/`;
}