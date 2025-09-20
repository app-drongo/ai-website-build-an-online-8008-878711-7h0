'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Stethoscope,
  Shield,
  Calendar,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/products');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation request submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Pharmacist Hotline',
      description: 'Speak with licensed pharmacist',
      contact: '+1 (555) HEALTH-1',
      action: 'Call Pharmacist',
    },
    {
      icon: Mail,
      title: 'Prescription Support',
      description: 'Questions about medications',
      contact: 'prescriptions@healthhubpharmacy.com',
      action: 'Send Email',
    },
    {
      icon: MessageSquare,
      title: 'Live Health Chat',
      description: 'Instant wellness support',
      contact: 'Available 7AM-10PM',
      action: 'Start Chat',
    },
  ];

  const pharmacyLocations = [
    {
      city: 'Downtown Health Center',
      address: '123 Wellness Boulevard, Suite 100',
      hours: 'Mon-Fri: 8AM-8PM, Sat: 9AM-6PM',
    },
    {
      city: 'Northside Pharmacy',
      address: '456 Natural Health Drive, Floor 1',
      hours: 'Mon-Fri: 9AM-7PM, Sat: 10AM-5PM',
    },
    {
      city: 'Westfield Wellness Hub',
      address: '789 Supplement Street, Building A',
      hours: 'Mon-Sat: 8AM-9PM, Sun: 10AM-6PM',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Stethoscope className="size-4 mr-2" />
            Professional Care
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Connect with Our
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Licensed Pharmacists
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get expert health advice, prescription support, and wellness guidance from our certified
            pharmacy professionals. Your health is our priority.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Consultation Request Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="size-6 text-primary" />
                Request Pharmacist Consultation
              </CardTitle>
              <CardDescription>
                Schedule a free consultation with our licensed pharmacists within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Johnson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Health Question or Concern *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Describe your health question, medication concerns, or wellness goals..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Book Consultation
                  <Calendar className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Shield className="size-5 text-primary" />
                Professional Support
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Pharmacy Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                HealthHub Pharmacy Locations
              </h3>
              <div className="space-y-3">
                {pharmacyLocations.map((location, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{location.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{location.address}</p>
                        <p className="text-sm text-primary mt-2">{location.hours}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Licensed
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pharmacy Hours & Services */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Pharmacy Services
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Prescription Filling</span>
                    <Badge variant="outline">Same Day</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Health Consultations</span>
                    <Badge variant="outline">Free</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Medication Reviews</span>
                    <Badge variant="outline">Available</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Insurance Processing</span>
                    <Badge variant="outline">All Plans</Badge>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Stethoscope className="size-4" />
                    4.9/5 rating from 25,000+ satisfied customers
                  </p>
                </div>
                <div className="mt-4 flex gap-3">
                  <Button onClick={handlePrimaryAction} className="flex-1">
                    Browse Products
                  </Button>
                  <Button onClick={handleSecondaryAction} variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
