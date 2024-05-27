import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SignIn from "./signin";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Login() {

return (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-semibold mb-4 flex items-center">
      <Link href={"/"}>
        Home
      </Link>
      <ChevronRightIcon className="h-5 w-5 ml-2" />
      Login
    </h1>
    <SignIn />
  </div>
)
}
