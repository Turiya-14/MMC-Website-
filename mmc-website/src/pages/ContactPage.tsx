import React, { useState } from 'react';
import { AGENCY_INFO } from '../data/content';
import { Phone, Mail, Globe, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    orgName: '',
    phone: '',
    email: '',
    serviceRequired: 'Political Campaign',
    enquiryType: 'Business',
    timeline: 'Immediate (1-2 Weeks)',
    requirementBrief: '',
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-white text-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-bold text-[#2891CB] uppercase tracking-widest flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#E66338]" />
            <span>Start a Conversation</span>
          </div>
          <h1 className="inner-hero-title text-[#0F172A]">
            Ready to build a brand that leads?
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you are scaling a company, strengthening an institution, building a public profile or preparing for a high-stakes campaign, the right strategy begins with a focused conversation.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Phone & Email Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#0F172A] font-display uppercase border-b border-slate-200 pb-4">
                Direct Contact
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#2891CB] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#0F172A] uppercase text-xs">Direct Phone Lines</div>
                    <div className="text-slate-700 mt-1 flex flex-col gap-1 font-semibold">
                      <a href={`tel:${AGENCY_INFO.phonePrimary}`} className="hover:text-[#2891CB] transition-colors">
                        {AGENCY_INFO.phonePrimary}
                      </a>
                      <a href={`tel:${AGENCY_INFO.phoneSecondary}`} className="hover:text-[#2891CB] transition-colors">
                        {AGENCY_INFO.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#2891CB] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#0F172A] uppercase text-xs">Official Business Email</div>
                    <a href={`mailto:${AGENCY_INFO.email}`} className="text-slate-700 font-semibold hover:text-[#2891CB] transition-colors mt-1 block">
                      {AGENCY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Globe className="w-5 h-5 text-[#2891CB] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#0F172A] uppercase text-xs">Website Portal</div>
                    <div className="text-slate-700 font-semibold mt-1">{AGENCY_INFO.website}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-[#0F172A] font-display uppercase mb-6">
                Send a Direct Requirement
              </h2>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EBF5FA] border-2 border-[#2891CB] mx-auto flex items-center justify-center text-[#2891CB]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-display">
                    Brief Submitted Successfully
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you. MakeMyCampaign will review your enquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-fullname" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        id="contact-fullname"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Adv. Rajesh Sharma"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#2891CB]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-orgname" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Organisation / Campaign Name *
                      </label>
                      <input
                        id="contact-orgname"
                        type="text"
                        required
                        value={formData.orgName}
                        onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                        placeholder="e.g. Municipal / Brand Name"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#2891CB]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Mobile Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#2891CB]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="business@example.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#2891CB]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Service Required *
                      </label>
                      <select
                        id="contact-service"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#2891CB]"
                      >
                        <option value="Political Campaign">Political Campaign</option>
                        <option value="Brand Growth">Brand Growth</option>
                        <option value="Healthcare Marketing">Healthcare Marketing</option>
                        <option value="Education Admissions">Education Admissions</option>
                        <option value="Digital Automation">Digital Automation</option>
                        <option value="Other Requirements">Other Requirements</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-enquirytype" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Enquiry Type *
                      </label>
                      <select
                        id="contact-enquirytype"
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#2891CB]"
                      >
                        <option value="Business">Business</option>
                        <option value="Political">Political</option>
                        <option value="Institutional">Institutional</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-timeline" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Project Timeline
                    </label>
                    <select
                      id="contact-timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#2891CB]"
                    >
                      <option value="Immediate (1-2 Weeks)">Immediate (1-2 Weeks)</option>
                      <option value="1 Month">1 Month</option>
                      <option value="3 Months">3 Months</option>
                      <option value="Upcoming Election Cycle">Upcoming Election Cycle</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-brief" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Brief Requirement
                    </label>
                    <textarea
                      id="contact-brief"
                      rows={3}
                      value={formData.requirementBrief}
                      onChange={(e) => setFormData({ ...formData, requirementBrief: e.target.value })}
                      placeholder="Outline your goals or requirements..."
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#2891CB]"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="w-4 h-4 rounded border-slate-300 text-[#2891CB] focus:ring-0"
                    />
                    <label htmlFor="consent" className="text-[11px] text-slate-600">
                      I agree to be contacted by MakeMyCampaign regarding this enquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-[#E66338] hover:bg-[#F07449] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md mt-2"
                  >
                    <span>Share Your Brief</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
