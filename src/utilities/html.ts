import { LINK_REGEX, AT_REGEX } from "../Types";

export function toInnerHtml(s: string): string {
  return s
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(LINK_REGEX, (substring, linkText, link) => {
      return `<a class="underline" href="${addHttpIfNeeded(
        link
      )}">${linkText}</a>`;
    })
    .replace(/&/g, "&amp;")
    .replace(AT_REGEX, (substring, at) => {
      return `<a class="underline" href="/${at}">@${at}</a>`;
    });
}

export function addHttpIfNeeded(s: string): string {
  if (
    s.startsWith("http://") ||
    s.startsWith("https://") ||
    s.startsWith("/")
  ) {
    return s;
  }
  return `http://${s}`;
}

export function reverseString(s: string): string {
  return s.split("").reverse().join("");
}
