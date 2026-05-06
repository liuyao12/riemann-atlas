Assume that $A$ is diagonalizable, i.e., $A = S \Lambda S^{-1}$ for some invertible matrix $S$ and diagonal matrix $\Lambda=\mathop{\mathrm{diag}}(\lambda_1, \ldots, \lambda_n)$ over $\mathbb{C}$. Then,

$$
e^A = \sum_{k=0}^{\infty} \frac{1}{k!} (S \Lambda S^{-1})^k = \sum_{k=0}^{\infty} \frac{1}{k!} S \Lambda^k S^{-1} = S e^{\Lambda} S^{-1}
$$

where $e^{\Lambda}$ is the diagonal matrix $\mathop{\mathrm{diag}}(e^{\lambda_1}, \ldots, e^{\lambda_n})$. It follows that 

$$
\det (e^{A}) = \det (e^{\Lambda}) = e^{\lambda_1} e^{\lambda_2} \cdots e^{\lambda_n} = e^{\lambda_1 + \lambda_2 + \cdots + \lambda_n}.
$$

On the other hand, 

$$
\mathop{\mathrm{tr}}(A) = \mathop{\mathrm{tr}}(S \Lambda S^{-1}) = \mathop{\mathrm{tr}}(\Lambda S^{-1}S) = \mathop{\mathrm{tr}}(\Lambda) = \lambda_1 + \cdots + \lambda_n
$$

and the identity follows.

For the general case, $\Lambda$ is not diagonal but can be made upper triangular (i.e., $\Lambda_{ij} = 0$ for $i > j$), and the argument works too.
