One can construct a sequence of distinct primes $p_i$ as follows:

- Let $p_0 = 2$ be the first prime;
- To define $p_n$, let $N = p_0 p_1 \cdots p_{n-1} + 1$, and if $N$ is a prime, set $p_{n} = N$; otherwise, let $p_{n}$ be the smallest prime divisor of $N$.

By construction, $p_n$ could not have appeared periously (i.e., $p_n \neq p_i$ for all $i < n$), otherwise it would imply $p_n | 1$.

This sequence gives infinitely many primes.
