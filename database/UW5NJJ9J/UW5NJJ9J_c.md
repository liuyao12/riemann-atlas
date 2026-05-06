It follows from repeated integration of the bound on $f^{(n+1)}$. For the sake of definiteness, take $n+1=3$ and assume $a < b$. Since 

$$
-M \leq f'''(x) \leq M \\; , \qquad a < x < b
$$

and $f'''$ is continuous, we can integrate from $a$ to an arbitrary point $x_1 \in [a, b]$

$$
\int_{a}^{x_1} f'''(x) \\, dx \leq \int_{a}^{x_1} M \\, dx
$$

and by the Fundamental Theorem of Calculus, this becomes

$$
f''(x_1) - f''(a) \leq  M \cdot (x_1 - a)
$$

(and similarly for the lower bound). We can now integrate both sides, regarded as functions of $x_1$, from $a$ to an arbitrary point $x_2 \in [a, b]$

$$
f'(x_2)-f'(a) - f''(a) (x_2 - a) \leq M \frac{(x_2 - a)^2}{2}.
$$

By the same token, we integrate the above (as functions of $x_2$) from $a$ to the endpoint $b$,

$$
f(b) - f(a) - f'(a) (b - a) - f''(a)\frac{(b -a)^2}{2} \leq M\frac{(b - a)^3}{3!}
$$

which, along with the lower bound, is exactly what was to be demonstrated.

This clearly generalizes to $f\in C^{n+1}$ for any $n \geq 0$, namely,

$$
\left|f(b) - \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(b - a)^{k} \right| \leq \frac{M}{(n+1)!} |b - a|^{n+1},
$$

where the absolute value is inserted to account for the case $a > b$.
