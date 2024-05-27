import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Signup from "./signup";

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
export default function Register() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/*
//         This example requires updating your template:

//         ```
//         <html class="h-full bg-white">
//         <body class="h-full">
//         ```
//       */}

// <h1 className="text-3xl font-semibold mb-4 flex items-center">
//         <Link href={"/products"}>
//           Our Cats
//         </Link>
//         <ChevronRightIcon className="h-5 w-5 ml-2" />
//         Register
//       </h1>

//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" action="#" method="POST">
//             <div>
//               <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
//                 Username
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="username"
//                   name="username"
//                   type="text"
//                   // autoComplete="username"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
//                 First Name
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="firstname"
//                   name="firstname"
//                   type="text"
//                   // autoComplete="username"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
//                 Last Name
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="lastname"
//                   name="lastname"
//                   type="text"
//                   // autoComplete="username"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Register
//               </button>
//             </div>
//           </form>

//         </div>
//       </div>
//     </div>
//   )

return (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-semibold mb-4 flex items-center">
      <Link href={"/"}>
        Home
      </Link>
      <ChevronRightIcon className="h-5 w-5 ml-2" />
      Register
    </h1>
    <Signup />
  </div>
)
}
