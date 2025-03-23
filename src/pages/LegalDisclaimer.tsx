
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

const LegalDisclaimer = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Legal Disclaimer</h1>
          <p className="text-white/70">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">Investment Risks</h2>
            <p className="text-white/80 mb-3">
              The information provided on the Steady Growth Insight website and related services is for general informational purposes only. All investments involve risk, including the possible loss of all the money invested. Past performance does not guarantee future results.
            </p>
            <p className="text-white/80 mb-3">
              Trading foreign exchange (forex), binary options, and investments in real estate markets carries substantial risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to invest in forex, binary options, or real estate, you should carefully consider your investment objectives, level of experience, and risk appetite.
            </p>
            <p className="text-white/80">
              The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with these investments and seek advice from an independent financial advisor if you have any doubts.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">No Investment Advice</h2>
            <p className="text-white/80 mb-3">
              Steady Growth Insight does not provide tax, legal, or investment advice. Any information provided is the opinion of the author and is not intended to be a source of advice with respect to the material presented, and the information contained on this website does not constitute investment advice.
            </p>
            <p className="text-white/80">
              We recommend consulting with a professional before taking action on any content found on the Steady Growth Insight platform.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Accuracy of Information</h2>
            <p className="text-white/80 mb-3">
              While we strive to provide accurate and up-to-date information, Steady Growth Insight makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>
            <p className="text-white/80">
              Any reliance you place on such information is therefore strictly at your own risk. The materials on the Steady Growth Insight website are provided on an 'as is' basis.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Forward-Looking Statements</h2>
            <p className="text-white/80 mb-3">
              Certain content on the Steady Growth Insight website may contain forward-looking statements that are based on expectations, estimates, projections, and assumptions. Words such as "expects," "anticipates," "plans," "believes," "scheduled," "estimates," variations of these words, and similar expressions are intended to identify forward-looking statements.
            </p>
            <p className="text-white/80">
              These statements include, but are not limited to, statements about our business operations, financial condition, investment returns, and strategies. Forward-looking statements are not guarantees of future performance and involve certain risks and uncertainties, which are difficult to predict. Therefore, actual future results and trends may differ materially from what is forecast in forward-looking statements.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Results May Vary</h2>
            <p className="text-white/80 mb-3">
              Testimonials and examples used in our marketing materials, including on our website, are exceptional results, which do not apply to the average person and are not intended to represent or guarantee that anyone will achieve the same or similar results. Individual results may vary based on many factors including but not limited to investment amount, experience, risk tolerance, and market conditions.
            </p>
            <p className="text-white/80">
              Each individual's success depends on his or her background, dedication, desire, and motivation. As with any investment, there is potential that you could sustain losses of some or all of your investment.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Third-Party Content</h2>
            <p className="text-white/80 mb-3">
              Our website may include content from third parties, including links to third-party websites. We do not control, monitor or endorse the content of any third-party website and are not responsible for any content therein. The inclusion of any link to a third-party website does not imply endorsement by Steady Growth Insight of the website or their products or services.
            </p>
            <p className="text-white/80">
              Use of such third-party websites is entirely at your own risk, and you should apply a suitable level of caution and discretion before relying on any content or purchasing any products or services from third-party websites.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Regulatory Compliance</h2>
            <p className="text-white/80 mb-3">
              Steady Growth Insight aims to comply with all applicable laws and regulations but does not guarantee that our content and services are appropriate or available for use in any particular jurisdiction. If you choose to access our website, you do so on your own initiative and are responsible for compliance with local laws.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
            <p className="text-white/80 mb-3">
              In no event shall Steady Growth Insight, its affiliates, partners, directors, employees, or agents be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>Your access to or use of or inability to access or use the service</li>
              <li>Any conduct or content of any third party on the service</li>
              <li>Any content obtained from the service</li>
              <li>Unauthorized access, use or alteration of your transmissions or content</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Changes to This Disclaimer</h2>
            <p className="text-white/80 mb-3">
              Steady Growth Insight reserves the right to modify this disclaimer at any time, effective upon posting of an updated version on this website. You are responsible for regularly reviewing this disclaimer. Continued use of the website after any such changes shall constitute your consent to such changes.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
            <p className="text-white/80 mb-3">
              If you have any questions about this disclaimer, please contact us at:
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

export default LegalDisclaimer;
