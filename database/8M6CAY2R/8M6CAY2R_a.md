A $m\times n$ *matrix* is a tuple of $mn$ elements $A = \\{a_{ij}\\}_{i,j}$ from a set $S$ (called the *entries* of $A$) indexed by $1 \leq i \leq m$ and $1 \leq j \leq n$, conventionally arranged as

$$
A = \begin{pmatrix} 
    a_{11} & a_{12} & \cdots & a_{1n} \\
    a_{21} & a_{22} & \cdots & a_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    a_{m1} & a_{m2} & \cdots & a_{mn} \\
\end{pmatrix}.
$$

The $i$-th *row* of the matrix is the $n$-tuple $[a_{i1}, a_{i2}, \ldots a_{in}] \in S^n$ for $1 \leq i \leq m$, and the $j$-th *column* is the $m$-tuple $[a_{1j}, a_{2j}, \ldots, a_{mj}] \in S^m$ for $1 \leq j \leq n$.

More generally, a *tensor* of size $n_1 \times n_2 \times \cdots \times n_r$ is a tuple of $\prod_k n_k$ elements $a_{i_1 i_2 \cdots i_r}$ indexed by $1 \leq i_k \leq n_k$.
