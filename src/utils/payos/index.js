import PayOS from "@payos/node";

const clientID = process.env.PAYOS_CLIENT_ID || "";
const apiKey = process.env.PAYOS_API_KEY || "";
const checksumKey = process.env.PAYOS_CHECKSUM_KEY || "";

// Robust class detection for Next.js 15 interop
const getPayOSClass = (pkg) => {
  if (typeof pkg === "function") return pkg;
  if (pkg?.default && typeof pkg.default === "function") return pkg.default;
  if (pkg?.PayOS && typeof pkg.PayOS === "function") return pkg.PayOS;
  if (pkg?.default?.PayOS && typeof pkg.default.PayOS === "function")
    return pkg.default.PayOS;
  return null;
};

const PayOSClass = getPayOSClass(PayOS);

const payos =
  PayOSClass && clientID && apiKey && checksumKey
    ? new PayOSClass(clientID, apiKey, checksumKey)
    : null;

export { payos };
export default payos;
