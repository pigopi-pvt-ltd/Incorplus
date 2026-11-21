const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"

/**
 * Initiates payment with the backend and returns PayU parameters
 */
export const initiatePayment = async ({
  amount,
  tierId,
  firstname,
  email,
  phone,
  productinfo,
}) => {
  const response = await fetch(`${BACKEND_URL}/api/payment/initiate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount,
      tierId,
      firstname,
      email,
      phone,
      productinfo,
    }),
  })

  const data = await response.json()
  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to initiate payment")
  }

  return data
}

/**
 * Dynamically posts to PayU gateway endpoint
 */
export const redirectToPayUGateway = ({ payuUrl, params }) => {
  const form = document.createElement("form")
  form.setAttribute("method", "POST")
  form.setAttribute("action", payuUrl)
  form.style.display = "none"

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      const input = document.createElement("input")
      input.setAttribute("type", "hidden")
      input.setAttribute("name", key)
      input.setAttribute("value", String(value))
      form.appendChild(input)
    }
  })

  document.body.appendChild(form)
  form.submit()
}

/**
 * Fetches verified payment status from database
 */
export const getPaymentStatus = async (txnid) => {
  const response = await fetch(`${BACKEND_URL}/api/payment/status/${txnid}`)
  const data = await response.json()
  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to fetch payment status")
  }
  return data.payment
}
