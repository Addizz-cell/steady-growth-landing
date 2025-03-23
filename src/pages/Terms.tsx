
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#003049] text-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:text-[#e73667] p-0 mb-4 -ml-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-white/70">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-white/80 mb-3">
              Welcome to Steady Growth Insight. These Terms and Conditions govern your use of our website
              and services offered by Steady Growth Insight.
            </p>
            <p className="text-white/80">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree
              with any part of the terms, you may not access the Service.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">2. Definitions</h2>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li><strong>"Service"</strong> refers to the website operated by Steady Growth Insight.</li>
              <li><strong>"User"</strong> refers to the individual accessing or using the Service.</li>
              <li><strong>"Investments"</strong> refers to any financial contributions made through our platform.</li>
              <li><strong>"Returns"</strong> refers to any profits generated from investments.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">3. Investment Risks</h2>
            <p className="text-white/80 mb-3">
              All investments involve risk, including the possible loss of principal. The value of investments
              and the income from them may go down as well as up and are not guaranteed.
            </p>
            <p className="text-white/80 mb-3">
              Past performance does not guarantee future results. The investment strategies and products
              described on this site may not be suitable for all investors.
            </p>
            <p className="text-white/80">
              Users should consult with qualified professional advisors before making any investment decisions.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">4. User Accounts</h2>
            <p className="text-white/80 mb-3">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p className="text-white/80 mb-3">
              You are responsible for safeguarding the password that you use to access the Service and for any activities
              or actions under your password.
            </p>
            <p className="text-white/80">
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware
              of any breach of security or unauthorized use of your account.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">5. Fees and Payments</h2>
            <p className="text-white/80 mb-3">
              Steady Growth Insight charges management fees for investment services as described in our fee schedule,
              which may be updated from time to time.
            </p>
            <p className="text-white/80 mb-3">
              All fees are non-refundable unless otherwise specified. We reserve the right to change our fee structure
              with proper notice to users.
            </p>
            <p className="text-white/80">
              Payments processed through our platform are secured using industry-standard encryption technology.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">6. Intellectual Property</h2>
            <p className="text-white/80 mb-3">
              The Service and its original content, features, and functionality are and will remain the exclusive property
              of Steady Growth Insight and its licensors.
            </p>
            <p className="text-white/80">
              Our trademarks and trade dress may not be used in connection with any product or service without the prior
              written consent of Steady Growth Insight.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">7. Termination</h2>
            <p className="text-white/80 mb-3">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </p>
            <p className="text-white/80">
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account,
              you may simply discontinue using the Service or contact our support team.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">8. Governing Law</h2>
            <p className="text-white/80 mb-3">
              These Terms shall be governed and construed in accordance with the laws of [Jurisdiction],
              without regard to its conflict of law provisions.
            </p>
            <p className="text-white/80">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">9. Changes to Terms</h2>
            <p className="text-white/80 mb-3">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
              By continuing to access or use our Service after those revisions become effective,
              you agree to be bound by the revised terms.
            </p>
            <p className="text-white/80">
              If the changes are material, we will provide at least 30 days' notice before the new terms take effect.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
            <p className="text-white/80 mb-3">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-white/80">
              contact@steadygrowthinsight.com<br />
              +1 (555) 123-4567<br />
              123 Investment Avenue, Financial District<br />
              New York, NY 10001
            </p>
          </section>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Steady Growth Insight. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
