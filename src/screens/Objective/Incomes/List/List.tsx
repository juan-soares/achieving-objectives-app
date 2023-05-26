import { useEffect } from "react";
import { IIncome } from "../../../../shared/interfaces/income.interface";
import StyledIncomesList from "./List.styled";

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
    <StyledIncomesList>
      <h3>Rendimentos</h3>

      {!incomesList.length && <span>Sem itens na lista.</span>}

      {incomesList.length > 0 && (
        <ul>
          {" "}
          {incomesList
            .sort(
              (a, b) =>
                Date.parse(b.expirationDate) - Date.parse(a.expirationDate)
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
                  <div className="title-content">
                    <span>{title}</span>
                    <span>{profitability}% a.a</span>
                  </div>
                  <div>
                    <div className="purchase-content">
                      <div>
                        <label>Data de compra: </label>
                        <span>
                          {purchaseDate.split("-").reverse().join("/")}
                        </span>
                      </div>
                      <div>
                        <label>Valor de compra: </label>
                        <span>
                          {purchaseAmount.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="tax-content">
                    <label>IR </label>
                    <span>{taxes} %</span>
                  </div>
                  <div className="time-content">
                    <div>
                      <label>Data de vencimento: </label>
                      <span>
                        {expirationDate.split("-").reverse().join("/")}
                      </span>
                    </div>
                    <div>
                      <label>Tempo de investimento: </label>
                      <span>
                        {Math.round(
                          (Date.parse(expirationDate) -
                            Date.parse(purchaseDate)) /
                            2628000000
                        )}{" "}
                        meses
                      </span>
                    </div>
                  </div>
                  <div className="amount-content">
                    <label>Valor liquido estimado de retorno: </label>
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
                  </div>
                </li>
              )
            )}
        </ul>
      )}
    </StyledIncomesList>
  );
}
