/**
 * Created by Viacheslav on 27.12.2016.
 */

export const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};
