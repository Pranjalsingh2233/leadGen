import { SearchForm } from "@/components/features/searchForm";

export default function page() {
  return (
    <div className="text-center mt-20 ">
      <h1 className="text-3xl font-semibold mb-10 text-black">Find leads your leads which match your criteria</h1>
      <SearchForm />
    </div>
  );
}
