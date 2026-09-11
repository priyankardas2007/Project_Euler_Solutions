function XORDecryption(cipher) {

    let bestSum = 0;
    let bestScore = -1;

    for (let a = 97; a <= 122; a++) {
        for (let b = 97; b <= 122; b++) {
            for (let c = 97; c <= 122; c++) {

                const key = [a, b, c];

                let text = "";

                for (let i = 0; i < cipher.length; i++) {

                    const decrypted =
                        cipher[i] ^ key[i % 3];

                    text += String.fromCharCode(decrypted);
                }
                let score =
                    (text.match(/ the /gi) || []).length +
                    (text.match(/ and /gi) || []).length +
                    (text.match(/ of /gi) || []).length;

                if (score > bestScore) {
                    bestScore = score;

                    bestSum = [...text]
                        .reduce(
                            (sum, ch) => sum + ch.charCodeAt(0),
                            0
                        );
                }
            }
        }
    }

    return bestSum;
}
