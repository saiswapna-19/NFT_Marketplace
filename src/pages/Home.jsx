import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NFTCard from "../components/NFTCard";
import StatCard from "../components/StatCard";
import { nfts, statistics, activities, creators } from "../data";

const points = [
  [0, 0],
  [1, 105],
  [2, 92],
  [3, 155],
  [4, 140],
  [5, 205],
  [6, 120],
  [7, 92],
  [8, 125],
];

function EthChart() {
  const w = 620,
    h = 220,
    l = 45,
    r = 12,
    t = 18,
    b = 28,
    max = 350,
    pw = w - l - r,
    ph = h - t - b;

  const p = points.map(([x, y]) => [
    l + (x / 8) * pw,
    t + ph - (y / max) * ph,
  ]);

  const line = p
    .map(([x, y], i) => `${i ? "L" : "M"} ${x} ${y}`)
    .join(" ");

  const area = `${line} L ${p.at(-1)[0]} ${t + ph} L ${p[0][0]} ${t + ph} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-full w-full"
      preserveAspectRatio="none"
    >
      {[0, 50, 100, 150, 200, 250, 300, 350].map((v) => (
        <text
          key={v}
          x="4"
          y={t + ph - (v / max) * ph + 4}
          fontSize="11"
          fill="#7147f5"
        >
          {v}
        </text>
      ))}

      <path d={area} fill="rgba(113,71,245,.16)" />
      <path
        d={line}
        fill="none"
        stroke="#7147f5"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {p.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#7147f5" />
      ))}
    </svg>
  );
}

function StatisticsChart() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div
        className="relative h-[170px] w-[170px] rounded-full border-2 border-white"
        style={{
          background:
            "conic-gradient(#7147f5 0 180deg,#252139 180deg 360deg)",
        }}
      >
        <div className="absolute inset-3 rounded-full border-2 border-white bg-[var(--card)]" />
      </div>

      <div className="mt-3 flex gap-4 text-[15px]">
        <span className="flex items-center gap-1">
          <i className="h-3 w-3 rounded-full bg-[#7147f5]" />
          Artwork Sold
        </span>

        <span className="muted flex items-center gap-1">
          <i className="h-3 w-3 rounded-full border border-white" />
          Artwork CanCel
        </span>
      </div>
    </div>
  );
}

function RecentActivity() {
  return (
    <section className="flex flex-col">
      <div className="mb-4 flex justify-between">
        <h2 className="text-[15px] font-semibold">Recent Activity</h2>
        <button className="text-[15px] text-[#7147f5]">See more</button>
      </div>

      <div className="card flex-1 overflow-hidden rounded-[13px]">
        {activities.map((a) => (
          <div
            key={a.id}
            className="flex items-center gap-3 border-b border-[var(--border)] px-3 py-3 last:border-0"
          >
            <img
              src={a.avatar}
              alt=""
              className="h-8 w-8 rounded-full object-cover"
            />

            <div className="min-w-0 flex-1">
              <b className="text-[15px]">Papaya</b>
              <p className="truncate text-[15px]">{a.title}</p>
            </div>

            <span className="text-[15px] muted">{a.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function TopCreators() {
  const [following, setFollowing] = useState([]);

  const toggle = (id) =>
    setFollowing((current) =>
      current.includes(id)
        ? current.filter((x) => x !== id)
        : [...current, id]
    );

  return (
    <section className="flex flex-col">
      <h2 className="mb-4 text-[15px] font-semibold">Top Creators</h2>

      <div className="grid flex-1 gap-3 sm:grid-cols-2">
        {creators.map((c) => (
          <div
            key={c.id}
            className="card flex items-center gap-3 rounded-[12px] px-3 py-3"
          >
            <img
              src={c.avatar}
              alt={c.name}
              className="h-8 w-8 rounded-full object-cover"
            />

            <div className="min-w-0 flex-1">
              <b className="text-[15px]">{c.name}</b>
              <p className="text-[15px] muted">{c.items}</p>
            </div>

            <button
              onClick={() => toggle(c.id)}
              className="rounded-md border border-[#7147f5] px-3 py-1 text-[15px] text-[#7147f5]"
            >
              {following.includes(c.id) ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const nav = useNavigate();
  const [filter, setFilter] = useState("All");

  const list =
    filter === "All"
      ? nfts
      : nfts.filter((n) => n.category === filter);

  return (
    <>
      {/* HERO */}
      <section className="grid gap-5 lg:grid-cols-[1.05fr_1fr]">
        <div
          className="relative min-h-[224px] overflow-hidden rounded-[15px] bg-cover bg-center p-7"
          style={{ backgroundImage: "url('/assets/hero-nft.png')" }}
        >
          <div className="absolute inset-0 bg-[#5d36c7]/15" />

          <div className="relative">
            <h1 className="text-[25px] font-bold leading-[1.45] sm:text-[27px]">
              Discover, Collect, Sell
              <br />
              and Create your NFT
            </h1>

            <p className="mt-2 text-[15px] text-white/70">
              Digital marketplace for crypto collectibles and non fungable
              tokens
            </p>

            <div className="mt-7 flex gap-5">
              <button
                onClick={() =>
                  document
                    .getElementById("trending")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-purple h-10 w-[130px] rounded-lg text-[15px] font-bold"
              >
                Explore
              </button>

              <button
                onClick={() => nav("/setting")}
                className="btn-red h-10 w-[130px] rounded-lg text-[15px] font-bold"
              >
                Create
              </button>
            </div>
          </div>
        </div>

        {/* FEATURED NFT */}
        <div className="card grid min-h-[224px] gap-5 rounded-[15px] p-5 sm:grid-cols-[1.15fr_1fr]">
          <img
            src="/assets/nft-1.png"
            alt="NFT"
            className="h-full min-h-[180px] w-full rounded-[12px] object-cover"
          />

          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <img
                  src="/assets/avatar-1.png"
                  alt="John Abraham"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <b className="text-[15px]">John Abraham</b>
                <i className="h-1.5 w-1.5 rounded-full bg-[#51ce32]" />
              </div>

              <h2 className="mt-4 text-[17px] font-bold">Birghten LQ</h2>

              <div className="mt-2 grid grid-cols-2 text-[15px]">
                <span>
                  Auction time
                  <br />
                  <span className="muted">3h 1m 50s</span>
                </span>

                <span className="text-right">
                  Current Bid: <b className="purple">0.05 ETH</b>
                  <br />
                  <span className="muted">0.15 ETH</span>
                </span>
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => nav("/bids")}
                className="btn-purple h-10 flex-1 rounded-lg text-[15px] font-semibold"
              >
                Place a Bid
              </button>

              <button
                onClick={() => nav("/profile")}
                className="btn-red h-10 flex-1 rounded-lg text-[15px] font-semibold"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section id="trending" className="mt-16">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-[15px] font-semibold">Trending Bids</h2>

          <div className="flex gap-5 text-[15px]">
            {["All", "Artwork", "Book"].map((x) => (
              <button
                key={x}
                onClick={() => setFilter(x)}
                className={
                  filter === x
                    ? "rounded-full bg-[#7147f5] px-3 py-1 text-white"
                    : "muted"
                }
              >
                {x}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((n) => (
            <NFTCard key={n.id} nft={n} showHeart />
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mt-16">
        <div className="grid items-stretch gap-5 lg:grid-cols-[.85fr_1.35fr_1fr]">
          <section>
            <h2 className="mb-4 text-[15px] font-semibold">
              Trending Bids
            </h2>

            <div className="space-y-4">
              {statistics.map((item) => (
                <StatCard key={item.label} {...item} />
              ))}
            </div>
          </section>

          <section className="flex flex-col">
            <h2 className="mb-4 text-[15px] font-semibold">
              ETH Price
            </h2>

            <div className="card min-h-[300px] flex-1 rounded-[13px] p-4 lg:min-h-0">
              <EthChart />
            </div>
          </section>

          <section className="flex flex-col">
            <h2 className="mb-4 text-[15px] font-semibold">
              Statistics
            </h2>

            <div className="card min-h-[300px] flex-1 rounded-[13px] lg:min-h-0">
              <StatisticsChart />
            </div>
          </section>
        </div>
      </section>

      {/* ACTIVITY + CREATORS */}
      <section className="mt-10">
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <RecentActivity />
          <TopCreators />
        </div>
      </section>
    </>
  );
}