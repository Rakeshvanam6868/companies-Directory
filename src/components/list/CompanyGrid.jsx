import { CompanyCard } from './CompanyCard';


export function CompanyGrid({ companies }) {
return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
{companies.map((c) => (
<CompanyCard key={c.id} company={c} />
))}
</div>
);
}