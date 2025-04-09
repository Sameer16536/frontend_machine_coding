import { useEffect, useRef, useState } from "react";

const SearchComponent = () => {
  const data = [
    "Apple",
    "Apricot",
    "Avocado",
    "Banana",
    "Blackberry",
    "Blueberry",
    "Cherry",
    "Coconut",
    "Cranberry",
    "Date",
    "Elderberry",
    "Fig",
    "Gooseberry",
    "Grape",
    "Guava",
    "Honeydew",
    "Indian Fig",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
  ];

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]); 
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(()=>{
    if(timeoutRef.current){
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
        const filteredData = data.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
        setResults(filteredData);
    }, 500);

    return () =>  clearTimeout(timeoutRef.current!);
  }, [query]);

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md text-amber-50">
      <input
        type="text"
        placeholder="search fruit"
        className="border p-2 w-full mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        <ul>
            {results.map((item, index) => (
                <li key={index}>{item}</li>
           ) )}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
