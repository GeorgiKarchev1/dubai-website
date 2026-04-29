export const WA_NUMBER = "971000000000"; // Replace with Mariya's real number
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;
export const INSTAGRAM = "https://www.instagram.com/mariya.fit.dxb/";

export const waLink = (msg: string) =>
  `${WA_BASE}?text=${encodeURIComponent(msg)}`;
