import { useState } from "react";
import StatCard from "../components/StatCard";
import { activities, creators, statistics } from "../data";

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
  const width = 620;
  const height = 220;
  const left = 45;
  const right = 12;
  const top = 18;
  const bottom = 28;
  const maxY = 350;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;

  const mapped = points.map(([x, y]) => [
    left + (x / 8) * plotWidth,
    top + plotHeight - (y / maxY) * plotHeight,
  ]);

  const line = mapped
    .map(([x, y], i) => `${i ? "L" : "M"} ${x} ${y}`)
    .join(" ");

  const area = `${line} L ${mapped.at(-1)[0]} ${top + plotHeight} L ${mapped[0][0]} ${top + plotHeight} Z`;

  return (
    <div className="rounded-[13px] bg-[var(--card)] p-4">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-[220px] w-full"
        preserveAspectRatio="none"
      >
        {[0, 50, 100, 150, 200, 250, 300, 350].map((value) => {
          const y = top + plotHeight - (value / maxY) * plotHeight;
          return (
            <text
              key={value}
              x="4"
              y={y + 4}
              fontSize="11"
              fill="#7147f5"
            >
              {value}
            </text>
          );
        })}

        <path d={area} fill="rgba(113,71,245,.16)" />
        <path
          d={line}
          fill="none"
          stroke="#7147f5"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {mapped.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="#7147f5" />
        ))}
      </svg>
    </div>
  );
}

function StatisticsChart() {
  return (
    <div className="card flex h-[249px] flex-col items-center justify-center rounded-[13px]">
      <div
        className="relative h-[170px] w-[170px] rounded-full border-[2px] border-white"
        style={{
          background:
            "conic-gradient(#7147f5 0deg 180deg, #252139 180deg 360deg)",
        }}
      >
        <div className="absolute inset-[12px] rounded-full border-[2px] border-white bg-[var(--card)]" />
      </div>

      <div className="mt-3 flex gap-4 text-[15px]">
        <span className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-full bg-[#7147f5]" />
          Artwork Sold
        </span>
        <span className="muted flex items-center gap-1">
          <span className="h-3 w-3 rounded-full border border-white" />
          Artwork CanCel
        </span>
      </div>
    </div>
  );
}

function RecentActivity() {
  return (
    <section>
      <div className="mb-4 flex justify-between">
        <h2 className="text-[15px] font-semibold">Recent Activity</h2>
        <button type="button" className="text-[15px] text-[#7147f5]">
          See more
        </button>
      </div>

      <div className="card overflow-hidden rounded-[13px]">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-3 border-b border-[var(--border)] px-3 py-3 last:border-0"
          >
            <img
              src={activity.avatar}
              alt="Papaya"
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-semibold">Papaya</p>
              <p className="truncate text-[15px]">{activity.title}</p>
            </div>
            <span className="text-[15px] text-[var(--muted)]">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function TopCreators() {
  const [following, setFollowing] = useState([]);

  const toggleFollow = (id) => {
    setFollowing((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <section>
      <h2 className="mb-4 text-[15px] font-semibold">Top Creators</h2>

      <div className="grid gap-3 sm:grid-cols-2">
        {creators.map((creator) => (
          <div
            key={creator.id}
            className="card flex items-center gap-3 rounded-[12px] px-3 py-3"
          >
            <img
              src={creator.avatar}
              alt={creator.name}
              className="h-8 w-8 rounded-full object-cover"
            />

            <div className="flex-1">
              <b className="text-[15px]">{creator.name}</b>
              <p className="text-[15px] text-[var(--muted)]">
                {creator.items}
              </p>
            </div>

            <button
              type="button"
              onClick={() => toggleFollow(creator.id)}
              className="rounded-md border border-[#7147f5] px-3 py-1 text-[15px] text-[#7147f5]"
            >
              {following.includes(creator.id) ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MarketGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-[.85fr_1.35fr_1fr]">
      <section className="h-[249px]">
        <h2 className="mb-4 text-[15px] font-semibold">Trending Bids</h2>
        <div className="flex h-[205px] flex-col justify-between">
          {statistics.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-[15px] font-semibold">ETH Price</h2>
        <EthChart />
      </section>

      <section>
        <h2 className="mb-4 text-[15px] font-semibold">Statistics</h2>
        <StatisticsChart />
      </section>

      <div className="mt-4 grid gap-6 lg:col-span-3 lg:grid-cols-[1fr_1.55fr]">
        <RecentActivity />
        <TopCreators />
      </div>
    </div>
  );
}
