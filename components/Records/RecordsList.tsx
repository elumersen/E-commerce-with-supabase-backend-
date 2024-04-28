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
    <div>
      <p>Hello! {userEmail}</p>
      <h2>Orders History</h2>
      <RecordGrid
        records={records}
        recordCartDetails={recordCartDetails}

      />
    </div>
  );
};

export default RecordsList;
