import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-800 rounded-2xl text-white py-12 px-4 mb-4">
      <div className="container mx-auto text-center">
        {/* Grid for Content */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="mb-2">Email: support@zapmyjob.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                <Facebook />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                <Twitter />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                <Instagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                <Linkedin />
              </a>
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
