'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Shield,
  Stethoscope,
  Leaf,
  Clock,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Licensed Excellence',
      description:
        'Our team of licensed pharmacists ensures every product meets the highest safety and quality standards for your health.',
    },
    {
      icon: Leaf,
      title: 'Natural Wellness',
      description:
        'We specialize in natural remedies and holistic health solutions that work in harmony with your body.',
    },
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description:
        'Your health journey is unique. We provide personalized consultations and tailored wellness recommendations.',
    },
    {
      icon: Clock,
      title: 'Always Available',
      description:
        "24/7 online support and same-day prescription processing because your health can't wait.",
    },
  ];

  const stats = [
    { value: '2015', label: 'Established', icon: Award },
    { value: '25K+', label: 'Trusted Customers', icon: Users },
    { value: '4.9/5', label: 'Customer Rating', icon: Star },
    { value: '2,500+', label: 'Wellness Products', icon: Globe },
  ];

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Pharmacist & Founder',
      image: 'SM',
      bio: 'Licensed PharmD with 20+ years experience in clinical pharmacy and natural wellness.',
    },
    {
      name: 'Dr. James Rodriguez',
      role: 'Clinical Pharmacist',
      image: 'JR',
      bio: 'Specialist in medication therapy management and nutritional supplementation.',
    },
    {
      name: 'Lisa Chen',
      role: 'Wellness Consultant',
      image: 'LC',
      bio: 'Certified herbalist and nutrition expert helping customers find natural solutions.',
    },
    {
      name: 'Dr. Michael Thompson',
      role: 'Consulting Pharmacist',
      image: 'MT',
      bio: 'Former hospital pharmacist focused on preventive care and health optimization.',
    },
  ];

  const handleBookConsultation = () => {
    console.log('Booking consultation...');
  };

  const handleViewServices = () => {
    console.log('Viewing services...');
  };

  const handleContactPharmacist = () => {
    console.log('Contacting pharmacist...');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About HealthHub Pharmacy
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Trusted Partner in
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Health & Wellness
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a team of licensed pharmacists and wellness experts dedicated to providing premium
            health products and personalized care for your complete well-being.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Health Mission</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015 by Dr. Sarah Mitchell, HealthHub Pharmacy began with a simple
                vision: to bridge the gap between traditional pharmacy services and natural wellness
                solutions.
              </p>
              <p>
                After years of seeing patients struggle with limited options, we created a
                comprehensive platform that combines licensed pharmaceutical expertise with
                carefully curated natural health products and personalized wellness consultations.
              </p>
              <p>
                Today, we're proud to serve over 25,000 customers nationwide with our 4.9/5 rated
                service, helping them achieve optimal health through both traditional and natural
                approaches.
              </p>
            </div>
            <Button onClick={handleViewServices} className="group">
              Explore Our Services
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Stethoscope className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Quality healthcare and natural wellness should be accessible to everyone,
                      everywhere."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Dr. Sarah Mitchell, Founder
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Healthcare Values</h3>
            <p className="text-muted-foreground">
              The principles that guide our commitment to your health and wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Healthcare Team</h3>
            <p className="text-muted-foreground">
              Licensed pharmacists and wellness experts dedicated to your health and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button onClick={handleContactPharmacist} variant="outline" className="group">
              Contact Our Pharmacists
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Customer Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "HealthHub Pharmacy has transformed my approach to wellness. Their pharmacist
                consultations and natural product recommendations have helped me achieve better
                health than I've had in years."
              </blockquote>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  MJ
                </div>
                <div className="text-left">
                  <div className="font-semibold">Maria Johnson</div>
                  <div className="text-sm text-muted-foreground">Verified Customer</div>
                </div>
              </div>
              <Button onClick={handleBookConsultation} size="lg" className="group">
                Book Your Consultation
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
