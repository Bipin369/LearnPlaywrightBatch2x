function questionName(input) {

    const { frequency, impact } = input;
    let answer = "";

    if (frequency === "always") {
        if (impact === "blocker") {
            answer = "P0";
        } else if (impact === "major") {
            answer = "P1";
        } else if (impact === "minor") {
            answer = "P2";
        }
    } else if (frequency === "often") {
        if (impact === "blocker") {
            answer = "P1";
        } else if (impact === "major") {
            answer = "P2";
        } else if (impact === "minor") {
            answer = "P3";
        }
    } else if (frequency === "rarely") {
        if (impact === "blocker") {
            answer = "P2";
        } else if (impact === "major") {
            answer = "P3";
        } else if (impact === "minor") {
            answer = "P4";
        }
    }

    return answer;
}