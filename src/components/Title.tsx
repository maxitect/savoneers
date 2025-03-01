import { Input } from "@/components/ui/input";

interface TitleProps {
  title: string;
  showSearch?: boolean;
  searchQuery?: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
}

export default function Title({
  title,
  showSearch = false,
  searchQuery = "",
  searchPlaceholder = "Search...",
  onSearchChange = () => {},
}: TitleProps) {
  return (
    <div className="bg-gradient-to-br from-pink1 to-pink2">
      <div className="h-[4.5rem] shadow-md"></div>
      <div className="container mx-auto p-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl uppercase font-bold text-black mb-4 md:mb-0">
            {title}
          </h1>
          {showSearch && (
            <div className="w-full md:w-1/3 relative">
              <Input
                type="search"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="bg-white border-black rounded-none pr-10"
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => {
                  /* Search happens live */
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
