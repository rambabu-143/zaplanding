import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-800 rounded-2xl text-white py-12 px-4 mb-4">
      <div className="container mx-auto text-center">
        {/* Grid for Content */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="mb-2">Email: core@xusclub.com</p>
            {/* <p>Phone: +1 (555) 123-4567</p> */}
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">

              <Link
                href="https://x.com/onlypixelspace"
                aria-label="Twitter"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                <Twitter />
              </Link>
              <Link
                href="https://www.instagram.com/the28_club/profilecard/?igsh=MWd2azZrd3Bic3ppMA=="
                aria-label="Instagram"
                target="_blank"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                <Instagram />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                target="_blank"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                <Linkedin />
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Join the ZapMyJob Revolution Today!
            </h3>
            <Button className="bg-white text-gray-800 hover:bg-gray-200 transition-all duration-300 text-lg px-8 py-3">
              Get Started Now
            </Button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            © 2024 ZapMyJob. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
