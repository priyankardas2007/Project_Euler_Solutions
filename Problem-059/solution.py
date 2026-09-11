def xor_decryption(cipher):

    best_sum = 0
    best_score = -1

    for a in range(97, 123):
        for b in range(97, 123):
            for c in range(97, 123):

                key = [a, b, c]

                text = ""

                for i in range(len(cipher)):

                    decrypted = cipher[i] ^ key[i % 3]

                    text += chr(decrypted)

                score = (
                    text.lower().count(" the ") +
                    text.lower().count(" and ") +
                    text.lower().count(" of ")
                )

                if score > best_score:

                    best_score = score

                    best_sum = sum(ord(ch) for ch in text)

    return best_sum
