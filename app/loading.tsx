/**
 * Route fallback. It is a plain status spinner with no text and no <main>:
 * the streamed HTML otherwise carries a second <main> and a "Loading" message
 * ahead of the real page, which crawlers that read the raw HTML would see first.
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex min-h-[60vh] items-center justify-center bg-[#040404]"
    >
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-pink-500 border-t-transparent" />
    </div>
  );
}
