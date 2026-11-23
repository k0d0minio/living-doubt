/** The id of the contact block in the footer. */
export const contactAnchor = "contact";

/**
 * The target of a Book button. With no booking address, the button opens the contact
 * block in the footer. With one, it goes to the booking service.
 */
export function bookingHref(bookingUrl: string): string {
  const url = bookingUrl.trim();
  return url === "" ? `#${contactAnchor}` : url;
}
