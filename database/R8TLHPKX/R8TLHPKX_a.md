It is a direct computation. To facilitate presentation, we shall use $\partial_i$ to denote the operator $\frac{\partial}{\partial x_i}$, and juxtaposition means composition of operators.

$$
\begin{aligned}
[ \Delta, Q ] &= \sum_{i,j} [\partial_i^2, x_j^2] \\\\
&= \sum_{i} [\partial_i^2, x_i^2] \\\\
&= \sum_i \left( \partial_i^2(x_i^2) + 2 \partial_i (x_i^2) \partial_i + x_i^2 \partial_i^2 - x_i^2 \partial_i^2 \right) \\\\
&= \sum_i (2 + 4x_i \partial_i) \\\\
&= 4\sum_i x_i \partial_i + 2n \\\\
&= 4 E
\end{aligned}
$$

where

$$
E := \sum_i x_i \partial_i + \frac{n}{2}
$$

is the (shifted) Euler operator. Next,

$$
[E, Q] = \sum_i [ x_i \partial_i, x_i^2] = \sum_i 2 x_i^2 = 2 Q
$$

$$
[E, \Delta] = \sum_i [ x_i \partial_i, \partial_i^2] = \sum_i -2\partial_i^2 = -2 \Delta
$$

and they don't generate anything new. Thus, we can identify $H \mapsto E$, $X \mapsto \frac{1}{2}Q$, and $Y \mapsto \frac{1}{2}\Delta$, where $\\{H, X, Y\\}$ is the standard basis of $\mathfrak{sl}_2(\mathbf{K})$, namely

$$
H = \begin{pmatrix} 1 & \\\\ & -1 \end{pmatrix} \qquad X = \begin{pmatrix} & 1 \\\\ 0 & \end{pmatrix} \qquad Y = \begin{pmatrix} & 0 \\\\ 1 & \end{pmatrix}
$$

which satisfy the relations

$$
[H, X] = 2X \qquad [H, Y] = -2Y \qquad [X, Y] = H
$$
