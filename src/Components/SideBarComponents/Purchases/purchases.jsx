import AppInput from "../../../Components/AppInput/appInput";
import AppButton from "../../AppButton/appButton";
import "./purchases.scss";


function Purchases() {

    return (
        <div className="bg-stone-50 purchases p-4">
            <h6>Add bill</h6>

            <div className="inputPurchases">
                <AppInput labelClassName="block text-sm font-bold mb-2" label="Vendor" type="text" arialabel="Vendor" placeholder="Choose" htmlFor="Vendor" />
                <AppInput labelClassName="block text-sm font-bold mb-2" label="Date" type="date" arialabel="Date" placeholder="2022-12-98" htmlFor="Date" />
                <AppInput labelClassName="block text-sm font-bold mb-2" label="Bill#" type="text" arialabel="Bill" placeholder="Bill" htmlFor="Bill" />
                <AppInput labelClassName="block text-sm font-bold mb-2" label="Currency" type="text" arialabel="Currency" placeholder="Currency" htmlFor="Currency" />
                <AppInput labelClassName="block text-sm font-bold mb-2" label="Due Date" type="date" arialabel="Duedate" placeholder="2022-12-98" htmlFor="DudDate" />
                <AppInput labelClassName="block text-sm font-bold mb-2" label="Notes" type="text" arialabel="Notes" placeholder="Notes" htmlFor="Notes" />
                <AppInput labelClassName="block text-sm font-bold mb-2" label="Upload Copy of Bill" type="file" arialabel="Upload Copy of Bill" placeholder="Upload Copy of Bill" htmlFor="UploadCopyofBill" />
                <AppInput labelClassName="block text-sm font-bold mb-2" label="P.O. / S.O" type="number" arialabel="P.O. / S.O" placeholder="P.O. / S.O" htmlFor="PO" />
            </div>
            <div>
                <table>
                    <tr>
                        <th>Item</th>
                        <th>Expense Category</th>
                        <th>Description</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Tax</th>
                        <th>Amount</th>
                        <th></th>

                    </tr>
                    <tr>
                        <td><AppInput labelClassName="block text-sm font-bold mb-2" label="Vendor" type="text" arialabel="Vendor" placeholder="Choose" htmlFor="Vendor" /></td>
                        <td><AppInput labelClassName="block text-sm font-bold mb-2" label="Vendor" type="text" arialabel="Vendor" placeholder="Choose" htmlFor="Vendor" /></td>
                        <td><AppInput labelClassName="block text-sm font-bold mb-2" label="Vendor" type="text" arialabel="Vendor" placeholder="Choose" htmlFor="Vendor" /></td>
                        <td><AppInput labelClassName="block text-sm font-bold mb-2" label="Vendor" type="text" arialabel="Vendor" placeholder="Choose" htmlFor="Vendor" /></td>
                        <td><AppInput labelClassName="block text-sm font-bold mb-2" label="Vendor" type="text" arialabel="Vendor" placeholder="Choose" htmlFor="Vendor" /></td>
                        <td><AppInput labelClassName="block text-sm font-bold mb-2" label="Vendor" type="text" arialabel="Vendor" placeholder="Choose" htmlFor="Vendor" /></td>
                        <td>N0.00</td>
                        <td>Delete</td>

                    </tr>
                    <div className="flex justify-end w-full">
                      <div>  <p>Subtotal: N0.00</p>
                        <p>Total (NGN):N0.00 </p></div>
                    </div>
                </table>
            </div>
            <div>
                <AppButton title="Cancel"/> <AppButton title="Save"/>
            </div>
        </div>
    );
};

export default Purchases;