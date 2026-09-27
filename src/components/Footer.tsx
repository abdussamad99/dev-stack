import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="container mx-auto px-4 py-12">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="Dev Stack" className="h-8 mb-4" />
            <p className="text-sm text-footer-p leading-relaxed">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <ul className="flex flex-row gap-4 mt-6">
              <li>
                <a
                  href="#"
                  className="text-sm text-footer-h"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-footer-h"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-footer-h"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-xs font-bold tracking-wider text-footer-h mb-4">
              PRODUCT
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm   text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-xs font-bold tracking-wider text-footer-h mb-4">
              COMPANY
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm  text-gray-500 hover:text-gray-900 transition-colors "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-xs font-bold tracking-wider text-gray-900 mb-4">
              LEGAL
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>


        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            ©Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;