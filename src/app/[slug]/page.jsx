import Link from "next/link";
import  countries  from "../data/data.json";

export default async function CountryPage({ params }) {
const resolvedParams = await params;
const slugParam = Array.isArray(resolvedParams?.slug)
? resolvedParams.slug[0]
: resolvedParams?.slug;
const normalizedSlug = typeof slugParam === "string" ? slugParam.toUpperCase() : null;
const country = countries.find((c) => c.alpha3Code === normalizedSlug);
const borders = Array.isArray(country?.borders) ? country.borders : [];

if (!normalizedSlug || !country) {
return <div className="p-8">Country not found.</div>;
}

return (
<main className="p-8 space-y-6 ">
<Link
   href="/"
   className="inline-block px-4 py-2 border rounded hover:bg-gray-50"
   >
    Back
</Link>
<section className="flex flex-row justify-center flex-wrap gap-12 items-center">
   <img src={country.flags.svg} alt={country.alpha3Code} className="w-84"/>

   
   <div className="flex flex-col justify-center gap-3">
    
       <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{country.name}</h1>
         
        <div className="mt-4 flex flex-row flex-wrap gap-12">
        <article className="flex flex-col">
          <p><strong>Native Name:</strong> {country.nativeName}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Sub Region:</strong> {country.subregion}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
       </article>
   
       <article className="flex flex-col">
          <p><strong>Top Level Domain:</strong> {country.topLevelDomain}</p>
          <p className="py-2"><strong>Currencies:</strong> <span className="inline-flex flex-wrap gap-1 pl-1">
              {country.currencies.map((curs) => (
                <span key={curs.name} className="inline-block">
                  {curs.name}
                </span>
              ))}
            </span></p>
          <p className="py-2"><strong>Languages:</strong> <span className="inline-flex flex-wrap gap-1 pl-1">
              {country.languages.map((lang) => (
                <span key={lang.name} className="inline-block">
                  {lang.name}
                </span>
              ))}
            </span></p>
       </article> 
       </div>
     </div>
     <article className="w-full flex flex-row justify-start items-center flex-wrap gap-3">
     <h2 className="text-xl font-semibold mt-6">Borders:</h2>
       <div className="flex flex-row justify-start items-center flex-wrap gap-3 flex-wrap gap-3 mt-6">
       {borders.length === 0 ? <p>No borders</p> :
       country.borders.map((code) => (
       <Link
       key={code}
       href={`/${code}`}
       className="px-3 py-1 border shadow rounded hover:bg-gray-50"
       >
       {code}
     </Link>
))}
       </div>
   </article>
   </div>
    
</section>

</main>
);
}