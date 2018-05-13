/*
 * +—————————————————————————————————————————————————————————————————————————————————————+
 * | +—————————————————————————————————————————————————————————————————————————————————+ |
 * | | Utility functions.
 * | +—————————————————————————————————————————————————————————————————————————————————+ |
 * +—————————————————————————————————————————————————————————————————————————————————————+
 */

 /**
  * Convert integers into English readable form.
  * Example: 1 = 1st, 13 = 13th, 342 = 342nd.
  * 
  * @param {int} no Number to convert.
  */
export const englishNum = (no) => {
  const s_no = `${no}`;

  if (s_no.endsWith("1") && !s_no.endsWith("11"))
    return `${no}st`;
  else if (s_no.endsWith("2") && !s_no.endsWith("12"))
    return `${no}nd`;
  else if (s_no.endsWith("3") && !s_no.endsWith("13"))
    return `${no}rd`;
  return `${no}th`;
};
