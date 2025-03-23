
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, DollarSign, ShieldCheck, Globe, BarChart2 } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <DollarSign className="h-12 w-12 text-[#e73667]" />,
      title: "Forex Trading",
      description: "Our expert traders navigate the forex market to generate steady returns on your investment."
    },
    {
      icon: <BarChart2 className="h-12 w-12 text-[#e73667]" />,
      title: "Binary Trading",
      description: "Experience the excitement of binary options with expert guidance and strategies."
    },
    {
      icon: <Building className="h-12 w-12 text-[#e73667]" />,
      title: "Real Estate",
      description: "Diversify your portfolio with premium real estate investments managed by industry experts."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-[#e73667]" />,
      title: "Secure Investments",
      description: "Your investments are protected with industry-leading security measures and risk management."
    }
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-[#002439]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Steady Growth Insight?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We combine expertise in forex, binary trading, and real estate investments to provide opportunities for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#00395b] border-white/10 text-white">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
