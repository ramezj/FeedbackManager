import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router'
import { Input } from "@nextui-org/react";
import MVP from './MVP'
import "flowbite";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const NavbarComponent = (props) => {
  const router = useRouter();
  const redirectDashboard = () => {
    router.push('/Dashboard')
  }
  const redirectToHome = () => {
    router.push('/')
  }
  const redirectSignOut = () => {
    router.push('/Signout')
  }
  const redirectSignIn = () => {
    router.push('/Login')
  }
  const redirectSignUp = () => {
    router.push('/Register')
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
  const redirectSettings = () => {
    router.push('/Settings');
  }
  if(props.logged == true) {
    return (
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
    <button onClick={redirectHome} className="ml-1 btn btn-ghost normal-case text-xl"><b>Hey</b>Feedback</button>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><button class="ml-1 btn btn-ghost normal-case text-md mt-2" onClick={redirectHome}><a>Home</a></button></li>
      <li><button class="ml-1 btn btn-ghost normal-case text-md mt-2" onClick={redirectDocs}><a>API Docs</a></button></li>
      <li><button class="ml-1 btn btn-ghost normal-case text-md mt-2" onClick={redirectPricing}><a>Pricing</a></button></li>
      
    </ul>
  </div>
  <div className="navbar-end space-x-3 mr-2 mt-2">
  <div className="dropdown dropdown-end">
      <label tabIndex={0}>
        <div className="">
        <button type="button" className="ml-1 btn btn-ghost normal-case text-lg"><b className="bg-gradient-to-br from-purple-600 to-blue-500 inline-block text-transparent bg-clip-text ">{props.username}</b><svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <button onClick={redirectDashboard}>
          <a className="justify-between">
            Dashboard
          </a>
          </button>
        </li>
        <li><button onClick={redirectSettings}><a>
          Settings</a></button></li>
        <li><button onClick={redirectSignOut}><a>Logout</a></button></li>
      </ul>
    </div>
  </div>
  </div>
      </>
    )
  }
    return (
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
    <button onClick={redirectHome} className="ml-1 btn btn-ghost normal-case text-xl"><b>Hey</b>Feedback</button>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><button class="ml-1 btn btn-ghost normal-case text-md mt-2" onClick={redirectHome}><a>Home</a></button></li>
      <li><button class="ml-1 btn btn-ghost normal-case text-md mt-2" onClick={redirectDocs}><a>API Docs</a></button></li>
      <li><button class="ml-1 btn btn-ghost normal-case text-md mt-2" onClick={redirectPricing}><a>Pricing</a></button></li>
      
    </ul>
  </div>
  <div className="navbar-end space-x-3 mr-2 mt-2">
<button onClick={redirectSignUp} type="button" className="lg:px-10 md:px-10 flex items-center justify-center shadow-md shadow-purple-500/20 text-white ml-1 btn bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl normal-case text-lg">Get Started</button>
  </div>
</div>
</>
    )
}
export default NavbarComponent