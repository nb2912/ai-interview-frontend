'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface RazorpayOrderResponse {
  orderId: string;
  amount: number;
  currency: string;
  key: string;
}

export default function PaymentPage() {
  const params = useSearchParams();
  const plan = params.get('plan') || 'Starter';

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [paymentStarted, setPaymentStarted] = useState(false);

  const localAmountMap = {
    Starter: 0,
    Pro: 29900,
    Elite: 59900,
  };

  const amount = localAmountMap[plan as keyof typeof localAmountMap] || 0;

  useEffect(() => {
    async function initiatePayment() {
      try {
        setLoading(true);
        if (amount === 0) {
          setLoading(false);
          return;
        }

        // 1. Create order on backend
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/create-order`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ plan }),
        });

        if (!res.ok) throw new Error('Failed to create order');

        const data: RazorpayOrderResponse = await res.json();

        // 2. Inject Razorpay script
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;

        script.onload = () => {
          const options = {
            key: data.key,
            amount: data.amount,
            currency: data.currency,
            name: 'PrepTrail',
            description: `Upgrade to ${plan} Plan`,
            order_id: data.orderId,
            handler: function (response: any) {
              alert('✅ Payment successful: ' + response.razorpay_payment_id);
              // You should verify payment on your backend here
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
          setPaymentStarted(true);
        };

        document.body.appendChild(script);
      } catch (err: any) {
        console.error(err);
        setError('Payment initialization failed. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    initiatePayment();
  }, [amount, plan]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-xl text-orange-600 font-semibold">
      {loading && 'Initializing payment gateway...'}
      {!loading && amount === 0 && '🎉 Free Plan Activated!'}
      {!loading && error && <p className="text-red-500">{error}</p>}
      {!loading && !error && paymentStarted && 'Processing payment...'}
    </div>
  );
}
