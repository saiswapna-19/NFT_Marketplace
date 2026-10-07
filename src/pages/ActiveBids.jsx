import { X } from "lucide-react";
import { activeBids } from "../data";
const columns =
  "grid-cols-[30px_minmax(150px,1.7fr)_minmax(80px,1fr)_minmax(80px,1fr)_minmax(80px,1fr)_30px]";

export default function ActiveBids() {
  const bids = activeBids.slice(0, 5);

  return (
    <div className="w-full overflow-hidden">
      {/* PAGE HEADER */}
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-semibold">
            Active Bids
          </h1>
          <p className="mt-1 text-[15px] muted">
            View all your active bids
          </p>
        </div>

        <div className="hidden text-[15px] muted sm:block">
          Home
          <span className="px-2">›</span>
          <span className="purple">Active Bids</span>
        </div>
      </div>

      {/* TABLE */}
      <div className="w-full overflow-hidden">
        <div className="w-full">
          {/* TABLE HEADER */}
          <div
            className={`grid ${columns} items-center px-2 pb-3 text-[15px] font-semibold`}
          >
            <input
              type="checkbox"
              aria-label="Select all"
            />

            <span>Item List</span>
            <span>Bids</span>
            <span>Open Price</span>
            <span>Time Left</span>
            <span>Action</span>
          </div>
          {/* TABLE ROWS */}
          <div className="space-y-2 pt-4">
            {bids.map((bid) => (
              <div
                key={bid.id}
                className={`grid ${columns} card min-h-[58px] items-center rounded-[10px] px-2 py-2 text-[15px]`}
              >
                {/* CHECKBOX */}
                <input
                  type="checkbox"
                  aria-label={`Select ${bid.title}`}
                />
                {/* ITEM */}
                <div className="flex min-w-0 items-center gap-2">
                  <img
                    src={bid.image}
                    alt={bid.title}
                    className="h-9 w-14 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <b className="block truncate">
                      {bid.title}
                    </b>
                    <p className="truncate text-[14px] muted">
                      {bid.creator}
                    </p>
                  </div>
                </div>
                {/* BIDS */}
                <span>
                  {bid.yourOffer}
                </span>
                {/* OPEN PRICE */}
                <span>
                  {bid.openPrice}
                </span>
                {/* TIME LEFT */}
                <span>
                  {bid.timeLeft}
                </span>
                {/* ACTION */}
                <button
                  type="button"
                  aria-label={`Remove ${bid.title}`}
                  className="muted hover:text-[#ed3850]"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}