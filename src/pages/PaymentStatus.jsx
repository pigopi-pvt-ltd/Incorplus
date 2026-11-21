import React, { useEffect, useState } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  ShieldCheck,
  Home,
  ArrowRight,
  Loader2,
  Receipt,
} from "lucide-react"
import { getPaymentStatus } from "../services/paymentService"

const PaymentStatus = () => {
  const [searchParams] = useSearchParams()
  const txnid = searchParams.get("txnid")
  const urlStatus = searchParams.get("status")
  const urlMsg = searchParams.get("msg")

  const [loading, setLoading] = useState(Boolean(txnid))
  const [payment, setPayment] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!txnid) {
      setLoading(false)
      return
    }

    let isMounted = true
    getPaymentStatus(txnid)
      .then((data) => {
        if (isMounted) {
          setPayment(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [txnid])

  const isSuccess = urlStatus === "success" || payment?.status === "success"
  const isTampered = urlStatus === "tampered" || payment?.status === "tampered"

  return (
    <div className="min-h-[85vh] bg-slate-50 dark:bg-slate-950 py-16 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
      >
        {/* Glow decoration */}
        <div
          className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-30 ${
            isSuccess ? "bg-emerald-500" : "bg-rose-500"
          }`}
        />

        {loading ? (
          <div className="py-16 text-center flex flex-col items-center justify-center space-y-4">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
            <p className="text-slate-600 dark:text-slate-300 font-semibold text-lg">
              Verifying payment with bank...
            </p>
          </div>
        ) : isSuccess ? (
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mx-auto shadow-inner">
              <CheckCircle2 size={48} />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-black tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
                Transaction Successful
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                Payment Received!
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Thank you! Your payment has been securely processed by PayU.
                Our startup onboarding team will contact you shortly.
              </p>
            </div>

            {/* Receipt Card */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 rounded-2xl p-5 text-left space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700 text-sm">
                <span className="text-slate-500 font-medium">Package</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {payment?.productinfo || "Startup Package"}
                </span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700 text-sm">
                <span className="text-slate-500 font-medium">Amount Paid</span>
                <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                  ₹{Number(payment?.amount || 0).toLocaleString("en-IN")}
                </span>
              </div>

              {txnid && (
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700 text-sm">
                  <span className="text-slate-500 font-medium">Transaction ID</span>
                  <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
                    {txnid}
                  </span>
                </div>
              )}

              {payment?.customer && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 font-medium">Billed To</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {payment.customer.firstname} ({payment.customer.email})
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/"
                className="flex-1 py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
              >
                <Home size={18} />
                Return to Home
              </Link>
              <Link
                to="/services"
                className="flex-1 py-3.5 px-6 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 mx-auto shadow-inner">
              {isTampered ? <AlertTriangle size={48} /> : <XCircle size={48} />}
            </div>

            <div className="space-y-2">
              <span className="text-xs font-black tracking-widest uppercase text-rose-600 dark:text-rose-400">
                {isTampered ? "Verification Issue" : "Payment Incomplete"}
              </span>
              <h1 className="text-3xl font-black text-slate-900 dark:text-white">
                {isTampered ? "Security Check Failed" : "Payment Failed"}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm mx-auto">
                {urlMsg
                  ? decodeURIComponent(urlMsg)
                  : "The transaction could not be completed or was cancelled. If amount was debited, it will be refunded by your bank within 3-5 working days."}
              </p>
            </div>

            {txnid && (
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 rounded-2xl p-4 text-xs font-mono text-slate-600 dark:text-slate-400">
                Reference ID: <span className="font-bold text-slate-800 dark:text-slate-200">{txnid}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/pricing"
                className="flex-1 py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
              >
                <RotateCcw size={18} />
                Try Again
              </Link>
              <Link
                to="/contact"
                className="flex-1 py-3.5 px-6 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck size={16} className="text-emerald-500" />
          <span>PayU India Verified 256-Bit SSL Secured</span>
        </div>
      </motion.div>
    </div>
  )
}

export default PaymentStatus
