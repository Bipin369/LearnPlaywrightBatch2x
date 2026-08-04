function questionName(input) {

    if (!input || input.length === 0) {
        let answer = { min: 0, max: 0, average: 0, breachedSLACount: 0 };
        return answer;
    }

    let min = input[0];
    let max = input[0];
    let sum = 0;
    let breachedSLACount = 0;
    let i = 0;

    while (i < input.length) {
        let time = input[i];

        if (time < min) {
            min = time;
        }
        if (time > max) {
            max = time;
        }
        if (time > 500) {
            breachedSLACount++;
        }

        sum += time;
        i++;
    }

    let average = sum / input.length;

    let answer = {
        min: min,
        max: max,
        average: average,
        breachedSLACount: breachedSLACount
    };

    return answer;
}