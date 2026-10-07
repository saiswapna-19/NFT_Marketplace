import {nfts,activeBids,creators,activities}from '../data';
const wait=(ms=150)=>new Promise(r=>setTimeout(r,ms));
export const getNFTs=async()=> {
  await wait();
  return nfts
}
;
export const getNFT=async id=> {
  await wait();
  return nfts.find(x=>x.id===Number(id))
}
;
export const getActiveBids=async()=> {
  await wait();
  return activeBids
}
;
export const getCreators=async()=> {
  await wait();
  return creators
}
;
export const getActivities=async()=> {
  await wait();
  return activities
}
;
export const placeBid=async(nftId,amount)=> {
  await wait();
  return {
    success:true,nftId,amount,message:'Bid placed successfully'
  }
}
;
export const saveNFT=async id=> {
  await wait();
  localStorage.setItem(`saved-nft-${id}`,'true');
  return {
    success:true,nftId:id
  }
}
;
export const removeSavedNFT=async id=> {
  await wait();
  localStorage.removeItem(`saved-nft-${id}`);
  return {
    success:true,nftId:id
  }
}
;
