Let $C_r$ be the circle of radius $r$:

$$
C_r = \\{ re^{i\theta} \\; : \\; 0 \leq \theta < 2 \pi \\}.
$$

For sufficiently large $r$, the image of $C_r$ under $p: \mathbb{C} \to \mathbb{C}$ is a loop of radius $\sim r^n$ going around $n$ times. As we shrink $r$ to $0$, the loop $p(C_r)$ shrinks down to a single point, namely $p(0)$. Suppose $p(0) \neq 0$, then the loop $p(C_r)$ must have crossed the point $0$ exactly $n$ times during the process, and those correspond to the roots of $p(x)$. If $p(0) = 0$, we can factor out $x$'s, i.e.,

$$
p(x) = x^k q(x)
$$

for some polynomial $q(x)$ of degree $n-k$, with $q(0) \neq 0$, and the argument works for $q(x)$.
