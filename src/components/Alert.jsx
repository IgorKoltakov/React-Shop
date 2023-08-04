import React, { useContext, useEffect } from "react";
import { Context } from "./Shop";

function Alert() {
  const { alertName, closeAlert } = useContext(Context);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [alertName]);

  return (
    <div className="alert alert-success gone-alert" role="alert">
      {alertName} Добавлен в корзину
    </div>
  );
}

export { Alert };
