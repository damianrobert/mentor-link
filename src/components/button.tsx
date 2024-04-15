'use client'

import React from 'react'

const Button = (props: any) => {
  return (
    <button className="bg-zinc-100 w-full rounded-md p-1 text-slate-800 font-bold text-lg mb-6 tracking-widest">
    {props.name}
  </button>
  )
}

export default Button