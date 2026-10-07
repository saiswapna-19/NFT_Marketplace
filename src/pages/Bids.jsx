import { useState } from "react";
import { X } from "lucide-react";
import StatCard from "../components/StatCard";
import { activeBids, bidStats } from "../data";

const columns =
  "grid-cols-[30px_minmax(150px,1.7fr)_minmax(80px,1fr)_minmax(80px,1fr)_minmax(120px,1.15fr)_minmax(80px,1fr)_30px]";

export default function Bids() {
  const [rows, setRows] = useState(activeBids);
  const [placing, setPlacing] = useState(false);
  const [amount, setAmount] = useState("");

  const removeBid = (id) => {
    setRows((current) =>
      current.filter((bid) => bid.id !== id)
    );
  };
  const submitBid = () => {
    if (!amount.trim()) {
      alert("Enter a bid amount");
      return;
    }
    alert(`Bid submitted: ${amount} ETH`);
    setAmount("");
    setPlacing(false);
  };
  const displayRows = [
    rows[0],
    rows[0],
    rows[1],
    rows[0],
    rows[0],
    rows[3],
    rows[4],
  ].filter(Boolean);

  return (
    <div>
      {/* Page Header */}
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-semibold">
            Bids
          </h1>
          <p className="mt-1 text-[15px] muted">
            Welcome Bids Page
          </p>
        </div>
        <div className="hidden text-[15px] muted sm:block">
          Home
          <span className="px-2">›</span>
          <span className="purple">
            Bids
          </span>
        </div>
      </div>
      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {bidStats.map((stat) => (
          <StatCard
            key={stat.label}
            {...stat}
          />
        ))}
      </div>

      {/* Active Bids Heading */}
      <div className="mt-9 flex items-center justify-between gap-4">
        <h2 className="text-[22px] font-semibold">
          Active Bids
        </h2>
        <button
          type="button"
          onClick={() => setPlacing(true)}
          className="btn-purple rounded-[8px] px-5 py-2.5 text-[15px] font-semibold"
        >
          Place a Bid
        </button>
      </div>
      {/* Place a Bid Form */}
      {placing && (
        <div className="card mt-5 max-w-[520px] rounded-xl p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-[17px] font-semibold">
              Place a Bid
            </h3>
            <button
              type="button"
              onClick={() => setPlacing(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
          <p className="mt-2 text-[15px] muted">
            Enter your offer for the selected NFT.
          </p>

          <input
            value={amount}
            onChange={(event) =>
              setAmount(event.target.value)
            }
            type="number"
            step="0.001"
            placeholder="0.0025 ETH"
            className="mt-5 h-11 w-full rounded-md bg-[var(--bg)] px-3 text-[15px] outline-none focus:ring-1 focus:ring-[#7147f5]"
          />
          <button
            type="button"
            onClick={submitBid}
            className="btn-purple mt-4 rounded-md px-6 py-2.5 text-[15px] font-semibold"
          >
            Submit Bid
          </button>
        </div>
      )}

      {/* Active Bids Table */}
      <div className="mt-6 w-full overflow-hidden">
        <div className="w-full">

          {/* Table Header */}
          <div
            className={`grid ${columns} items-center px-2 pb-3 text-[15px] font-semibold`}
          >
            <input
              type="checkbox"
              aria-label="Select all bids"
            />
            <span>
              Item List
            </span>
            <span>
              Open Price
            </span>
            <span>
              Your Offer
            </span>
            <span>
              Recent Offer
            </span>
            <span>
              Time Left
            </span>
            <span>
              Action
            </span>
          </div>
          {/* Table Rows */}
          <div className="space-y-2 pt-4">
            {displayRows.map((bid, index) => (
              <div
                key={`${bid.id}-${index}`}
                className={`grid ${columns} card min-h-[58px] items-center rounded-[10px] px-2 py-2 text-[15px]`}
              >
                {/* Checkbox */}
                <input
                  type="checkbox"
                  aria-label={`Select ${bid.title}`}
                />
                {/* Item */}
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
                {/* Open Price */}
                <span>
                  {bid.openPrice}
                </span>
                {/* Your Offer */}
                <span>
                  {bid.yourOffer}
                </span>
                {/* Recent Offer */}
                <div className="flex min-w-0 items-center gap-2">
                  <img
                    src={bid.bidderAvatar}
                    alt="Bidder"
                    className="h-8 w-8 shrink-0 rounded-full object-cover"
                  />
                  <span className="truncate">
                    {bid.recentOffer}
                  </span>
                </div>
                {/* Time Left */}
                <span>
                  {bid.timeLeft}
                </span>
                {/* Action */}
                <button
                  type="button"
                  onClick={() => removeBid(bid.id)}
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