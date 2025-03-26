import { useState } from "react";
import emailjs from "@emailjs/browser";

const useEmail = () => {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const sendEmail = async (formRef) => {
    setIsSending(true);
    setError(null);

    try {
      const result = await emailjs.sendForm(
        "service_i46ck26",
        "template_fha8w07",
        formRef.current,
        "CSdNCmZ9QIYZmnOPD"
      );
      console.log("Email sent successfully:", result.text);
      setSuccess("Thanks for reaching out...Message sent successfully!");
      return true;
    } catch (err) {
      console.error("Error sending email:", err);
      setError("Failed to send the message. Please try again.");
      return false; // Indicate failure
    } finally {
      setIsSending(false);
    }
  };

  return { sendEmail, isSending, error, success };
};

export default useEmail;
