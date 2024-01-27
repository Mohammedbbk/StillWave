import React from 'react';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../../src/App.css'
import '../Components/services'
import '../Components/covers'
import '../Components/plans'
import '../Components/contact'


const navigation = [
  { name: 'خدماتنا', href: '#Services' },
  { name: 'أعمالنا', href: '#covers' },
  { name: 'الباقات', href: '#Plans' },
  { name: 'تواصل معنا', href: '#contact' },
]


export default function MainBg() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const closeMobileMenu = (e) => {
    e.preventDefault(); 
    setMobileMenuOpen(false);
  };

  return (
    <div className="background-color min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1 ">
            <a href="landingPage.jsx" className="-m-1.5 p-1.5 text-3xl font-tt-forts">Still Wave
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden  lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-xl hovering font-ibm leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto background-color px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
            
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                      <a
                      style={{ direction: 'rtl' }}
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-ibm leading-7 text-gray-900 hover:bg-gray-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="background-color text-color min-h-screen flex items-center justify-center">
  <div className="px-6 pt-14 lg:px-8 text-center">
    <h1 className="font-ibm text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
      ستِل ويف
    </h1>
    <p className="font-ibm mt-6 text-xl leading-8 text-gray-600">
      منتج برامج البودكاست للأفراد والشركات الناشئة
    </p>
  </div>
</div>

    </div>
  )
}
