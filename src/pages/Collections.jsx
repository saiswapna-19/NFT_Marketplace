import {useState}from 'react';
import NFTCard from '../components/NFTCard';
import PageIntro from '../components/PageIntro';
import {nfts}from '../data';
export default function Collections() {
  const [f,setF]=useState('All');
  const list=f==='All'?nfts:nfts.filter(n=>n.category===f);
  return <>
  <PageIntro title="Collections" description="Welcome Collections Page"/>
  <div className="mb-4 flex gap-4 text-[15px]"> {
    ['All','Artwork','Book'].map(x=>
    <button key= {
      x
    }
    onClick= {
      ()=>setF(x)
    }
    className= {
      f===x?'rounded-full bg-[#7147f5] px-3 py-1 text-white':'muted'
    }
    > {
      x
    }
  </button>)
}
</div>
<div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4"> {
  list.map(n=>
  <NFTCard key= {
    n.id
  }
  nft= {
    n
  }
/>)
}
</div>
</>
}
