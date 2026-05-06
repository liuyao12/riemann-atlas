First, we show uniqueness. Let $\\{a_i\\}$ and $\\{b_i\\}$ be two sets of coefficients, all but finitely many of which are zero, such that

$$
v = \sum_{i \in I} a_i v_i = \sum_{i \in I} b_i v_i,
$$

then

$$
\sum_{i \in I} (a_i - b_i) v_i = 0.
$$

Since $S = \\{ v_i \\}$ is linearly independent, it follows that $a_i - b_i = 0$ for all $i \in I$, as claimed.

Now, if $v$ is in $S$, then the existence of $\\{a_i\\}$ is evident. Suppose now that $v$ is not in $S$, then $S \cup \\{ v \\}$ is linearly dependent by maximality of $S$, i.e., there exist nonzero $c_i$, $i \in I$, and $d$ (all but finitely many are zero) such that

$$
\sum_{i \in I} c_i v_i + d v = 0.
$$

It is clear $d \neq 0$, otherwise $S$ would be linearly dependent, so we have

$$
v = \sum_{i \in I} -\frac{c_i}{d} v_i
$$

as claimed.
