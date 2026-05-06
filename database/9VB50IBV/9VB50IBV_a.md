A *sheaf* on a topological space $X$ in a category $\mathcal{C}$ is a functor $\mathcal{F}: \mathcal{Open}(X) \to \mathcal{C}$ from the (opposite) category of open sets of $X$ to $\mathcal{C}$, such that 

- for any $f_i \in \mathcal{F}(U_i)$ such that the restrictions of $f_i$ and $f_j$ on the intersection $U_i \cap U_j$ are equal, then there exists $f \in \mathcal{F}(\bigcup U_i)$, called the section obtained by *gluing* the $f_i$'s, such that $f$ restricted to $U_i$ is equal to $f_i$.

The *restriction* of $f \in \mathcal{F}(U)$ to an open $V \subseteq U$ is the image of $f$ under $\mathcal{F}(\phi_{V, U})$ for the unique morphism $\phi_{V, U}: U \to V$.
