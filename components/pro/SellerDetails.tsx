import { PRO_SELLER } from "@/lib/pro/config";

const ROWS = [
  ["Seller", `${PRO_SELLER.name} (${PRO_SELLER.quotedName})`],
  ["Company code", PRO_SELLER.companyCode],
  ["VAT (PVM) code", PRO_SELLER.vatCode],
  ["Registered office", PRO_SELLER.address],
  ["Director", PRO_SELLER.director],
  ["Orders and refunds", PRO_SELLER.ordersEmail],
] as const;

/** Identity of the company that sells GTA Companion Pro. No phone number. */
export default function SellerDetails({ className = "" }: { className?: string }) {
  return (
    <dl className={className}>
      {ROWS.map(([label, value]) => (
        <div key={label} className="grid gap-1 border-t border-white/10 py-3 first:border-t-0 sm:grid-cols-[13rem_1fr] sm:gap-4">
          <dt className="text-sm font-bold text-white">{label}</dt>
          <dd className="text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            {label === "Orders and refunds" ? (
              <a href={`mailto:${value}`} className="text-pink-400 hover:text-pink-300">
                {value}
              </a>
            ) : (
              value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
