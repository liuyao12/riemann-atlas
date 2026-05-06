Let $f: U \to \mathbb{R}^m$ be a function on an open set $U \subseteq \mathbb{R}^n$, and $f_1, \ldots, f_m$ be the components of $f$. The *partial derivatives of* $f_i$ at $x^* = (x_1, \ldots, x_n) \in U$ are 

$$
\frac{\partial f_i}{\partial x_j} (x^*) = \lim_{h \to 0} \frac{f_i(x_1, \ldots, x_j + h, \ldots, x_n) - f(x_1, \ldots, x_n)}{h}
$$

for $j = 1, \ldots, n$. If the partial derivatives exists for all $x^* \in U$, and furthermore are continuous for $x^* \in U$, then the function $f$ is said to be *differentiable* (on $U$).
