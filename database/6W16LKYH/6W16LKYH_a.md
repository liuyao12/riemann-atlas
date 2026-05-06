A *functor* from a category $\mathcal{C}$ to another category $\mathcal{D}$ is a map 

$$
\mathrm{F}: \mathrm{Obj}_{\mathcal{C}) \to \mathrm{Obj}_{\mathcal{C}}
$$

of objects, together with a map

$$
F_{x, y}: \mathrm{Mor}_{\mathcal{C}}(x, y) \to \mathrm{Mor}_{\mathcal{D}}(F(x), F(y))
$$

of morphisms, for each $x, y \in \mathrm{Obj}_{\mathcal{C}}$, such that

- $F_{x, x}(\mathrm{id}_{x}) = \mathrm{id}_{F(x)}$
- (funcatoriality) $F_{x, z}( g \circ f) = F_{y, z}(g) \circ F_{x, y}(f)$ for all $f: x \to y$ and $g: y \to z$ in the category $\mathcal{C}$.
