"use client";

import { useState } from "react";
import {
  SITE_CONFIG,
  DEMO_IMPROVEMENT_AREAS,
  COMPANY_SIZE_OPTIONS,
  MANUFACTURING_INDUSTRIES,
} from "@/config/site";
import {
  Mail,
  Phone,
  Building,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  ExternalLink,
} from "lucide-react";

interface FormState {
  fullName: string;
  businessEmail: string;
  companyName: string;
  phone: string;
  manufacturingIndustry: string;
  companySize: string;
  improvementArea: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  fullName: "",
  businessEmail: "",
  companyName: "",
  phone: "",
  manufacturingIndustry: "",
  companySize: "",
  improvementArea: "",
  message: "",
};

export function DemoForm() {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [serverError, setServerError] = useState("");

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.businessEmail.trim() || !emailRegex.test(formData.businessEmail.trim())) {
      newErrors.businessEmail = "Please enter a valid business email address.";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Please provide your company or factory name.";
    }

    const phoneRegex = /^[+]?[\d\s\-().]{7,20}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (min 7 digits).";
    }

    if (!formData.manufacturingIndustry) {
      newErrors.manufacturingIndustry = "Please select your manufacturing industry.";
    }

    if (!formData.companySize) {
      newErrors.companySize = "Please indicate your approximate company size.";
    }

    if (!formData.improvementArea) {
      newErrors.improvementArea = "Please specify your primary area of improvement.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setServerError(
          data.message || "Failed to submit demo request. Please verify fields."
        );
        if (data.errors) {
          setErrors(data.errors);
        }
      } else {
        setSubmitSuccess(true);
        setReferenceId(data.referenceId || "AB-CONFIRMED");
      }
    } catch (err) {
      console.error("Submission network error:", err);
      setServerError("Network error. Please try again or email us directly at contact@aetherbuilt.com.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setServerError("");
    setSubmitSuccess(false);
    setReferenceId("");
  };

  return (
    <section id="demo" className="py-20 sm:py-28 lg:py-32 bg-[#FAF9F5] border-t border-[#EAE7DF] relative">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="w-full max-w-[1360px] 2xl:max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Messaging & Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              <span>REQUEST A DEMO</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252B33] tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Your factory deserves a better way to operate.
            </h2>

            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
              Let&apos;s explore how AetherBuilt can bring your manufacturing operations into one connected system. Experience a guided demonstration configured around your plant&apos;s specific machines, workflows, and supply chain.
            </p>

            {/* Direct Contact Cards */}
            <div className="pt-4 space-y-3">
              <div className="p-4 rounded-xl border border-[#EAE7DF] bg-white flex items-center gap-3.5 shadow-2xs">
                <div className="p-2.5 rounded-lg bg-[#FAF9F5] text-[#F59E0B] border border-[#EAE7DF]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#9CA3AF] uppercase">
                    Official Product Inquiries
                  </div>
                  <a
                    href={`mailto:${SITE_CONFIG.company.email}`}
                    className="text-sm font-semibold text-[#252B33] hover:text-[#B45309] transition-colors"
                  >
                    {SITE_CONFIG.company.email}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#EAE7DF] bg-white flex items-center gap-3.5 shadow-2xs">
                <div className="p-2.5 rounded-lg bg-[#FAF9F5] text-[#F59E0B] border border-[#EAE7DF]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#9CA3AF] uppercase">
                    Direct Corporate Line
                  </div>
                  <div className="text-sm font-semibold text-[#252B33]">
                    {SITE_CONFIG.company.phones.join(" / ")}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#EAE7DF] bg-white flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#FAF9F5] text-[#F59E0B] border border-[#EAE7DF]">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#9CA3AF] uppercase">
                      Parent Enterprise
                    </div>
                    <div className="text-xs font-semibold text-[#252B33]">
                      Aetheron.AI Technologies Pvt Ltd
                    </div>
                  </div>
                </div>
                <a
                  href={SITE_CONFIG.aetheronUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#B45309] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>aetheron.ai</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#6B7280] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>We respect industrial privacy. No spam. Data kept confidential.</span>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#EAE7DF] bg-white p-6 sm:p-10 shadow-lg">
              {submitSuccess ? (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#059669]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3
                    className="text-2xl font-bold text-[#252B33]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Demonstration Request Confirmed
                  </h3>

                  <p className="text-sm text-[#6B7280] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#252B33]">{formData.fullName}</strong>. We have received your request for <strong className="text-[#252B33]">{formData.companyName}</strong>. Our engineering and solutions team will reach out within 24 business hours to coordinate your walkthrough.
                  </p>

                  <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF] inline-block font-mono text-xs text-[#6B7280]">
                    Inquiry Reference: <span className="font-bold text-[#252B33]">{referenceId}</span>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-2 rounded-lg border border-[#EAE7DF] text-xs font-semibold text-[#6B7280] hover:text-[#252B33] hover:bg-[#FAF9F5] transition-colors inline-flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit another inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {serverError && (
                    <div className="p-3.5 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5] text-[#DC2626] flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  {/* Row 1: Full Name & Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-[#252B33] mb-1">
                        Full Name <span className="text-[#DC2626]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Rajesh Sharma"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-[#252B33] placeholder-[#9CA3AF] outline-none transition-all ${
                          errors.fullName
                            ? "border-[#DC2626] bg-[#FEF2F2]/50"
                            : "border-[#EAE7DF] bg-[#FAF9F5] focus:bg-white focus:border-[#F59E0B]"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-[#DC2626] mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-semibold text-[#252B33] mb-1">
                        Business Email <span className="text-[#DC2626]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.businessEmail}
                        onChange={(e) =>
                          setFormData({ ...formData, businessEmail: e.target.value })
                        }
                        placeholder="name@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-[#252B33] placeholder-[#9CA3AF] outline-none transition-all ${
                          errors.businessEmail
                            ? "border-[#DC2626] bg-[#FEF2F2]/50"
                            : "border-[#EAE7DF] bg-[#FAF9F5] focus:bg-white focus:border-[#F59E0B]"
                        }`}
                      />
                      {errors.businessEmail && (
                        <p className="text-[11px] text-[#DC2626] mt-1">{errors.businessEmail}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Company Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-[#252B33] mb-1">
                        Company / Factory Name <span className="text-[#DC2626]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                        placeholder="e.g. Apex Precision Castings"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-[#252B33] placeholder-[#9CA3AF] outline-none transition-all ${
                          errors.companyName
                            ? "border-[#DC2626] bg-[#FEF2F2]/50"
                            : "border-[#EAE7DF] bg-[#FAF9F5] focus:bg-white focus:border-[#F59E0B]"
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-[11px] text-[#DC2626] mt-1">{errors.companyName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-semibold text-[#252B33] mb-1">
                        Phone Number <span className="text-[#DC2626]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-[#252B33] placeholder-[#9CA3AF] outline-none transition-all ${
                          errors.phone
                            ? "border-[#DC2626] bg-[#FEF2F2]/50"
                            : "border-[#EAE7DF] bg-[#FAF9F5] focus:bg-white focus:border-[#F59E0B]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-[#DC2626] mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Manufacturing Industry & Company Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-[#252B33] mb-1">
                        Manufacturing Industry <span className="text-[#DC2626]">*</span>
                      </label>
                      <select
                        required
                        value={formData.manufacturingIndustry}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            manufacturingIndustry: e.target.value,
                          })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-[#252B33] outline-none transition-all ${
                          errors.manufacturingIndustry
                            ? "border-[#DC2626] bg-[#FEF2F2]/50"
                            : "border-[#EAE7DF] bg-[#FAF9F5] focus:bg-white focus:border-[#F59E0B]"
                        }`}
                      >
                        <option value="">Select industry category...</option>
                        {MANUFACTURING_INDUSTRIES.map((ind) => (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>
                      {errors.manufacturingIndustry && (
                        <p className="text-[11px] text-[#DC2626] mt-1">
                          {errors.manufacturingIndustry}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block font-semibold text-[#252B33] mb-1">
                        Approximate Company Size <span className="text-[#DC2626]">*</span>
                      </label>
                      <select
                        required
                        value={formData.companySize}
                        onChange={(e) =>
                          setFormData({ ...formData, companySize: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-[#252B33] outline-none transition-all ${
                          errors.companySize
                            ? "border-[#DC2626] bg-[#FEF2F2]/50"
                            : "border-[#EAE7DF] bg-[#FAF9F5] focus:bg-white focus:border-[#F59E0B]"
                        }`}
                      >
                        <option value="">Select employee / plant size...</option>
                        {COMPANY_SIZE_OPTIONS.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                      {errors.companySize && (
                        <p className="text-[11px] text-[#DC2626] mt-1">
                          {errors.companySize}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Primary Area to Improve */}
                  <div>
                    <label className="block font-semibold text-[#252B33] mb-1">
                      What are you looking to improve? <span className="text-[#DC2626]">*</span>
                    </label>
                    <select
                      required
                      value={formData.improvementArea}
                      onChange={(e) =>
                        setFormData({ ...formData, improvementArea: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-[#252B33] outline-none transition-all ${
                        errors.improvementArea
                          ? "border-[#DC2626] bg-[#FEF2F2]/50"
                          : "border-[#EAE7DF] bg-[#FAF9F5] focus:bg-white focus:border-[#F59E0B]"
                      }`}
                    >
                      <option value="">Choose primary focus area...</option>
                      {DEMO_IMPROVEMENT_AREAS.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                    {errors.improvementArea && (
                      <p className="text-[11px] text-[#DC2626] mt-1">
                        {errors.improvementArea}
                      </p>
                    )}
                  </div>

                  {/* Row 5: Additional Message */}
                  <div>
                    <label className="block font-semibold text-[#252B33] mb-1">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your factory operations, current software, or key challenges..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#EAE7DF] bg-[#FAF9F5] text-xs sm:text-sm text-[#252B33] placeholder-[#9CA3AF] focus:bg-white focus:border-[#F59E0B] outline-none transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#252B33] hover:bg-[#1A1F26] text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#F59E0B]" />
                          <span>Registering your demo request...</span>
                        </>
                      ) : (
                        <>
                          <span>Request a Demo</span>
                          <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
