
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, ChevronRight, Crown, Diamond, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const InvestmentOptions = () => {
  const plans = [
    {
      name: "Starter Plan",
      icon: <Shield className="h-10 w-10 text-[#e73667]" />,
      minAmount: 300,
      maxAmount: 1000,
      returnRate: "40% Monthly",
      returnPeriod: "Monthly",
      features: [
        "Access to basic investment tools",
        "Email support",
        "Monthly market insights",
        "Forex & Binary trading options",
      ],
      recommended: false,
      color: "bg-gradient-to-br from-[#00395b] to-[#002439]"
    },
    {
      name: "Standard Plan",
      icon: <Star className="h-10 w-10 text-[#e73667]" />,
      minAmount: 1100,
      maxAmount: 5000,
      returnRate: "25% Weekly",
      returnPeriod: "Weekly",
      features: [
        "All Starter Plan features",
        "Priority email support",
        "Weekly market insights",
        "Access to real estate investments",
        "Enhanced forex & binary trading options"
      ],
      recommended: false,
      color: "bg-gradient-to-br from-[#00395b] to-[#002439]"
    },
    {
      name: "Advanced Plan",
      icon: <Diamond className="h-10 w-10 text-[#e73667]" />,
      minAmount: 5100,
      maxAmount: 10000,
      returnRate: "20% Every 4 Days",
      returnPeriod: "Every 4 Days",
      features: [
        "All Standard Plan features",
        "Phone and email support",
        "Bi-weekly expert consultation",
        "Premium real estate opportunities",
        "Advanced forex & binary trading strategies",
        "Personalized investment dashboard"
      ],
      recommended: true,
      color: "bg-gradient-to-br from-[#002c3e] to-[#e7366730]"
    },
    {
      name: "VIP Plan",
      icon: <Crown className="h-10 w-10 text-[#e73667]" />,
      minAmount: 10100,
      maxAmount: 1000000,
      returnRate: "15% Every 2 Days",
      returnPeriod: "Every 2 Days",
      features: [
        "All Advanced Plan features",
        "24/7 dedicated support",
        "Daily market insights",
        "Exclusive investment opportunities",
        "Elite forex & binary trading platforms",
        "Personal investment manager",
        "Priority profit processing"
      ],
      recommended: false,
      color: "bg-gradient-to-br from-[#00395b] to-[#002439]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#003049] text-white">
      <div className="container mx-auto py-16 px-4 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investment Options</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Choose the investment plan that suits your financial goals. Our expert team of forex, binary traders, and real estate professionals will help grow your portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`${plan.color} border-white/10 text-white relative overflow-hidden transition-transform hover:scale-105`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-[#e73667] text-white text-xs font-semibold px-3 py-1 rounded-bl-lg flex items-center">
                  <BadgeCheck className="mr-1 h-3 w-3" />
                  RECOMMENDED
                </div>
              )}
              <CardHeader>
                <div className="mb-3">{plan.icon}</div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-white/70">
                  ${plan.minAmount} - ${plan.maxAmount}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-[#e73667]">{plan.returnRate}</p>
                  <p className="text-white/70">Return {plan.returnPeriod}</p>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="h-5 w-5 mr-2 text-[#e73667] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/register" className="w-full">
                  <Button 
                    className="w-full bg-[#e73667] hover:bg-[#e73667]/90 text-white hover:translate-y-[-2px] transition-transform" 
                    size="lg"
                  >
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-[#00395b] rounded-lg p-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-4">Important Investment Information</h2>
          <p className="mb-4 text-white/80">
            All investments involve risk and may result in both profit and loss. Past performance is not indicative of future results. Our team of professional forex traders, binary options specialists, and real estate experts work diligently to maximize returns while minimizing risk.
          </p>
          <p className="text-white/80">
            Please carefully review our terms and conditions before investing. For any questions about our investment options, please contact our support team.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InvestmentOptions;
