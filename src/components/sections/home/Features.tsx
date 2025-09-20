'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Pill, Shield, Truck, Clock, Heart, Leaf, UserCheck, Award, Phone } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Pill,
      title: 'Prescription Management',
      description:
        'Upload prescriptions digitally and get your medications delivered safely to your door.',
      badge: 'Pharmacy',
    },
    {
      icon: Shield,
      title: 'Licensed Pharmacists',
      description:
        'All medications dispensed by certified pharmacists with rigorous quality control.',
      badge: 'Safety',
    },
    {
      icon: Truck,
      title: 'Same-Day Delivery',
      description:
        'Get your wellness products and medications delivered within 2-4 hours in metro areas.',
      badge: 'Delivery',
    },
    {
      icon: Clock,
      title: '24/7 Health Support',
      description: 'Round-the-clock consultation with our pharmacy team for medication guidance.',
      badge: 'Support',
    },
    {
      icon: Heart,
      title: 'Health Monitoring',
      description: 'Track your wellness journey with personalized health insights and reminders.',
      badge: 'Wellness',
    },
    {
      icon: Leaf,
      title: 'Natural Remedies',
      description: 'Curated selection of organic supplements and natural health products.',
      badge: 'Natural',
    },
    {
      icon: UserCheck,
      title: 'Patient Profiles',
      description:
        'Secure medication history and personalized recommendations for your health needs.',
      badge: 'Personal',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'All products sourced from certified manufacturers with full traceability.',
      badge: 'Quality',
    },
    {
      icon: Phone,
      title: 'Telehealth Ready',
      description: 'Connect with healthcare providers and get prescriptions filled seamlessly.',
      badge: 'Digital',
    },
  ];

  const handleBookConsultation = () => {
    window.location.href = '/consultation';
  };

  const handleViewProducts = () => {
    window.location.href = '/products';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Healthcare Excellence
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Complete Wellness
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Partner Online
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From prescription medications to natural supplements, HealthHub Pharmacy provides
            comprehensive healthcare solutions with professional guidance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to start your wellness journey with trusted professionals?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBookConsultation}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Book Consultation
            </button>
            <button
              onClick={handleViewProducts}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Browse Wellness Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
