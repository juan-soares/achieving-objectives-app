import { IIncome } from "../../../../shared/interfaces/income.interface";

interface IProps {
  incomesList: IIncome[];
}

export function IncomesList({ incomesList }: IProps) {
  return (
    <div>
      <h3>Rendimentos</h3>

      {incomesList.map(
        ({ title, profitability, purchaseDate, taxes, expirationDate }) => (
          <li key={title}>
            <span>{title}</span>
            <span>{profitability}% a.a</span>
            <label>Data de Compra: </label>
            <span>{purchaseDate}</span>

            <label>IR </label>
            <span>{taxes} %</span>

            <label>Data de Vencimento: </label>
            <span>{expirationDate}</span>

            <label></label>
          </li>
        )
      )}
    </div>
  );
}
