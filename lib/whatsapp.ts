const whatsappNumber = "918428420505";

/** Keep enquiry values as plain text until the entire message is URL encoded. */
export function buildEnquiryUrl(data: FormData): string {
  const value = (key: string, fallback = "") => String(data.get(key) || fallback);
  const message = [
    "Hi VAANAM Solar Solutions, I'd like a solar consultation.", "",
    `Name: ${value("name")}`,
    `Phone: ${value("phone")}`,
    `Property: ${value("property")}`,
    `Monthly bill: ${value("bill")}`,
    `Area: ${value("location", "Not provided")}`,
    `Message: ${value("message", "Not provided")}`,
  ].join("\n");
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
