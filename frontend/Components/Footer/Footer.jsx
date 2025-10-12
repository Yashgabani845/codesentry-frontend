import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center">
           
              <Image 
                src="/images/logo.png" 
                alt="CodeSentry Logo" 
                width={150} 
                height={40} 
                className="h-8 w-auto"ed
              />
             
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Revolutionizing tech hiring with precise, AI-powered skill assessments for the modern enterprise.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-700 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/support" className="hover:text-white transition-colors">Support Center</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Sales</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-500" />
                <a href="mailto:info@codesentry.com" className="hover:text-white transition-colors">info@codesentry.com</a>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-500" />
                <a href="tel:+1-555-123-4567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
              </p>
              <address className="not-italic text-sm pt-2">
                123 Tech Avenue, Suite 100<br />
                Innovation City, CA 90210<br />
                United States
              </address>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-gray-700 mt-16 pt-8 text-sm text-center md:flex md:justify-between md:items-center">
          <p>&copy; {currentYear} CodeSentry. All rights reserved.</p>
          <div className="flex justify-center md:justify-end space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}