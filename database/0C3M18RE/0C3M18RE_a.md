The *coproduct* of two objects $X$ and $Y$ in a category $\mathcal{C}$ is an object $X \sqcup Y$ in $\mathcal{C}$, together with morphisms $i_1: X \to X \sqcup Y$ and $i_2: Y \to X \sqcup Y$, that satisfies the following universal property:

- for any object $Z$ in $\mathcal{C}$, and any morphisms $f_1: X \to Z$ and $f_2: Y \to Z$, there exists a unique morphism $f: X \sqcup Y \to Z$ such that $f_1 = f \circ i_1$ and $f_2 = f \circ i_2$.

$$
\begin{array}{ccc}
X & \xrightarrow{f_1} & Z \\
\text{  }\big\downarrow i_1 & {}^f \nearrow & \text{  }\big\uparrow f_2 & \\
X \sqcup Y  & \xleftarrow{i_2} & Y
\end{array}
$$

Similarly, the *coproduct* of a family of objects $X_i$, $i \in I$ is defined, and is denoted $\coprod_{i \in I} X_i$.
