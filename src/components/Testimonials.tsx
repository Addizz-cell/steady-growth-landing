
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "I never thought investing could be this simple. Steady Growth Insight has helped me grow my savings without any prior experience.",
      name: "Michael Johnson",
      title: "School Teacher"
    },
    {
      quote: "The returns on my real estate portfolio have exceeded my expectations. Their team of experts truly know what they're doing.",
      name: "Sarah Williams",
      title: "Healthcare Professional"
    },
    {
      quote: "As someone new to investing, I appreciate how transparent and supportive the Steady Growth team has been throughout my journey.",
      name: "David Chen",
      title: "IT Specialist"
    }
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Investors Say</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join thousands of satisfied investors who have trusted Steady Growth Insight with their financial future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#00395b] border-white/10 text-white">
              <CardContent className="pt-6">
                <blockquote className="text-white/90 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="bg-[#e73667] rounded-full p-2 mr-3">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-white/70">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
