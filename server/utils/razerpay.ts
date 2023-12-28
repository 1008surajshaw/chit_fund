import Razerpay from 'razorpay'

const razorpayKey: string = process.env.RAZER_KEY || '';
export const instance = new Razerpay({
    key_id: razorpayKey,
    key_secret:process.env.RAZERPAY_SECRET || '',
})