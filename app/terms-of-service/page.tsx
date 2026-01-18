'use client';

import Link from 'next/link';
import Footer from '../components/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="text-primary hover:text-blue-700 font-semibold text-sm mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Terms of Service</h1>
          <p className="text-slate-500 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed mb-4">
              By accessing and using the Fieldhouse Studio website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <p className="leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of our website, services, and any related applications (collectively, the "Services") provided by Fieldhouse Studio ("we," "us," or "our").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">2. Description of Services</h2>
            <p className="leading-relaxed mb-4">
              Fieldhouse Studio provides AI and software development services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI Strategy Consulting</li>
              <li>Custom Model Development</li>
              <li>Data Engineering</li>
              <li>Mobile App Development</li>
              <li>Website Development</li>
              <li>Business Consultancy</li>
            </ul>
            <p className="leading-relaxed mt-4">
              We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">3. Use of Services</h2>
            <h3 className="text-xl font-semibold text-navy mb-3">3.1 Eligibility</h3>
            <p className="leading-relaxed mb-4">
              You must be at least 18 years old and have the legal capacity to enter into contracts to use our services. By using our services, you represent and warrant that you meet these requirements.
            </p>

            <h3 className="text-xl font-semibold text-navy mb-3">3.2 Acceptable Use</h3>
            <p className="leading-relaxed mb-4">
              You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit any harmful, offensive, or illegal content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our services</li>
              <li>Use our services to compete with us or for any competitive purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">4. Intellectual Property</h2>
            <p className="leading-relaxed mb-4">
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, images, and software, are the exclusive property of Fieldhouse Studio or its licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use our intellectual property without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">5. Client Projects and Deliverables</h2>
            <h3 className="text-xl font-semibold text-navy mb-3">5.1 Project Agreements</h3>
            <p className="leading-relaxed mb-4">
              Specific project terms, deliverables, timelines, and pricing will be outlined in separate written agreements or statements of work ("Project Agreements"). In the event of any conflict between these Terms and a Project Agreement, the Project Agreement shall prevail.
            </p>

            <h3 className="text-xl font-semibold text-navy mb-3">5.2 Ownership of Deliverables</h3>
            <p className="leading-relaxed mb-4">
              Unless otherwise specified in a Project Agreement:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Upon full payment, you will own the deliverables created specifically for your project</li>
              <li>We retain ownership of our pre-existing tools, methodologies, and general knowledge</li>
              <li>We may use anonymized project data for portfolio and marketing purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">6. Payment Terms</h2>
            <p className="leading-relaxed mb-4">
              Payment terms will be specified in your Project Agreement. Generally:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Invoices are due within the timeframe specified in the Project Agreement</li>
              <li>Late payments may incur interest charges</li>
              <li>We reserve the right to suspend services for non-payment</li>
              <li>All fees are non-refundable unless otherwise specified</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">7. Confidentiality</h2>
            <p className="leading-relaxed mb-4">
              We understand the sensitive nature of your business information. We agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep all confidential information strictly confidential</li>
              <li>Use confidential information solely for the purpose of providing services</li>
              <li>Not disclose confidential information to third parties without your consent</li>
              <li>Take reasonable measures to protect confidential information</li>
            </ul>
            <p className="leading-relaxed mt-4">
              These obligations do not apply to information that is publicly available or independently developed by us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">8. Warranties and Disclaimers</h2>
            <h3 className="text-xl font-semibold text-navy mb-3">8.1 Service Warranties</h3>
            <p className="leading-relaxed mb-4">
              We warrant that our services will be performed in a professional and workmanlike manner. However, we make no warranties regarding:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The results or outcomes of our services</li>
              <li>Uninterrupted or error-free service</li>
              <li>The accuracy or completeness of any information provided</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mb-3">8.2 Disclaimer of Warranties</h3>
            <p className="leading-relaxed">
              EXCEPT AS EXPRESSLY SET FORTH HEREIN, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">9. Limitation of Liability</h2>
            <p className="leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, FIELDHOUSE STUDIO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="leading-relaxed">
              Our total liability for any claims arising out of or relating to these Terms or our services shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">10. Indemnification</h2>
            <p className="leading-relaxed">
              You agree to indemnify, defend, and hold harmless Fieldhouse Studio and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of our services, violation of these Terms, or infringement of any rights of another.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">11. Termination</h2>
            <p className="leading-relaxed mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
            </p>
            <p className="leading-relaxed">
              Upon termination, your right to use the services will cease immediately. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">12. Governing Law and Dispute Resolution</h2>
            <p className="leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
            </p>
            <p className="leading-relaxed">
              Any disputes arising out of or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">13. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">14. Severability</h2>
            <p className="leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">15. Entire Agreement</h2>
            <p className="leading-relaxed">
              These Terms, together with any Project Agreements, constitute the entire agreement between you and Fieldhouse Studio regarding the use of our services and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">16. Contact Information</h2>
            <p className="leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="font-semibold text-navy mb-2">Fieldhouse Studio</p>
              <p className="text-slate-600 mb-2">128 City Road, London, England, United Kingdom, EC1V 2NX</p>
              <p className="text-slate-600">
                Email: <a href="mailto:info@fieldhousestudio.com" className="text-primary hover:underline">info@fieldhousestudio.com</a>
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
