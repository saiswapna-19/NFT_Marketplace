import { Image, Gavel, Users, XCircle } from "lucide-react";
const icons = {
  Artworks: Image,
  Auction: Gavel,
  Creators: Users,
  Canceled: XCircle,
};
const colors = {
  Artworks: "#7147f5",
  Auction: "#ed3850",
  Creators: "#51ce32",
  Canceled: "#ed3850",
};

export default function StatCard({ label, value, change, positive = true }) {
  const Icon = icons[label] || Image;

  return (
    <div className="card flex h-[88px] min-h-[88px] items-center gap-3 rounded-[12px] px-4">
      <div
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full"
        style={{ background: colors[label] }}
      >
        <Icon size={18} color="white" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <b className="text-[18px] leading-5">{value}</b>
          {change && (
            <span
              className={`text-[14px] font-medium ${
                positive ? "text-[#4ccf39]" : "text-[#ed3850]"
              }`}
            >
              {change}
            </span>
          )}
        </div>
        <p className="mt-1 text-[14px] muted">{label}</p>
      </div>
    </div>
  );
}
