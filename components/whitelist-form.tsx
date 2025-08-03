"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

interface WhitelistFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhitelistForm({ isOpen, onClose }: WhitelistFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    walletAddress: "",
    experience: "",
    expectations: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Here you would typically send the data to your backend
    console.log("Whitelist form submitted:", formData);

    setIsSubmitting(false);
    onClose();
    setFormData({
      email: "",
      walletAddress: "",
      experience: "",
      expectations: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md bg-[#0a0613] border border-[#9b87f5]/30 rounded-lg p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Join the Whitelist
              </h2>
              <p className="text-white/70 text-sm">
                Get early access to our AI-powered DeFi agents
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-white/90 text-sm">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-1 bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-[#9b87f5]"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <Label
                  htmlFor="walletAddress"
                  className="text-white/90 text-sm"
                >
                  Wallet Address
                </Label>
                <Input
                  id="walletAddress"
                  type="text"
                  value={formData.walletAddress}
                  onChange={(e) =>
                    handleInputChange("walletAddress", e.target.value)
                  }
                  className="mt-1 bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-[#9b87f5]"
                  placeholder="0x..."
                  required
                />
              </div>

              <div>
                <Label htmlFor="experience" className="text-white/90 text-sm">
                  DeFi Experience Level
                </Label>
                <select
                  id="experience"
                  value={formData.experience}
                  onChange={(e) =>
                    handleInputChange("experience", e.target.value)
                  }
                  className="mt-1 w-full bg-white/5 border border-white/20 text-white rounded-md px-3 py-2 focus:border-[#9b87f5] focus:outline-none"
                  required
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>

              <div>
                <Label htmlFor="expectations" className="text-white/90 text-sm">
                  What are you looking for?
                </Label>
                <Textarea
                  id="expectations"
                  value={formData.expectations}
                  onChange={(e) =>
                    handleInputChange("expectations", e.target.value)
                  }
                  className="mt-1 bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-[#9b87f5] resize-none"
                  placeholder="Tell us about your DeFi goals and expectations..."
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] hover:opacity-90 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Join Whitelist"}
              </Button>
            </form>

            {/* Footer */}
            <p className="text-center text-white/50 text-xs mt-4">
              By joining the whitelist, you agree to receive updates about our
              platform.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
