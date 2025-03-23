
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { User, Star, Quote } from "lucide-react";

const TestimonialsPage = () => {
  const testimonials = [
    {
      quote: "I never thought investing could be this simple. Steady Growth Insight has helped me grow my savings without any prior experience. Their forex and binary trading strategies have been incredibly effective.",
      name: "Michael Johnson",
      title: "School Teacher",
      location: "New York, USA",
      rating: 5
    },
    {
      quote: "The returns on my real estate portfolio and binary trading investments have exceeded my expectations. Their team of experts truly know what they're doing.",
      name: "Sarah Williams",
      title: "Healthcare Professional",
      location: "London, UK",
      rating: 5
    },
    {
      quote: "As someone new to forex and binary trading, I appreciate how transparent and supportive the Steady Growth team has been throughout my journey.",
      name: "David Chen",
      title: "IT Specialist",
      location: "Toronto, Canada",
      rating: 5
    },
    {
      quote: "I started with the Advanced Plan and have been amazed at the consistency of returns. The 20% every 4 days has completely changed my financial outlook.",
      name: "Jessica Rodriguez",
      title: "Business Owner",
      location: "Miami, USA",
      rating: 5
    },
    {
      quote: "After trying several investment platforms, Steady Growth stands out for their personal service and exceptional returns on forex trades.",
      name: "Robert Kim",
      title: "Financial Analyst",
      location: "Seoul, South Korea",
      rating: 5
    },
    {
      quote: "The VIP plan has exceeded all my expectations. The bi-weekly returns have been consistent, and their binary trading insights are unmatched.",
      name: "Emma Thompson",
      title: "Marketing Executive",
      location: "Sydney, Australia",
      rating: 5
    },
    {
      quote: "I was hesitant about investing online, but Steady Growth's transparency and consistent returns have made me a believer in their system.",
      name: "Mohammed Al-Farsi",
      title: "Engineer",
      location: "Dubai, UAE",
      rating: 5
    },
    {
      quote: "The real estate and forex trading opportunities provided by Steady Growth have diversified my portfolio in ways I never thought possible.",
      name: "Sophia Müller",
      title: "Retired Educator",
      location: "Berlin, Germany",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-[#003049] text-white">
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What Our Investors Say</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Join thousands of satisfied investors who have trusted Steady Growth Insight with their financial future through forex, binary trading, and real estate investments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#00395b] border-white/10 text-white h-full flex flex-col">
              <CardContent className="pt-6 pb-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="bg-[#e73667] rounded-full p-2 mr-3">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-white/70">{testimonial.title}, {testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <div className="relative pl-6 flex-grow">
                  <Quote className="absolute top-0 left-0 h-5 w-5 text-[#e73667] -rotate-180" />
                  <blockquote className="text-white/90 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto bg-[#00395b] rounded-lg p-8 border border-white/10 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Community of Successful Investors</h2>
          <p className="mb-6 text-white/80">
            Experience the Steady Growth difference with our expert-managed forex and binary trading strategies, and premium real estate investments.
          </p>
          <Link to="/register" className="inline-block">
            <Button 
              className="bg-[#e73667] hover:bg-[#e73667]/90 text-white hover:translate-y-[-2px] transition-transform px-8" 
              size="lg"
            >
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default TestimonialsPage;
