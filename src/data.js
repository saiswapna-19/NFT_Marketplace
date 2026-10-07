export const navItems = [
  ["Home", "/", "Home"],
  ["Active Bids", "/active-bids", "BadgeDollarSign"],
  ["Bids", "/bids", "ClipboardList"],
  ["Saved", "/saved", "Heart"],
  ["Collections", "/collections", "Star"],
  ["Profile", "/profile", "UserRound"],
  ["Settings", "/setting", "Settings"],
];

export const nftImages = {
  liquid: "/assets/liquid-wave.png",
  cube: "/assets/cute-cube.png",
  nft1: "/assets/nft-1.png",
  nft2: "/assets/nft-2.png",
  nft3: "/assets/nft-3.png",
  nft4: "/assets/nft-4.png",
  nft5: "/assets/nft-5.png",
  nft6: "/assets/nft-6.png",
  figmaCube: "/assets/figma-cube.jpg",
  figmaLiquidPink: "/assets/figma-liquid-pink.jpg",
  figmaLiquidCircle: "/assets/figma-liquid-circle.jpg",
  figmaLiquidPurple: "/assets/figma-liquid-purple.jpg",
};

export const avatars = {
  john: "/assets/figma-profile.jpg",
  bidder: "/assets/figma-bidder.jpg",
  creator1: "/assets/figma-papaya.jpg",
  creator2: "/assets/figma-papaya.jpg",
  creator3: "/assets/figma-papaya.jpg",
  creator4: "/assets/figma-papaya.jpg",
  creator5: "/assets/figma-papaya.jpg",
  creator6: "/assets/figma-papaya.jpg",
};

export const nfts = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: "Liquid Wave",
  category: i === 2 || i === 5 ? "Book" : "Artwork",
  image: nftImages.liquid,
  creator: "John Abraham",
  creatorAvatar: avatars.john,
  auctionTime: "3h 1m 50s",
  currentBid: "0.05 ETH",
  bid: "0.15 ETH",
}));

export const activeBids = [
  {
    id: 1,
    title: "Cute Cube Cool",
    image: nftImages.figmaCube,
    creator: "John Abraham",
    openPrice: "0.0025 ETH",
    yourOffer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    timeLeft: "2 Hours 1 min 30s",
    bidderAvatar: avatars.bidder,
  },
  {
    id: 2,
    title: "Liquid Wave",
    image: nftImages.figmaLiquidPink,
    creator: "John Abraham",
    openPrice: "0.0025 ETH",
    yourOffer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    timeLeft: "2 Hours 1 min 30s",
    bidderAvatar: avatars.bidder,
  },
  {
    id: 3,
    title: "Cute Cube Cool",
    image: nftImages.figmaCube,
    creator: "John Abraham",
    openPrice: "0.0025 ETH",
    yourOffer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    timeLeft: "2 Hours 1 min 30s",
    bidderAvatar: avatars.bidder,
  },
  {
    id: 4,
    title: "Liquid Wave",
    image: nftImages.figmaLiquidCircle,
    creator: "John Abraham",
    openPrice: "0.0025 ETH",
    yourOffer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    timeLeft: "2 Hours 1 min 30s",
    bidderAvatar: avatars.bidder,
  },
  {
    id: 5,
    title: "Liquid Wave",
    image: nftImages.figmaLiquidPurple,
    creator: "John Abraham",
    openPrice: "0.0025 ETH",
    yourOffer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    timeLeft: "2 Hours 1 min 30s",
    bidderAvatar: avatars.bidder,
  },
];

export const creators = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: "Papaya",
  items: "60 Items",
  avatar: avatars.creator1,
}));

export const activities = [
  ["Purchase by you for 0.05 ETH", "12 mins ago"],
  ["0.06ETH Received", "12 mins ago"],
  ["Started Following you", "12 mins ago"],
  ["Has been sold by 12.75ETH", "12 mins ago"],
  ["Purchase by you for 0.05 ETH", "12 mins ago"],
].map(([title, time], i) => ({
  id: i + 1,
  title,
  time,
  avatar: avatars.creator1,
}));

export const following = creators.slice(0, 4);

export const statistics = [
  ["Artworks", "24K", "+168.001%", true],
  ["Auction", "89", "-168.001%", false],
  ["Creators", "82K", "+168.001%", true],
].map(([label, value, change, positive]) => ({
  label,
  value,
  change,
  positive,
}));

export const bidStats = [
  ["Artworks", "24K"],
  ["Auction", "82K"],
  ["Creators", "200"],
  ["Canceled", "89"],
].map(([label, value]) => ({ label, value }));
