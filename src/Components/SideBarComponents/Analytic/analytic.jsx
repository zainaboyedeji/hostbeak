import AppButton from "../../AppButton/appButton";
import quote from "../../../Images/quote.png";

function Analytic (){
    const checkBox = <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>;
    const data = [
        {check: checkBox, month: "February Report", space:"",button: <AppButton title="View"/> ,image:<img src={quote} alt="quote"/>},
        { check: checkBox, month: "February Report", space:"",button:  <AppButton title="View"/> ,image:<img src={quote} alt="quote"/> },
        { check: checkBox, month: "March 2021 Report", space:"",button: <AppButton title="View"/> ,image:<img src={quote} alt="quote"/>},
        {check: checkBox, month: "February Report", space:"",button: <AppButton title="View"/> ,image:<img src={quote} alt="quote"/>},
        { check: checkBox, month: "February Report", space:"",button:  <AppButton title="View"/> ,image:<img src={quote} alt="quote"/> },
        { check: checkBox, month: "March 2021 Report", space:"",button: <AppButton title="View"/> ,image:<img src={quote} alt="quote"/>},
        {check: checkBox, month: "February Report", space:"",button: <AppButton title="View"/> ,image:<img src={quote} alt="quote"/>},
        { check: checkBox, month: "February Report", space:"",button:  <AppButton title="View"/> ,image:<img src={quote} alt="quote"/> },
        { check: checkBox, month: "March 2021 Report", space:"",button: <AppButton title="View"/> ,image:<img src={quote} alt="quote"/>},
      ]
    return(
        <div className="bg-stone-50 purchases p-4">
        <h6>View Report</h6>
 <table>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.check}</td>
              <td>{val.month}</td>
              <td>{val.space}</td>
              <td>{val.button}</td>
              <td>{val.image}</td>
            </tr>
          )
        })}
      </table>


        </div>
    )
};

export default Analytic;