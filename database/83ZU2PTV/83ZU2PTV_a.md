Let $f: U \to \mathbb{R}^m$ be a function on an open set $U \subseteq \mathbb{R}^n$. We say that $f$ is *differentiable at* $x^* \in U$ if there exists a linear map $L: \mathbb{R}^n \to \mathbb{R}^m$, called the *derivative of* $f$ *at* $x^* \in U$, such that

$$
f(x^* + h) - f(x^*) - L(h) = O(|h|^2)
$$

for $h \in \mathbb{R^n}$ as $h \to 0$. The *partial derivatives* of $f$ (at $x^*$) are the components of $L$, in the standard basis:

$$
L = \begin{bmatrix}
\frac{\partial f_1}{\partial x_1}(x^*) & \frac{\partial f_1}{\partial x_2}(x^*) & \cdots $ \frac{\partial f_1}{\partial x_n}(x^*)  \\\\
\frac{\partial f_2}{\partial x_1}(x^*) & \frac{\partial f_2}{\partial x_2}(x^*) & \cdots $ \frac{\partial f_2}{\partial x_n}(x^*)  \\\\
\vdots & & \ddots & \\\\

\frac{\partial f_m}{\partial x_1}(x^*) & \frac{\partial f_m}{\partial x_2}(x^*) & \cdots $ \frac{\partial f_m}{\partial x_n}(x^*) 
\end{bmatrix}
$$

We say that $f$ is *differentiable* if $f$ is differentiable at all $x^* \in U$, and the *partial derivatives* $\frac{\partial f_i}{\partial x_j}$, $i=1, \ldots, m$, $j=1, \ldots, n$, are functions $U \to \mathbb{R}$, taking $x^* \mapsto \frac{\partial f_i}{\partial x_j}(x^*)$.
