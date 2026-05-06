Assume that $a < b$, and let $(a=a_0 < a_1 < a_2 < \cdots < a_n=b)$ be a partition of the interval $[a, b]$. By the mean value theorem, we have on each subinterval $[a_i, a_{i+1}]$,

$$
f(a_{i+1})-f(a_i) = f'(\xi_i)\\, (a_{i+1}-a_i)
$$

for some $\xi_i\in (a_i, a_{i+1})$, and it follows that

$$
f(b)-f(a) = \sum_{i=0}^{n-1} f(a_{i+1}) - f(a_i) = \sum_{i=0}^{n-1} f'(\xi_i)\\, (a_{i+1}-a_i).
$$

In the limit of the partition becoming infinitely fine, the right-hand side approaches the integral

$$
\int_a^b f'(x)\\,dx
$$

by continuity of $f'$.
