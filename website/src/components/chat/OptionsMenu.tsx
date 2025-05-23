import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const OptionsMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <button
      title="Options Menu"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="fixed top-5 right-8"
    >
      <RxHamburgerMenu color="white" size={28} />

      {isMenuOpen && (
        <div className="bg-neutral-700 fixed right-6 rounded-2xl p-2 min-w-xs">
          <ul className="text-white text-left text-sm">
            <li className="hover:bg-neutral-600 rounded-lg px-3 py-2">
              Signout
            </li>
            <li className="hover:bg-neutral-600 rounded-lg px-3 py-2">
              Options
            </li>
          </ul>
        </div>
      )}
    </button>
  );
};

export default OptionsMenu;
