Let $V_i \cong k^n$ be the vector space of the $i$-th column of the $n\times n$ matrices over a field $k$, and identify the vector space of $n\times n$ matrices $M_n(k)$ with $V_1 \times \cdots \times V_n$. The *determinant* is a map $\det: M_n(k)\to k$ such that

- it is multilinear, i.e., it is linear in each $V_i$:

$$
\det([\ldots, \alpha v_i + \beta v_i', \ldots]) = \alpha \det([\ldots, v_i, \ldots]) + \beta \det([\ldots, v_i', \ldots])
$$

- it is antisymmetric in any two factors:

$$
\det([\ldots, v_i, \ldots v_j, \ldots]) = - \det([\ldots, v_j, \ldots v_i, \ldots])
$$

- $\det(I) = 1$.

If $k$ is a commutative ring, replace "vector space" by "free module" over $k$.
