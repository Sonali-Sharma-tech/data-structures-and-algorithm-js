/**
 * You are given a license key represented as a string s that consists of only alphanumeric characters and dashes.
 *  The string is separated into n + 1 groups by n dashes. You are also given an integer k.
    We want to reformat the string s such that each group contains exactly k characters,
    except for the first group, which could be shorter than k but still must contain at least one character.
    Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.
    Return the reformatted license key.

    Input: s = "5F3Z-2e-9-w", k = 4
    Output: "5F3Z-2E9W"

    Input: s = "2-5g-3-J", k = 2
    utput: "2-5G-3J"
 */

    function licenseKeyFormatting(s, k) {
        let str = '';
        let res_str = '';
        let count = 0;
        for(let i = 0; i < s.length; i++) {
            if(isAlphanumeric(s.charAt(i))) {
                str = str + s.charAt(i);
            }
        }
        str = str.toUpperCase();
        for(let i= str.length -1; i >= 0; i--) {
            count ++;
            if(count === k && i !== 0) {
                res_str = '-' + str.charAt(i) + res_str;
                count = 0;
            } else {
                 res_str = str.charAt(i) + res_str;
              console.log(res_str);
            }
        }
      return res_str;
    };
    
    function isAlphanumeric(s) {
        let found = s.match(/[0-9A-Za-z]/g) ? true : false;
        return found;
    }
    
    
    console.log(licenseKeyFormatting('2-5g-3-J', 2))