import CheckoutSummary from "@/components/Checkout/ChekcoutSummary";

const checkout = () => {
    return (
        <div className="relative h-screen w-full bg-gradient-to-l from-slate-200 to-slate-500 flex flex-col justify-center items-center">
          <CheckoutSummary />
        </div>
    );
};

export default checkout;
