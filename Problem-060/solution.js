function primePairSets() {
    function isPrime(num) {
      if (num < 2) return false;
      if (num === 2) return true;
      if (num % 2 === 0) return false;
      for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
    function compatible(a, b) {
      let ab = Number(String(a) + String(b));
      let ba = Number(String(b) + String(a));
      return isPrime(ab) && isPrime(ba);
    }
    let primes = [];
    for (let i = 3; i < 10000; i += 2) {
      if (i !== 5 && isPrime(i)) {
        primes.push(i);
      }
    }
    let answer = Infinity;
    function search(set, candidates, sum) {
        if (set.length === 5) {
            if (sum < answer) {
                answer = sum;
            }
            return;
        }
        for (let i = 0; i < candidates.length; i++) {
            let p = candidates[i];
            if (sum + p >= answer) {
                break;
            }
            let nextCandidates = [];
            for (let j = i + 1; j < candidates.length; j++) {

                let q = candidates[j];

                if (compatible(p, q)) {
                    nextCandidates.push(q);
                }
            }
            search(
                [...set, p],
                nextCandidates,
                sum + p
            );
        }
    }
    search([], primes, 0);

    return answer;
}


console.log(primePairSets());
