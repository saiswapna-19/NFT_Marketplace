import {ChevronRight}from 'lucide-react';
export default function PageIntro( {title,description}) {
  return <div className="mb-7 flex items-end justify-between">
  <div>
    <h1 className="text-[17px] font-semibold"> {
      title
    }
  </h1> {
    description&&<p className="mt-1 text-[15px] muted"> {
      description
    }
  </p>
}
</div>
<div className="hidden items-center gap-1 text-[15px] muted sm:flex">Home<ChevronRight size= {11}/>
<span className="purple"> {title}</span>
</div>
</div>
}
