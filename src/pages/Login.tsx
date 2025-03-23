
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      toast({
        title: "Welcome back!",
        description: "Successfully logged into your account.",
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#003049] text-white py-16 px-4">
      <div className="max-w-md mx-auto">
        <Card className="bg-[#00395b] border-white/10 text-white">
          <CardHeader className="text-center">
            <div className="mx-auto bg-[#e73667] rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription className="text-white/70">
              Log in to your Steady Growth Insight account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#002439] border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="password">
                    Password
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="bg-[#002439] border-white/10 text-white"
                  />
                </div>
                <div className="text-right">
                  <Link to="/forgot-password" className="text-sm text-[#e73667] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#e73667] hover:bg-[#e73667]/90 text-white hover:translate-y-[-2px] transition-transform"
                >
                  {isLoading ? "Logging in..." : "Log In"}
                  {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-white/70 text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#e73667] hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
