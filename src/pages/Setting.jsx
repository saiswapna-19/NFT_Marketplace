import {useState}from 'react';
import {UserRound}from 'lucide-react';
import PageIntro from '../components/PageIntro';
export default function Setting() {
  const [tab,setTab]=useState('Profile'),[name,setName]=useState('John Smith'),[email,setEmail]=useState('');
  const tabs=['Profile','Application','Security','Activity','Payment Method','API'];
  return <>
  <PageIntro title="Setting" description="Welcome Setting Page"/>
  <div className="mb-8 flex gap-5 overflow-x-auto border-b border-app pb-3 text-[15px]"> {
    tabs.map(t=>
    <button key= {
      t
    }
    onClick= {
      ()=>setTab(t)
    }
    className= {
      `whitespace-nowrap ${tab===t?'font-semibold purple':'muted'}`
    }
    > {
      t
    }
  </button>)
}
</div> {
  tab!=='Profile'?<div className="card rounded-xl p-8">
  <h2 className="text-[15px] font-semibold"> {
    tab
  }
</h2>
<p className="mt-2 text-[15px] muted"> {
  tab
}
settings are available here.</p>
</div>:<>
<div className="grid gap-7 lg:grid-cols-2">
  <Form title="User profile">
    <label>Full Name</label>
    <input value= {
      name
    }
    onChange= {
      e=>setName(e.target.value)
    }
  />
  <div className="mt-3 flex items-center gap-2">
    <div className="grid h-10 w-10 place-items-center rounded-full bg-[#3030db] text-white">
      <UserRound size= {
        17
      }
    />
  </div>
  <div>
    <b className="text-[15px]"> {
      name||'John Smith'
    }
  </b>
  <p className="text-[15px] muted">Welcome Setting Page</p>
</div>
</div>
<button className="btn-purple mt-3 rounded-md px-5 py-2 text-[15px] font-semibold">Save</button>
</Form>
<Form title="Update Profile">
  <label>Email</label>
  <input value= {
    email
  }
  onChange= {
    e=>setEmail(e.target.value)
  }
  type="email"/>
  <label className="mt-3 block">Password</label>
  <input type="password"/>
  <button className="btn-purple mt-3 rounded-md px-5 py-2 text-[15px] font-semibold">Save</button>
</Form>
</div>
<section className="mt-9">
  <h2 className="mb-3 text-[15px] font-semibold">Personal Information</h2>
  <Form>
    <div className="grid gap-3 sm:grid-cols-2"> {
      Array.from( {
        length:6
      }
      ,(_,i)=>
      <div key= {
        i
      }
      >
      <label>Info</label>
      <input/>
    </div>)
  }
</div>
<button className="btn-purple mt-4 rounded-md px-5 py-2 text-[15px] font-semibold">Save</button>
</Form>
</section>
</>
}
</>
}
function Form( {
  title,children
}
) {
  return <section>
  <h2 className="mb-3 text-[15px] font-semibold"> {
    title
  }
</h2>
<div className="card rounded-xl p-4 text-[15px] [&_input]:mt-1.5 [&_input]:h-8 [&_input]:w-full [&_input]:rounded [&_input]:bg-[var(--bg)] [&_input]:px-2.5 [&_input]:outline-none"> {
  children
}
</div>
</section>
}
