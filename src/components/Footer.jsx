import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        {/* Left Section: Branding & Copyright */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            Shopify Dashboard
          </span>
          <span>•</span>
          <span>© {currentYear} All rights reserved.</span>
        </div>

        {/* Middle Section: Status Indicator */}
        <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          All systems operational
        </div>

        {/* Right Section: Navigation Links */}
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500 dark:text-gray-400">
          <a
            href="#support"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            Help & Support
          </a>
          <a
            href="#docs"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            API Docs
          </a>
          <a
            href="#privacy"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
