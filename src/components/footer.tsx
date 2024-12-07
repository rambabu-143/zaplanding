import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Button } from './ui/button'

export function Footer() {
  return (
    <footer className="bg-gray-800 rounded-2xl text-white py-16 px-4 mb-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Home</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Features</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Contact</a></li>
            </ul>
          </div> */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="mb-2">Email: support@zapmyjob.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors duration-200"><Facebook /></a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-200"><Twitter /></a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-200"><Instagram /></a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-200"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Join the ZapMyJob Revolution Today!</h3>
          <Button className="bg-white text-gray-800 hover:bg-gray-200 transition-all duration-300 text-lg px-8 py-3">
            Get Started Now
          </Button>
        </div>
        <div className="mt-12 text-center text-sm text-gray-400">
          © 2024 ZapMyJob. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

