"use client";

import { Copy, CheckCircle, Gift } from "lucide-react";
import { useState } from "react";
import { invitationConfig } from "../data/invitation.config";

export default function DonationSection() {
  const { donation } = invitationConfig;
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!donation.enabled) return null;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="donation" className="py-20 px-6" aria-label="โอนเงิน">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <Gift className="w-12 h-12 mx-auto mb-4" aria-hidden="true" />
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide mb-4">
            {donation.title}
          </h2>
          <p className="font-thai text-base text-gray-600">
            {donation.description}
          </p>
        </div>

        <div className="space-y-6">
          {donation.accounts.map((account, index) => (
            <div
              key={index}
              className="bg-white/60 rounded-2xl p-6 border border-gray-200"
            >
              <div className="space-y-4">
                <div>
                  <p className="font-thai text-sm text-gray-500 mb-1">{account.bank}</p>
                  <div className="flex items-center justify-center gap-2">
                    <p className="font-mono text-lg tracking-wider">
                      {account.accountNumber}
                    </p>
                    <button
                      onClick={() => handleCopy(account.accountNumber, index)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label="คัดลอกเลขบัญชี"
                    >
                      {copiedIndex === index ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <p className="font-thai text-sm text-gray-600">
                  ชื่อบัญชี: {account.accountName}
                </p>

                {account.qrImage && (
                  <div className="flex justify-center">
                    <img
                      src={account.qrImage}
                      alt={`QR Code ${account.bank}`}
                      className="w-60 h-60 rounded-lg object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
