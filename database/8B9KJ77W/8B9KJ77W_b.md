A (formal) *power series* in a commutative ring $R$ is a (formal) expression

$$
\sum_{n \geq n_0} a_n t^n
$$

with coefficients $a_n \in R$, and *indeterminate* $t$. It is nothing more than a map $\mathbb{Z} \to R$, $n \mapsto a_n$ for which there exists $n_0$ such that $a_n = 0$ for all $n < n_0$. The set of all power series in $R$ form a (commutative) ring, denoted $R((t))$, under addition and multiplication:

- $\sum a_n t^n + \sum b_n t^n = \sum (a_n + b_n) t^n$;
- $\sum a_n t^n \cdot \sum b_m t^m = \sum_n (\sum_i a_i b_{n-i}) t^n$

and an algebra over $R$ under

- $\lambda \cdot \sum a_n t^n = \sum \lambda a_n t^n$ for $\lambda \in R$.

In the case that all $n_0 \geq 0$, it is denoted $R[[t]]$.
