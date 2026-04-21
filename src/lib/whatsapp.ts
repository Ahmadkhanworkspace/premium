export const getWhatsAppLink = (message: string) => {
  const phone = "447818331940"; // Client's provided phone
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

export const WHATSAPP_MESSAGES = {
  ORDER: (plan: string) => `Hi, I would like to order the ${plan} plan from your website.`,
  RESELLER: "Hi, I am interested in becoming a reseller. Please provide more information about the panel and pricing.",
  TRIAL: "Hi, I would like to request a 24-hour free trial.",
};
