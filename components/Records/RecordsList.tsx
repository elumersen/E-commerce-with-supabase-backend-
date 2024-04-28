import {
  fetchCurrentCart,
  fetchShoppingHistory,
} from "@/app/lib/actions/cart-actions";
import { TRecords } from "@/types/";
import RecordGrid from "./RecordGrid";
import { getUserLogged } from "@/utils/getUserLogged";

const RecordsList = async () => {
  const records: TRecords = await fetchShoppingHistory();
  const recordCartDetails: any = await fetchCurrentCart();
  const currentLoggedUser = await getUserLogged();
  const userEmail = currentLoggedUser?.email || "";

  return (
    <div className="h-full py-5">
      <p className="text-3xl text-white pb-5">
        Hello! <span className="font-bold"> {userEmail}</span>
      </p>
      <div className="bg-white rounded-sm w-full max-w-[700px] h-[540px] p-5 overflow-y-auto">
        <h2 className="text-slate-900 text-xl pb-5">Orders History</h2>
        <RecordGrid records={records} recordCartDetails={recordCartDetails} />
      </div>
    </div>
  );
};

export default RecordsList;
