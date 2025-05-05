'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function PaymentPage() {
  const params = useSearchParams();
  const plan = params.get('plan') || 'Starter';
  const amount = {
    Starter: 0,
    Pro: 29900,  // in paise
    Elite: 59900,
  }[plan];

  useEffect(() => {
    if (amount === 0) return;

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      const options: any = {
        key: 'YOUR_RAZORPAY_KEY_ID',
        amount,
        currency: 'INR',
        name: 'PrepTrail',
        description: `Upgrade to ${plan}`,
        handler: function (response: any) {
          alert('Payment successful: ' + response.razorpay_payment_id);
        },
        prefill: {
          email: 'user@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#EC5800',
        },
      };
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    };
    document.body.appendChild(script);
  }, [amount, plan]);

  return (
    <div className="min-h-screen flex items-center justify-center text-xl text-orange-600 font-semibold">
      {amount === 0
        ? 'Free Plan Activated! 🎉'
        : `Redirecting to payment gateway for ${plan} plan...`}
    </div>
  );
}
