import Logo from "./Logo";
import Search from "../search/Search";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-3">
      <div className="container mx-auto flex gap-20 justify-between items-center">
        <Logo />

        <Search />

        <Navigation />
      </div>
    </header>
  );
}
