A *sheaf of rings* $\mathcal{F}$ on a topological space $X$ is an assignment of a commutative ring $\mathcal{F}(U)$ to each open set $U \subseteq X$, and to each inclusion of open sets $U \subseteq V$ a ring homomophism $\mathcal{F}(V) \to \mathcal{F}(U)$, called *restriction*, such that

- $\mathcal{F}(U) \to \mathcal{F}(U)$ is the identity for each $U$;
- for each triple inclusion $U \subset V \subset W$, the restrictions commute:
- for each triple intersection $U \cap V \cap W$, the restrictions commute;
- (sheaf axiom) for an open cover $\bigcup_i U_i = U$, the sequence

$$
0 \to \mathcal{F}(U) \to \prod_i \mathcal{F}(U_i) \to \prod_{i,j} \mathcal{F}(U_i \cap U_j)
$$

is exact; i.e., for $f_i \in \mathcal{F}(U_i)$ that agree on intersections, there is a unique $f \in \mathcal{F}(U)$ that is defined by *gluing* the $f_i$'s along the intersections.
