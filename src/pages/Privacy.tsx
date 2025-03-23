
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

const Privacy = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/70">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-white/80 mb-3">
              At Steady Growth Insight, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our investment services, including forex and binary trading options.
            </p>
            <p className="text-white/80">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
            <p className="text-white/80 mb-3">
              We may collect personal information that you voluntarily provide to us when registering for our services, expressing interest in obtaining information about us or our products, or otherwise contacting us.
            </p>
            <p className="text-white/80 mb-3">
              The personal information we collect may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>Name, email address, and contact information</li>
              <li>Financial information necessary for investment purposes</li>
              <li>Identification information required by law</li>
              <li>Information provided in forms, surveys, or other interactive features</li>
              <li>Usage data and browsing history on our platform</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
            <p className="text-white/80 mb-3">
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>Provide, operate, and maintain our investment services</li>
              <li>Process and complete transactions, and send related information including transaction confirmations</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our website and services</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you for customer service, updates, and marketing purposes</li>
              <li>Prevent fraudulent transactions and monitor against theft</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">4. Sharing Your Information</h2>
            <p className="text-white/80 mb-3">
              We may share your information with third parties in certain situations, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>With service providers who perform services for us</li>
              <li>With financial institutions and payment processors to facilitate investments</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>With your consent or at your direction</li>
              <li>For business transfers in connection with any merger, sale, or acquisition</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">5. Security of Your Information</h2>
            <p className="text-white/80 mb-3">
              We use administrative, technical, and physical security measures to help protect your personal information from unauthorized access and disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee its absolute security.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">6. Cookies and Tracking Technologies</h2>
            <p className="text-white/80 mb-3">
              We may use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">7. International Data Transfers</h2>
            <p className="text-white/80 mb-3">
              Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By providing your information, you consent to this transfer.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">8. Your Data Protection Rights</h2>
            <p className="text-white/80 mb-3">
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>The right to access the personal information we have about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">9. Changes to This Privacy Policy</h2>
            <p className="text-white/80 mb-3">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-white/80">
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
            <p className="text-white/80 mb-3">
              If you have any questions about this Privacy Policy, please contact us at:
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
      <Footer />
    </div>
  );
};

export default Privacy;
