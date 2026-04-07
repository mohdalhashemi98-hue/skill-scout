"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0F",
          color: "#E0E0E0",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <div
          style={{
            maxWidth: 480,
            padding: "3rem 2rem",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16,
            background: "rgba(26,26,46,0.6)",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              marginBottom: "0.75rem",
              background: "linear-gradient(135deg, #6A5BCD, #FF6E61)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Something went wrong
          </h1>
          <p style={{ color: "rgba(224,224,224,0.5)", marginBottom: "2rem" }}>
            A critical error occurred. Please try again.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button
              onClick={reset}
              style={{
                padding: "0.75rem 2rem",
                borderRadius: 12,
                border: "none",
                background: "linear-gradient(135deg, #6A5BCD, #FF6E61)",
                color: "white",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Try Again
            </button>
            <a
              href="/"
              style={{
                padding: "0.75rem 2rem",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                color: "#E0E0E0",
                fontWeight: 500,
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Return Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
