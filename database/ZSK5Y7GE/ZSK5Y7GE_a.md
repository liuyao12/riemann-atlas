By definition of the derivative, it is to be shown that 

$$
\lim_{h\to 0} \frac{1}{h}\int_x^{x+h} f(t)\\,dt = f(x).
$$

Indeed, by continuity of $f(t)$ (at the fixed point $x$), for 
any $\epsilon>0$ we may choose $\delta$ such that

$$
f(x) - \epsilon < f(t) < f(x) + \epsilon
$$

for all $t$ with $|t-x|<\delta$. Integrating $f(t)$ from $x$ to $x+h$, 
with $0 < h < \delta$, we have

$$
(f(x)-\epsilon)\\, h < \int_x^{x+h} f(t)\\,dt < (f(x)+\epsilon)\\, h ,
$$

that is,

$$
\left| \frac{1}{h}\int_x^{x+h} f(t)\\,dt - f(x) \right| < \epsilon
$$

which establishes the claimed limit as $h\to 0$ from the right. A similar 
argument with $-\delta < h < 0$ yields the limit from the left.
