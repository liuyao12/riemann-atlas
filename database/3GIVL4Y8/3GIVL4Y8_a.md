The *polynomial ring* (in one variable) over a commutative ring $R$ is the commutative ring $R[x]$ of all polynomials

$$
p(x) = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_1 x + a_0
$$

for some $d \in \mathbb{N}$, with coefficients $a_i \in R$. The operations of addition and multiplication are defined on the monomials by $x^n \cdot x^m = x^{n+m}$.

The *polynomial ring* over $R$ in $n$ variables is the polynomial ring $R[x_1, \ldots, x_{n-1}][x_n]$ over $R[x_1, \ldots, x_{n-1}]$, and is denoted $R[x_1, \ldots x_n]$. Elements of $R[x_1, \ldots, x_n]$ can be written uniquely as a (finite) sum of *monomials* in $x_1, \ldots, x_n$ with coefficients in $R$,

$$
p(x_1, \ldots, x_n) = \sum_{I \in \mathbb{N}^n} a_{I} x^I
$$
