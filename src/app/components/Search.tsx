"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

export default function Search() {

    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        router.push(`/results/${search}`)
        setSearch('')
    }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Search"
        className="bg-gray-300 text-gray-800 p-2 rounded outline-0 font-mono w-full md:w-70 placeholder:text-gray-500" 
      />
    </form>
  )
}
