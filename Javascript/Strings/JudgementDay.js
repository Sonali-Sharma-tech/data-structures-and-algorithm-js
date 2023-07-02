/**
 * Problem Statement:

In the movie Terminator 2: Judgment Day, the Terminator has been sent back in time to protect John Connor from being assassinated by another more advanced Terminator, the T-1000. As part of his protective protocol, the Terminator continuously scans through surveillance data recorded in his system to identify potential threats to John.

However, due to the complexities of human life, sometimes important events or sightings of the T-1000 are not clearly distinguishable and are described in fragmented sentences within the surveillance logs.

The Terminator's task is to sift through this vast amount of data and find the earliest reference to any potential threat, represented as a sequence of keywords. However, these keywords may not always appear adjacent to each other, although they always appear in order within the text.

For instance, the sequence of keywords might be "T-1000 sighted". In the surveillance logs, this sequence might be recorded as:

"... routine analysis complete ... T-1000 in vicinity ... potential threat ... sighted near the target ..."

The Terminator needs to locate the start and end of this sequence within the logs.

Write a function identifyThreat(logs: string, keywords: string): [number, number] that returns the starting and ending indices of the sequence of keywords. If no such sequence exists, your function should indicate that no potential threat has been identified.

For instance, if the keywords are "T-1000 sighted" and logs represent a string of surveillance data, your function might return the indices [1023, 1068] if that's where the sequence begins and ends within the logs.

If the sequence doesn't appear in order, or if some keywords are missing, your result should be [-1, -1], denoting that no potential threat was identified according to your search criteria.
 */

let str1 = "t-1000 vicinity sighted"
let str2 = "In the movie Terminator 2: Judgment Day, the Terminator has been sent back in time to protect John Connor from being assassinated by another more advanced Terminator, the T-1000. As part of his protective protocol, the Terminator continuously scans through surveillance data recorded in his system to identify potential threats to John routine analysis complete ... t-1000 in vicinity ... potential threat ... sighted near the target ..."

function identifyThreat(logs, keywords) {
    let results = [];
    let wordIndex = 0;
    let index = 0;
    let start = 0;
    let end = 0;
    let strArray = keywords.split(" ") // ["t-1000", "vicinity", "sighted"]
    console.log('str', strArray);

    for (let i = 0; i < logs.length; i++) {
        if (strArray[wordIndex] && logs[i] == strArray[wordIndex][index]) {
            index++;
            if (wordIndex === 0) {
                start = i;
            }

        } else {
            index = 0;
            if (wordIndex === 0) {
                start = 0;
            }
        }
        if (strArray[wordIndex] && index === strArray[wordIndex].length) {
            end = i;
            wordIndex++;
            index = 0;
            results = [start, end];
        }

    }

    console.log('results', results);
}

identifyThreat(str2, str1)
