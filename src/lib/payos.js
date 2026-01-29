import PayOS from "@payos/node";

/**
 * Robust PayOS Initialization for Next.js 15 / Turbopack
 */
function initializePayOS() {
  const config = {
    clientId: process.env.PAYOS_CLIENT_ID || "",
    apiKey: process.env.PAYOS_API_KEY || "",
    checksumKey: process.env.PAYOS_CHECKSUM_KEY || "",
  };

  console.log(
    "PayOS: Initializing with Client ID:",
    config.clientId ? "PRESENT" : "MISSING",
  );

  try {
    // Attempt 1: Default import is the constructor
    if (typeof PayOS === "function") {
      return new PayOS(config.clientId, config.apiKey, config.checksumKey);
    }

    // Attempt 2: Constructor is in .default
    if (PayOS?.default && typeof PayOS.default === "function") {
      return new PayOS.default(
        config.clientId,
        config.apiKey,
        config.checksumKey,
      );
    }

    // Attempt 3: Constructor is a named property
    if (PayOS?.PayOS && typeof PayOS.PayOS === "function") {
      return new PayOS.PayOS(
        config.clientId,
        config.apiKey,
        config.checksumKey,
      );
    }

    throw new Error(
      `PayOS library imported as ${typeof PayOS} but no constructor found. Keys: ${Object.keys(PayOS || {}).join(", ")}`,
    );
  } catch (err) {
    console.error("PayOS Init Failed:", err.message);
    // Return a proxy to avoid 'cannot read property of undefined' errors later
    return new Proxy(
      {},
      {
        get: () => {
          throw new Error("PayOS not initialized: " + err.message);
        },
      },
    );
  }
}

const payos = initializePayOS();

export default payos;
