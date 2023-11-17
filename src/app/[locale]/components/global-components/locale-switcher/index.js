import { Link, usePathname } from "@/navigation";
import FlagEn from "../flag-en";
import FlagPL from "../flag-pl";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  return (
    <div className="flex flex-row gap-4 ml-6">
      <Link href={pathName} locale="pl">
        <FlagPL />
      </Link>
      <Link href={pathName} locale="en">
        <FlagEn />
      </Link>
    </div>
  );
}
