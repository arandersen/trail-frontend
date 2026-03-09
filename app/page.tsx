'use client';

import React from 'react';
import Link from 'next/link';

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#e6e2d3] font-sans text-gray-900">

      {/* Main Container */}
      <div className="w-full max-w-[960px] mx-auto bg-white border-x border-b border-gray-300 sm:mt-4 flex-grow shadow-lg flex flex-col sm:rounded-b-md overflow-hidden">

        {/* Header Section */}
        <header className="w-full bg-white px-6 sm:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* TRAIL Logo */}
            <Link href="/" className="flex-shrink-0 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#001540] rounded">
              <img
                src="/images/trail_logo.gif"
                alt="TRAIL - Technical Report Archive & Image Library"
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </Link>

            {/* Social Icons */}
            <div className="flex gap-4 items-center">
              <a href="#" aria-label="Facebook" className="text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="text-gray-700 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-black rounded">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        {/* Main Search Area */}
        <main className="w-full bg-[#001540] text-white px-6 sm:px-8 py-8 sm:py-10 shadow-inner">
          <div className="max-w-3xl">
            <p className="text-[15px] sm:text-base leading-relaxed mb-6 text-gray-100">
              Search U.S. government technical reports digitized or harvested by <strong className="font-semibold text-white">TRAIL</strong>.
            </p>

            <div className="mb-2">
              <h2 className="text-sm font-semibold tracking-wider uppercase text-gray-200">Keyword Search</h2>
            </div>

            <form className="flex flex-col gap-2 w-full" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="search-input" className="text-sm text-gray-300 mb-1">
                Enter your search term(s):
              </label>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <input
                  type="text"
                  id="search-input"
                  name="q"
                  className="w-full sm:max-w-md px-3 py-2.5 bg-white border border-transparent rounded-sm text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow shadow-sm"
                  placeholder="e.g., energy, nuclear, aerospace..."
                />
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 bg-gray-100 text-[#001540] text-sm font-semibold rounded-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#001540] transition-all shadow-sm active:scale-95"
                  >
                    Search
                  </button>
                  <Link
                    href="/searchadv"
                    className="text-sm text-gray-300 hover:text-white hover:underline whitespace-nowrap transition-colors focus:outline-none focus:ring-1 focus:ring-white rounded px-1"
                  >
                    [advanced search]
                  </Link>
                </div>
              </div>
            </form>

            <div className="mt-8">
              <div className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-white border border-white/20">
                0 results returned
              </div>
            </div>
          </div>
        </main>

        {/* Middle Content Area (Quick Links + Spacer) */}
        <div className="px-6 sm:px-8 py-8 flex-grow flex flex-col bg-gray-50/50">
          <Link
            href="/"
            className="inline-block text-[#001540] font-semibold text-base hover:text-blue-700 transition-colors group"
          >
            Browse TRAIL Inventories
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-700 mt-0.5"></span>
          </Link>
        </div>

        {/* Footer */}
        <footer className="w-full px-6 sm:px-8 py-6 sm:py-8 bg-white border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-8 text-center md:text-left">

            {/* Nav & Copyright Info */}
            <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
              <nav className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2 text-sm font-semibold text-[#001540]" aria-label="Footer Navigation">
                <Link href="/" className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-1 focus:ring-[#001540] rounded px-1">About TRAIL</Link>
                <Link href="/" className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-1 focus:ring-[#001540] rounded px-1">FAQ</Link>
                <Link href="/" className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-1 focus:ring-[#001540] rounded px-1">Join TRAIL</Link>
                <Link href="/" className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-1 focus:ring-[#001540] rounded px-1">Contact Us</Link>
              </nav>

              <div className="text-xs text-gray-500 leading-relaxed max-w-sm">
                <p>
                  Search developed and maintained by the{' '}
                  <Link href="/" className="text-[#001540] font-medium hover:underline focus:outline-none focus:ring-1 focus:ring-[#001540] rounded px-0.5">
                    University of Washington Libraries
                  </Link>
                </p>
                <p className="mt-1">Copyright &copy; {new Date().getFullYear()}</p>
              </div>
            </div>

            {/* CRL Logo */}
            <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
              <a href="#" className="hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#001540] rounded inline-block">
                <img
                  src="/images/crl_logo_full.svg"
                  alt="Center for Research Libraries - Global Resources Network"
                  className="h-10 sm:h-14 w-auto object-contain grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                />
              </a>
            </div>

          </div>
        </footer>

        {/* Bottom Accent Bar */}
        <div className="w-full h-3 sm:h-4 bg-[#001540]"></div>

      </div>
    </div>
  );
}
