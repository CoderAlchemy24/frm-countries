'use client'

import Link from "next/link";
import  countries  from "./data/data.json";
import { useState } from "react";

export default function HomePage() {
const [search, setSearch] = useState("");
const [continent, setContinent] = useState("All");



const filtered = countries.filter((c) => {
const matchName = c.name.toLowerCase().includes(search.toLowerCase());
const matchContinent = continent === "All" || c.region === continent;
return matchName && matchContinent;
});


const continents = ["All", ...new Set(countries.map((c) => c.region))];

return (
     <main className="p-6">
    
      
   <div className="relative mb-12 flex flex-col md:flex-row justify-between gap-8 items-start">
       <span className="pointer-events-none absolute inset-y-0 left-4 top-1 flex items-center text-gray-400">
         <img src="./images/search.svg" alt="search-icon" />
       </span>
    
     <div className="flex flex-row justify-between w-full">
     <input
          type="text"
          placeholder="Search for a country"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" px-10 py-4 rounded w-full md:w-64 
                    bg-white dark:bg-gray-900
                    focus:outline-2 focus:outline-gray-300 shadow"
     />
    
     <select
     value={continent}
     onChange={(e) => setContinent(e.target.value)}
     
     className="px-3 py-2 shadow focus:outline-2 focus:outline-gray-100 rounded bg-white dark:bg-gray-900"
     >
      <option value="All" disabled>
         Filter by Region
       </option>
       <option value="All">All</option>
       {continents
         .filter((cont) => cont !== "All")
         .map((cont) => (
           <option key={cont} value={cont}>
             {cont}
           </option>
     ))}
     </select>
     </div>
     </div>
     
     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
     {filtered.map((country) => (
     <Link
     href={`/${country.alpha3Code}`}
     key={country.alpha3Code}
     className="rounded-xl shadow block bg-white dark:bg-gray-900"
     >
     <img src={country.flags.svg} alt={country.alpha3Code} 
        className="rounded-xl mb-6 w-full h-65 object-cover"/>
     <h2 className="m-6 font-extrabold text-xl">{country.name}</h2>
     <p className="my-2 mx-6"><strong>Population:</strong> {country.population.toLocaleString()}</p>
     <p className="my-2 mx-6"><strong>Region:</strong> {country.region}</p>
     <p className="my-2 mx-6"><strong>Capital:</strong> {country.capital}</p>
     
     </Link>
     ))}
     </div>
     </main>
     );
     }