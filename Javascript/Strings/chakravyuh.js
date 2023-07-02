/**
 * Problem Statement:

In the legendary epic of the Mahabharata, the young warrior Abhimanyu is faced with the arduous task of breaking through the Kaurava's formidable defensive formation, the Chakravyuh. This labyrinthine formation is composed of seven concentric circles, each protected by a complex coded lock.

The code to unlock each circle is not a mere combination of numbers but rather a mystical mantra. Each mantra is unique and requires two distinct sacred syllables to be spoken together. The power of these syllables, when combined, can match the energy barrier, K, of the corresponding circle, thereby unlocking it.

As Abhimanyu stands before each layer, he is aware of the sacred syllables inscribed on the array of warriors’ shields before him, warriors[]. Each syllable carries a distinct energy level. His challenge is to find the correct pair of syllables whose combined energy level equals the energy barrier of the lock, K.

Help Abhimanyu break through the Chakravyuh by writing a function, decodeMantra(warriors: number[], K: number): [number, number]. This function takes an array of energy levels and a target energy level K as input. It should return the indices of the two warriors whose sacred syllables combine to reach K. If no such pair exists or if the input is invalid, the function should return [-1, -1].

Guide Abhimanyu on his daring endeavor to penetrate the Chakravyuh and change the course of the war in favor of the Pandavas!
Example 1:

Input:

typescript
Copy code
let warriors = [2, 7, 11, 15]
let K = 9
decodeMantra(warriors, K)
Output: [0, 1]

Explanation: In this example, the sacred syllables inscribed on the shields of the first and second warriors combine to give the energy level K (2 + 7 = 9). Hence, the function returns their indices [0, 1].

Example 2:

Input:

typescript
Copy code
let warriors = [1, 3, 4, 8, 12]
let K = 7
decodeMantra(warriors, K)
Output: [1, 2]

Explanation: The second and third warriors' sacred syllables add up to the energy level K (3 + 4 = 7). Hence, the indices [1, 2] are returned.

Example 3:

Input:

typescript
Copy code
let warriors = [5, 20, 3, 6, 10]
let K = 50
decodeMantra(warriors, K)
Output: [-1, -1]

Explanation: There is no pair of warriors whose sacred syllables combine to reach the energy level K. Hence, the function returns [-1, -1], indicating that the given combination to unlock the circle in the Chakravyuh is not present.

Remember, the indices are based on zero-indexed arrays, typical in many programming languages, including TypeScript.

*/

function decodeMantra(warriors, K) {
    let indexMap = {};
    let map = {};
    let results = [];
    for (let i = 0; i < warriors.length; i++) {

        if (map[warriors[i]] === k - warriors[i]) {
            results = [indexMap[k - warriors[i]], i]
        } else {
            map[warriors[i]] = k - warriors[i];
            indexMap[warriors[i]] = i;
        }


    }
    return results;
}

decodeMantra([1, 3, 4, 8, 12], 7)