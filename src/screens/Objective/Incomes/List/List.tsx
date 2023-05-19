import { useEffect } from "react";
import { IIncome } from "../../../../shared/interfaces/income.interface";

interface IProps {
  incomesList: IIncome[];
  setNetAmount: React.Dispatch<React.SetStateAction<number>>;
}

export function IncomesList({ incomesList, setNetAmount }: IProps) {
  const calculateEstimatedProfit = (
    capital: number,
    profitability: number,
    expirationDate: string,
    purchaseDate: string,
    taxes: number
  ) => {
    profitability = profitability / 100;
    const timeInYears = Math.round(
      (Date.parse(expirationDate) - Date.parse(purchaseDate)) / 31556926000
    );

    const estimatedProfit = capital * (1 + profitability) ** timeInYears;

    const netAmount = estimatedProfit - estimatedProfit * (taxes / 100);

    return netAmount;
  };
  let netTotalAmount = 0;

  incomesList.forEach(
    ({
      purchaseAmount,
      profitability,
      expirationDate,
      purchaseDate,
      taxes,
    }) => {
      netTotalAmount =
        netTotalAmount +
        calculateEstimatedProfit(
          purchaseAmount,
          profitability,
          expirationDate,
          purchaseDate,
          taxes
        );
    }
  );

  useEffect(() => {
    setNetAmount(netTotalAmount);
  }, []);

  return (
    <div>
      <h3>Rendimentos</h3>

      {!incomesList.length && <span>Sem itens na lista.</span>}

      {incomesList
        .sort(
          (a, b) => Date.parse(b.expirationDate) - Date.parse(a.expirationDate)
        )
        .map(
          (
            {
              title,
              profitability,
              purchaseDate,
              purchaseAmount,
              taxes,
              expirationDate,
            },
            index
          ) => (
            <li key={index}>
              <span>{title}</span>
              <span>{profitability}% a.a</span>
              <label>Data de compra: </label>
              <span>{purchaseDate.split("-").reverse().join("/")}</span>
              <label>Valor de compra: </label>
              <span>
                {purchaseAmount.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>

              <label>IR </label>
              <span>{taxes} %</span>

              <label>Data de vencimento: </label>
              <span>{expirationDate.split("-").reverse().join("/")}</span>

              <label>Tempo de investimento: </label>
              <span>
                {Math.round(
                  (Date.parse(expirationDate) - Date.parse(purchaseDate)) /
                    2628000000
                )}{" "}
                meses
              </span>

              <label>Valor liquido estimado de retorno:</label>
              <span>
                {calculateEstimatedProfit(
                  purchaseAmount,
                  profitability,
                  expirationDate,
                  purchaseDate,
                  taxes
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </li>
          )
        )}
    </div>
  );
}
