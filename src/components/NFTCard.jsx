import { useState } from "react";
import { Heart, Clock } from "lucide-react";
import { saveNFT, removeSavedNFT } from "../services/api";

export default function NFTCard({
  nft,
  showHeart = false,
  profileCard = false,
}) {
  const [saved, setSaved] = useState(
    () =>
      nft?.id
        ? localStorage.getItem(`saved-nft-${nft.id}`) === "true"
        : false
  );
  const [bid, setBid] = useState(false);

  if (!nft) {
    return null;
  }
  const toggle = async () => {
    const next = !saved;

    setSaved(next);

    if (next) {
      await saveNFT(nft.id);
    } else {
      await removeSavedNFT(nft.id);
    }
  };
  /*PROFILE CARD*/
  if (profileCard) {
    return (
      <article className=" group card w-full rounded-[14px] p-[13px] transition hover:-translate-y-1 hover:shadow-2xl">
        {/* Image area */}
        <div className="relative h-[190px] w-full">
          {/* Liquid Wave image */}
          <img
            src="/assets/liquid-wave.png"
            alt="Liquid Wave"
            className=" block h-full w-full rounded-[11px] object-cover transition duration-500 group-hover:scale-[1.03]"/>
          {/* Papaya profile image */}
          <img
            src="/assets/figma-papaya.jpg"
            alt="Papaya"
            className=" absolute bottom-[-18px] right-6 z-50 h-9 w-9 rounded-full  border-2 border-white bg-white object-cover shadow-md"/>
        </div>
        {/* Title */}
        <div className="pt-6">
          <h3 className="text-[16px] font-semibold">
            Liquid Wave
          </h3>
        </div>
      </article>
    );
  }
  /*NORMAL NFT CARD*/
  return (
    <article
      className="group card flex h-[430px] min-h-[430px] w-full min-w-0 flex-col overflow-hidden rounded-[14px]  p-[13px] transition hover:-translate-y-1 hover:shadow-2xl">
      {/* NFT Image */}
      <div className="relative h-[190px] w-full shrink-0 overflow-hidden rounded-[11px]">
        <img
          src={nft.image}
          alt={nft.title}
          className=" block h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          onError={(e) => {
            e.currentTarget.src = "/assets/liquid-wave.png";
          }}
        />
        {/* Heart */}
        {showHeart && (
          <button
            type="button"
            onClick={toggle}
            aria-label="Save"
            className=" absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-black/35">
            <Heart
              size={15}
              className={
                saved
                  ? "fill-[#7147f5] text-[#7147f5]"
                  : "text-white"
              }
            />
          </button>
        )}
      </div>
      {/* NFT Details */}
      <div className="flex min-h-0 flex-1 flex-col">
        <h3 className="mt-3 h-[24px] shrink-0 overflow-hidden text-[16px] font-semibold leading-6">
          {nft.title}
        </h3>
        <div className="mt-3 grid h-[70px] shrink-0 grid-cols-2 text-[15px] leading-5">
          {/* Auction Time */}
          <span>
            Auction time
            <br />
            <span className="muted mt-2 inline-flex items-center gap-1">
              <Clock size={10} />
              {nft.auctionTime}
            </span>
          </span>
          {/* Current Bid */}
          <span className="text-right">
            Current Bid
            <br />
            <span className="purple mt-2 inline-block">
              {nft.currentBid}
            </span>
            <br />
            <span className="muted">
              {nft.bid}
            </span>
          </span>
        </div>

        {/* Place Bid */}
        <button
          type="button"
          onClick={() => setBid((value) => !value)}
          className=" btn-purple mt-auto h-[40px] w-full shrink-0 rounded-[7px] text-[15px] font-semibold">
          {bid ? "Bid Placed ✓" : "Place a Bid"}
        </button>
      </div>
    </article>
  );
}