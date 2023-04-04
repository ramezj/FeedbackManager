import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router'
import { Input } from "@nextui-org/react";
import MVP from './MVP'
import "flowbite";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const NavbarComponent = (props) => {
  const router = useRouter();
  const redirectToHome = () => {
    router.push('/')
  }

  const redirectHome = () => {
    router.push('/')
  }
  const redirectDocs = () => {
    router.push('/Documentation')
  }
  const redirectPricing = () => {
    router.push('/Pricing')
  }

    return (
//         <nav class="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//   <a onClick={redirectHome} class="cursor-pointer flex items-center">
//       <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo"/>
//       <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Feedbacker</span>
//   </a>
//   <div class="flex md:order-2 space-x-3">
  
// <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
//   Send Feedback! 
//   </button>
// <div id="dropdown" class="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-96 dark:bg-gray-700">
// <MVP userId={"64242d7de859353bfa82d4fa"}/>   
// </div>
//       <button onClick={props.onClickRedirect} type="button" class="duration-500 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700">{props.isLoggedIn}</button>
//       <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//         <span class="sr-only">Open main menu</span>
//         <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//       </button>
//   </div>
//   <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//     <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-black md:dark:bg-black dark:border-gray-700">
//       <li>
        
//       <a href="#" onClick={redirectToHome} class="duration-500 block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-300 md:p-0 md:dark:hover:text-blue-500 dark:text-slate-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
//       </li>
//       <li>
//         <a href="#" class="duration-500 block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Docs</a>
//       </li>
//       <li>
//         <a href="#" class="duration-500 block py-2 pl-3 pr-4 text-whiterounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
//       </li>
//     </ul>
//   </div>
//   </div>
// </nav>

<>
<div className="navbar bg-black ">
  <div className="navbar-start mt-2">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-80">
        <li><button class="ml-1 btn btn-ghost normal-case text-md mt-2" onClick={redirectHome}><a>Home</a></button></li>
        <li><button class="ml-1 btn btn-ghost normal-case text-md mt-2" onClick={redirectDocs}><a>API Docs</a></button></li>
        <li><button class="ml-1 btn btn-ghost normal-case text-md mt-2" onClick={redirectPricing}><a>Pricing</a></button></li>
      </ul>
    </div>
    <button onClick={redirectHome} className="ml-1 btn btn-ghost normal-case text-xl">Feedbacker</button>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><button class="ml-1 btn btn-ghost normal-case text-md mt-2" onClick={redirectHome}><a>Home</a></button></li>
      <li><button class="ml-1 btn btn-ghost normal-case text-md mt-2" onClick={redirectDocs}><a>API Docs</a></button></li>
      <li><button class="ml-1 btn btn-ghost normal-case text-md mt-2" onClick={redirectPricing}><a>Pricing</a></button></li>
      
    </ul>
  </div>
  <div className="navbar-end space-x-3 mr-2 mt-2">

{/* <div className="dropdown dropdown-end">
  <button class="duration-500 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700">
  <label tabIndex={0}>Send Feedback</label>
  </button>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow rounded-box w-max ">
  <MVP userId={"64242d7de859353bfa82d4fa"}/>  
  </ul>
</div> */}
<button onClick={props.onClickRedirect} type="button" className="ml-1 btn btn-ghost normal-case text-lg">{props.isLoggedIn}</button>
  </div>
</div>
</>
    )
}
export default NavbarComponent