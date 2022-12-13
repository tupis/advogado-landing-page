import { Container, ItemNav } from "./style";
import { useState } from "react";
import { Transition } from "@headlessui/react";

interface Props {
  items: string[];
}

const NavBar = ({ items }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const idItem = items.map((item) =>
    item
      .toLowerCase()
      .split(" ")[0]
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
  );

  return (
    <div className="w-full h-12">
      <Container className="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b-2 border-b-textColor">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0">
                <h1 className="text-white">Logo</h1>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  <ul className="flex flex-row">
                    {items.map((item, index) => {
                      return (
                        <li key={idItem[index]}>
                          <ItemNav
                            href={`#${idItem[index]}`}
                            className=" text-white px-3 py-2 rounded-md text-xl mr-5"
                          >
                            {item}
                          </ItemNav>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center p-2 text-sm text-textColor rounded-lg md:hidden hover:bg-primaryColor focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden bg-secundaryColor" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {items.map((item, index) => {
                  return (
                    <a
                      key={idItem[index]}
                      href={`#${idItem[index]}`}
                      className="hover:bg-hoverSecundaryColor text-textColor block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </Transition>
      </Container>
    </div>
  );
};

export default NavBar;
