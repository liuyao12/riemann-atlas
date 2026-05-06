By repeated application of the Fundamental Theorem of Calculus, one can express the value of $f(b)$ in terms of as much local information of $f$ at $x=a$ as possible, and the terms of the Taylor series simply fall out, along with an exact expression
for the remainder. To wit,

$$
\begin{aligned}
f(b)=f(a)+\int_a^b & \underbrace{f'(x_1)} \\,dx_1 \\\\
 &  f'(a) + \int_a^{x_1} \underbrace{f''(x_2)}\\,dx_2 \\\\
 & \qquad\qquad\quad\\; f''(a)+ \int_a^{x_2} \underbrace{f'''(x_3)}_{\vdots}\\,dx_3
\end{aligned}
$$

and by evaluating the integrals of the constants $f(a), f'(a), \ldots$, we obtain the identity

$$
f(b) = f(a) + f'(a) (b-a) + f''(a)\frac{(b-a)^2}{2} +  \int_a^b\\! \int_{a}^{x_1}\\!\\! \int_{a}^{x_2} f'''(x_3)\\,dx_3 dx_2 dx_1
$$

for $f \in C^3$, for the sake of definiteness.

Now, with the bound $|f'''(x)|\leq M$ on the interval $[a, b]$, the triple integral is bounded by

$$
\left| \iiint f'''(x_3)\\,dx_3 dx_2 dx_1 \right| \leq M \left| \iiint dx_3 dx_2 dx_1 \right| = M\frac{|b-a|^3}{3!}
$$

either by a direct evaluation of the *iterated integral*, or by recognizing it as the volume of a (right-angled) tetrahedron.

This works verbatim for $f \in C^{n+1}$ for any $n \geq 0$:

$$
f(b) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!} (b-a)^k +  \int_{a}^{b}\\! \int_{a}^{x_1}\\!\\!\\!\\!\cdots\\! \int_{a}^{x_{n}} f^{(n+1)}(x_{n+1})\\,dx_{n+1} \cdots dx_2 dx_1
$$

where the $(n+1)$-fold iterated integral is trivially bounded by

$$
\frac{M}{(n+1)!}|b-a|^{n+1}
$$

which is what was to be proved; the only calculation involved is that, for each $k \geq 1$,

$$
\int_{a}^{b}\\! \int_{a}^{x_1}\\!\\!\\!\cdots\\! \int_{a}^{x_{k-1}} dx_k\cdots dx_2 dx_1 = \frac{(b-a)^k}{k!}
$$

which is the (signed) volume of a (right-angled) $k$-simplex.
