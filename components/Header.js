import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => {
            router.push("/");
          }}
          className="cursor-pointer"
        />
        <form className="flex border border-gray-200 rounded-full flex-grow shadow-large max-w-3xl items-center px-6 py-3 ml-10 mr-5">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 text-blue-500 mr-3 hidden sm:inline-flex border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          url="https://media-exp2.licdn.com/dms/image/C4E03AQGO8BrpPQ26VQ/profile-displayphoto-shrink_200_200/0/1643231455293?e=1661990400&v=beta&t=dXN1tV7NthkdSsPthyVrTC9gK2kFpVMWg2e8PuxE0dc"
          className="ml-auto"
        />
      </div>

      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  );
}
export default Header;
