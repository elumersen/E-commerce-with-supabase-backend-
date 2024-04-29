import ShoppingCartTList from "@/components/ShoppingCart/ShoppingCartList";

const cart = () => {
    return (
        <div className="relative h-screen w-full bg-gradient-to-l from-slate-200 to-slate-500 flex flex-col justify-center items-center">
            <ShoppingCartTList />
        </div>
    );
};

export default cart;
