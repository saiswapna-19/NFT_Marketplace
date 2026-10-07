
import NFTCard from '../components/NFTCard';
import PageIntro from '../components/PageIntro';
import {nfts}from '../data';
export default function Saved() {
  return <>
  <PageIntro title="Saved Items" description="Welcome Saved Page"/>
  <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4"> {
    nfts.map(n=>
    <NFTCard
      key= {n.id}
      nft= {n}
    />)
}
</div>
</>
}
