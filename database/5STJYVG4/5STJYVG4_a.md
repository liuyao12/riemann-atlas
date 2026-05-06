The *tensor product* of modules $M$ and $N$ over a commutative ring $R$ is a $R$-module $M \otimes_{R} N$ (or simply $M \otimes N$), together with a bilinear map $\phi: M \times N \to M \otimes N$, satisfying the universal property:

- every bilinear map $f: M \times N \to L$ to a $R$-module $L$ factors through $\phi$, i.e., there exists a linear map $\tilde{f}: M \otimes N \to L$ such that $f = \tilde{f} \circ \phi$.

$$
\begin{array}{ccc}
 & & L \quad \\
 & {}^{f} \nearrow & \uparrow{\tilde{f}} \\
M \times N & \xrightarrow{\phi} & M \otimes N \\
\end{array}
$$

The image $\phi(m, n)$ is often denoted $m \otimes n$, for $m \in M$ and $n \in N$.
