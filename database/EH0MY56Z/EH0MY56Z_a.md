By the Fundamental Theorem of Algebra, there exists one root, $\alpha_1 \in \mathbb{C}$ with $p(\alpha_1) = 0$. By the factor theorem, we have

$$
p(x) = (x - \alpha_1) p_1(x)
$$

for some polynomial $p_1(x) \in \mathbb{C}[x]$ of degree $n-1$. We can then apply the Fundamental Theorem of Algebra again, and obtain a root of $p_1$; in other words, we have

$$
p(x) = (x - \alpha_1) (x - \alpha_2) p_2(x)
$$

for some $\alpha_2 \in \mathbb{C}$ and some polynomial $p_2$ of degree $n - 2$. Continuing this process, we eventually have

$$
p(x) = (x - \alpha_1) (x - \alpha_2) \cdots (x - \alpha_n) p_n(x)
$$

for some polynomial $p_n$ of degree $0$, i.e., a constant. By comparing the highest degree of $p(x)$, we see that $p_n(x) = a_n$.
