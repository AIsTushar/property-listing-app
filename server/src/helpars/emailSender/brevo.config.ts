import axios from "axios";

// Brevo API key from config
const BREVO_API_KEY = process.env.BREVO_API_KEY;

// ======== Types ========
interface EmailContact {
  email: string;
  name?: string;
}

/**
 * Send a dynamic email using Brevo SMTP API
 * @param to - Array of recipients (email + name)
 * @param subject - Email subject
 * @param htmlContent - HTML content of the email
 * @param textContent - Optional plain text fallback
 */
export async function sendEmail(
  to: EmailContact[],
  subject: string,
  htmlContent: string,
  textContent?: string
): Promise<void> {
  const endpoint = "https://api.brevo.com/v3/smtp/email";

  const payload = {
    sender: {
      name: "AIA Realty",
      email: "azizultushar98@gmail.com",
    },
    to,
    subject,
    htmlContent,
    textContent: textContent || htmlContent.replace(/<[^>]+>/g, ""),
  };

  try {
    const response = await axios.post(endpoint, payload, {
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.error("Error sending email:", error.message);
    }
  }
}
