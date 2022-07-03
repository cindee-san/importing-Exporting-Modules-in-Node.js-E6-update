export default function reverseString (string) {
    return [ ...string ].reverse().join('');
};

export const shortenString = (string) => {
    return string.length > 50 ? string.substring(0, 50) + "..." : string;
};

//   module.exports = {reverseString, shortenString};