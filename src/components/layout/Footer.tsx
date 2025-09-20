'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  const footerSections = [
    {
      title: 'Pharmacy Services',
      links: [
        { name: 'Prescription Refills', href: '/products' },
        { name: 'Medication Therapy', href: '/products' },
        { name: 'Health Screenings', href: '/products' },
        { name: 'Immunizations', href: '/products' },
        { name: 'Compounding', href: '/products' },
        { name: 'Medication Sync', href: '/products' },
      ],
    },
    {
      title: 'Patient Care',
      links: [
        { name: 'About Our Pharmacists', href: '/about' },
        { name: 'Health Resources', href: '/about' },
        { name: 'Insurance Coverage', href: '/about' },
        { name: 'Transfer Prescriptions', href: '/products' },
        { name: 'Medication Reviews', href: '/products' },
        { name: 'Patient Portal', href: '/products' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Pharmacy Hours', href: '/about' },
        { name: 'Contact Pharmacist', href: '/about' },
        { name: 'Medication Guides', href: '/about' },
        { name: 'Drug Interactions', href: '/products' },
        { name: 'Side Effects Info', href: '/about' },
        { name: 'Emergency Refills', href: '/products' },
      ],
    },
    {
      title: 'Policies',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'HIPAA Compliance', href: '/terms' },
        { name: 'Prescription Terms', href: '/terms' },
        { name: 'Insurance Policies', href: '/terms' },
        { name: 'Patient Rights', href: '/terms' },
        { name: 'Medication Safety', href: '/compliance' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
  ];

  // ACTION_PLACEHOLDER_START
  const handleCTA = () => {
    router.push('/about');
  };
  // ACTION_PLACEHOLDER_END

  const handleNewsletterSignup = () => {
    console.log('Newsletter signup clicked');
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-background border-t border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">H</span>
                </div>
                <span className="font-bold text-xl">HealthHub Pharmacy</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Your trusted neighborhood pharmacy providing personalized medication management,
                health consultations, and comprehensive pharmaceutical care for over 25 years.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@healthhubpharmacy.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) HEALTH-1</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  456 Wellness Boulevard, Health District
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Health Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email for health tips"
                  className="flex-1 px-3 py-2 text-sm border border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3" onClick={handleNewsletterSignup}>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Receive medication reminders and health tips. HIPAA compliant, unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 HealthHub Pharmacy. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Caring for health with <Heart className="size-3 text-red-500 fill-current" /> since
                1999
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect with us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border/30">
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Site Directory
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Preferences
            </Link>
            <Button
              variant="link"
              size="sm"
              className="text-xs text-muted-foreground hover:text-foreground p-0 h-auto"
              onClick={handleCTA}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
