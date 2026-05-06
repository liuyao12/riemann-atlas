Each matrix over a field $k$ can be realized as a linear map of $k$-vector spaces, and associativity follows from the associativity of composition of maps:

$$
(f \circ g) \circ h = f \circ (g \circ h).
$$

Indeed, let $v$ be any vector (of appropriate size), and

$$
((AB)v)_i = \sum_{j} (AB)_{ij} v_j = \sum_{j} \sum_{k} A_{ik}B_{kj} v_j = \sum_{k} A_{ik} (Bv)_k = (A(Bv))_i
$$

shows that $(AB)v = A(Bv)$. It then follows that

$$
((AB)C)v = (AB)(Cv) = A(B(Cv)) = A((BC)v) = (A(BC))v
$$

for any $v$, hence $(AB)C=A(BC)$.

If $k$ is a ring (commutative or not), then replace "vector spaces" by "free (left) modules" over $k$.
