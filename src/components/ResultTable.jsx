import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function ResultTable({ input }) {


    const rowData = calculateInvestmentResults(input);
    const initialInvest = rowData[0].valueEndOfYear - rowData[0].interest - rowData[0].annualInvestment;


    return (
        <table id="result" className="center">
            <thead>
                <tr>
                    <th>
                        Year
                    </th>
                    <th>
                        Investment Value
                    </th>
                    <th>
                        Interest(Year)
                    </th>
                    <th>
                        Total Interest
                    </th>
                    <th>
                        Invested Capital
                    </th>
                </tr>
            </thead>
            <tbody>
                {rowData.map(row => {
                    const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvest;
                    const totalAmount = row.valueEndOfYear - totalInterest;


                    return <tr key={row.year}>
                        <td>{row.year}</td>
                        <td>{formatter.format(row.valueEndOfYear)}</td>
                        <td>{formatter.format(row.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmount)}</td>
                    </tr>
                })}
            </tbody>
        </table >
    )
}