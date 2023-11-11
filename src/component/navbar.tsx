import Link from "next/link";
import { redirect } from "next/navigation";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
  { name: "Company", href: "#" },
  { name: "Company", href: "#" },
  { name: "Company", href: "#" },
  { name: "Company", href: "#" },
];
export default function NavBar() {
  const signOut = () => {
    // localStorage.clear();
    // redirect("/auth");
  };
  return (
    <header className="flex justify-center w-2/12 h-screen">
      <nav
        className="flex flex-col justify-evenly gap-y-11 h-5/6 w-full lg:px-8"
        aria-label="Global"
      >
        <div className=" h-1/3">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-11 w-11"
              src="https://space.baianat.com/assets/erpnext/images/erpnext-logo.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="h-2/3 custom-scrollbar croll-px-0.5 overflow-y-scroll scroll-smooth lg:gap-y-12 flex flex-col ">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="h-1/3 flex lg:items-end">
          <button
            type="button"
            
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log out <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
