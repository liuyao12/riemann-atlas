The *spectrum* of a ring $R$ is a locally ringed space:

- the underlying set is $X = \mathrm{Spec}(R)$ of all prime ideals $\mathfrak{p} \subset R$;
- the *Zariski topology*: for any ideal $I \subset R$, the subset $V_I := \\{ \mathfrak{p} \in \mathrm{Spec}(R) \\; : \\; \mathfrak{p} \supseteq I \\}$ is closed;
- the *structure sheaf* $\mathcal{O}_{X}$ is determined by the sections over *distinguished* open sets: for $f \in R$, let

$$
D_f := \\{ \mathfrak{p} \in \mathrm{Spec}(R) \\; : \\; f \notin \mathfrak{p} \\} \subseteq X
$$

and put

$$
\mathcal{O}_{X}(D_f) := R_{f}
$$

i.e. localization of the ring $R$ with respect to the multiplicative set $\\{1, f, f^2, \ldots \\}$.
