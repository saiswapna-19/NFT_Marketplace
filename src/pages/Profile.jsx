import { useState } from "react";
import { Check, Lock } from "lucide-react";
import NFTCard from "../components/NFTCard";
import PageIntro from "../components/PageIntro";
import { following } from "../data";

export default function Profile() {
  const [follow, setFollow] = useState([]);

  /* PROFILE NFT DATA */
  const liquidWave = {
    title: "Liquid Wave",
    image: "/assets/liquid-wave.png",
  };

  const myBought = Array.from({ length: 4 }, (_, index) => ({
    ...liquidWave,
    id: `bought-${index + 1}`,
  }));

  const myCollections = Array.from({ length: 4 }, (_, index) => ({
    ...liquidWave,
    id: `collection-${index + 1}`,
  }));

  return (
    <>
      {/* Page Header */}
      <Page title="Profile" />

      {/* PROFILE TOP SECTION */}
      <section className="grid gap-5 lg:grid-cols-[.8fr_1.5fr]">

        {/* Profile Information */}
        <div className="card rounded-[13px] p-4">

          {/* Profile Avatar */}
          <img
            src="/assets/figma-papaya.jpg"
            alt="Papaya"
            className="h-9 w-9 rounded-full object-cover"
          />

          {/* Welcome */}
          <h2 className="mt-3 text-[15px] font-semibold">
            Welcome, John Smith
          </h2>

          <p className="mt-1 text-[15px] leading-5 muted">
            Looks like you are not verified yet. Verify yourself
            to use the full potential of Xtrader.
          </p>

          {/* Verify Account */}
          <button
            type="button"
            className="mt-3 flex items-center gap-2 text-[15px] text-[#4ccf39]"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-[#4ccf39] text-white">
              <Check size={12} />
            </span>

            Verify account
          </button>

          <hr className="my-3 border-app" />

          {/* 2FA */}
          <button
            type="button"
            className="flex items-center gap-2 text-[15px] purple"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-[#7147f5] text-white">
              <Lock size={11} />
            </span>

            Two-factor Authentication (2FA)
          </button>
        </div>

        {/* FOLLOWING */}
        <div>
          <h2 className="mb-4 text-[15px] font-semibold">
            Following
          </h2>

          <div className="grid gap-3 sm:grid-cols-2">
            {following.map((user) => (
              <div
                key={user.id}
                className="card flex items-center gap-3 rounded-xl p-3"
              >
                {/* User Avatar */}
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-8 w-8 rounded-full object-cover"
                />

                {/* User Information */}
                <div className="min-w-0 flex-1">
                  <b className="text-[15px]">
                    {user.name}
                  </b>

                  <p className="text-[15px] muted">
                    {user.items}
                  </p>
                </div>

                {/* Follow Button */}
                <button
                  type="button"
                  onClick={() =>
                    setFollow((current) =>
                      current.includes(user.id)
                        ? current.filter(
                            (id) => id !== user.id
                          )
                        : [...current, user.id]
                    )
                  }
                  className="btn-red rounded-md px-3 py-1 text-[15px] font-semibold"
                >
                  {follow.includes(user.id)
                    ? "Unfollow"
                    : "Follow"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MY BOUGHT */}
      <section className="mt-9">
        <h2 className="mb-4 text-[15px] font-semibold">
          My Bought
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {myBought.map((nft) => (
            <NFTCard
              key={nft.id}
              nft={nft}
              profileCard={true}
            />
          ))}
        </div>
      </section>

      {/* MY COLLECTIONS */}
      <section className="mt-9">
        <h2 className="mb-4 text-[15px] font-semibold">
          My Collections
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {myCollections.map((nft) => (
            <NFTCard
              key={nft.id}
              nft={nft}
              profileCard={true}
            />
          ))}
        </div>
      </section>
    </>
  );
}

/* PAGE HEADER */
function Page({ title }) {
  return (
    <PageIntro
      title={title}
      description="Welcome Profile Page"
    />
  );
}