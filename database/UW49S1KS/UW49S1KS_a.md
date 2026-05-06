The eigenvalues of $A$ are the roots of the characteristic polynomial $p_A(\lambda) = \det(\lambda I - A)$, and since $\mathbb{C}$ is algebraically closed, there are exactly $n$ complex roots, counted with multiplicity.

Let $\lambda$ be an eigenvalue of $A$, and $v$ be any (nonzero) eigenvector for $\lambda$, i.e., $Av = \lambda v$. Since $A$ is Hermitian,

$$
\begin{aligned}
\langle \underbrace{Av}, v\rangle &= \langle v, \underbrace{Av} \rangle, \\\\
\lambda v \\;\\;\quad & \qquad\quad \lambda v
\end{aligned}
$$

and by sesquilinearity,

$$
\bar{\lambda} \langle v, v\rangle = \lambda \langle v, v\rangle
$$

which implies that $\bar{\lambda} = \lambda$, i.e., $\lambda$ is real.

Suppose that all the $n$ eigenvalues $\lambda_i$ are distinct, so that there is a (nonzero) eigenvector $v_i$ associated to each $\lambda_i$. By the same argument, for each pair $i \neq j$,

$$
\begin{aligned}
\langle \underbrace{Av_i}, v_j\rangle &= \langle v_i, \underbrace{Av_j} \rangle, \\\\
\lambda_i v_i \\;\\;\quad & \qquad\quad \lambda_j v_j
\end{aligned}
$$

and (since $\lambda_i$ is real),

$$
\lambda_i \langle v_i, v_j\rangle = \lambda_j \langle v_i, v_j\rangle
$$

which implies that $\langle v_i, v_j\rangle = 0$. To make the $v_i$'s orthonormal, we simply normalize each $v_i$, i.e., divide by its norm $\langle v_i, v_i\rangle^{1/2}$.

For full generality (when some of the eigenvalues have multiplicity $> 1$), we may use a continuity argument.
