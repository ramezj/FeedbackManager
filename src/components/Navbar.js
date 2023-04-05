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
  <div className="dropdown dropdown-end">
      <label tabIndex={0}>
        <div className="">
        <button type="button" className="ml-1 btn btn-ghost normal-case text-lg">{props.username}</button>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
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
<button onClick={props.onClickRedirect} type="button" className="ml-1 btn btn-ghost normal-case text-lg">{props.isLoggedIn}</button>
  </div>
</div>
</>
    )
}
export default NavbarComponent