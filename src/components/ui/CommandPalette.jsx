import { Fragment, useEffect, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/outline";

const options = [
  { id: 1, text: "Project 1" },
  { id: 2, text: "Project 2" },
  { id: 3, text: "Project 3" },
  { id: 4, text: "Project 4" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredQuery = query
    ? options.filter((option) =>
        option.text.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        setIsOpen(!isOpen);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => setQuery("")}
    >
      <Dialog
        onClose={setIsOpen}
        className="fixed inset-0 p-4 pt-[25vh] overflow-y-auto"
      >
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacoty-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />
        </Transition.Child>
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacoty-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            onChange={(value) => {
              //   console.log(value);
            }}
            as="div"
            className="relative overflow-hidden bg-white max-w-xl mx-auto rounded-xl shadow-2xl ring-1 ring-black/5 divide-y divide-gray-100"
          >
            <div className="flex items-center px-4">
              <SearchIcon className="h-6 w-6 text-gray-500" />
              <Combobox.Input
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                className="w-full bg-transparent border-0 focus:ring-0 text-sm  text-gray-800 placeholder-gray-400 h-12"
                placeholder="Search your products or brands"
              />
            </div>
            {filteredQuery.length > 0 && (
              <Combobox.Options className="py-4 text-sm max-h-96 overflow-y-auto">
                {filteredQuery.map((option) => (
                  <Combobox.Option key={option.id} value={option}>
                    {({ active }) => (
                      <div
                        className={`px-4 py-2 space-x-1 ${
                          active ? "bg-cyan-400" : ""
                        }`}
                      >
                        <span
                          className={`font-medium ${
                            active ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {option.text}
                        </span>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}

            {query && filteredQuery.length === 0 && (
              <p className="p-4 text-sm text-gray-500">No result found.</p>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
