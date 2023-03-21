import { DECREASE, INCREASE, RESET } from "../types/counterTypes";

// burada sadece fonksiyon çağırma var. veri gönderimi olmadığı için payloada gerek yok.
// increase de süslü ile yaptığımız için return yaptık. düz parantezle yapsak returne gerek yok.

export const inc = () => {
  return { type: INCREASE };
};

export const dec = () => ({ type: DECREASE });

export const reset = () => ({ type: RESET });
