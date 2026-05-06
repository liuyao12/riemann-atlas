# Library

> *A library of mathematical theorems and proofs, and the definitions needed to state them*


In modern times, as is particularly associated but not exclusive to the style of N. Bourbaki, the most essential of our mathematical knowledge is organized around two types of data structures: `definition`s and `theorem`s. We are adopting a rather free (informal) interpretation of them, subject to the following restrictions or guidelines:

- Various definitions are bundled into one if they are referring to the same object (function, number, etc.) in the same generality, scope, etc.
- Various proofs of the same theorem, are bundled into one `theorem`, if they have strictly the same hypothesis and conclusion, at the same level of generality; it's meant to showcase the different proofs that employ rather different sets of concepts (`definition`s) and tools (`theorem`s).

A third type of nodes might be `example`s, but let's make use of `theorem`s as much as possible. Other dedicated sites that are built specific for a certain type of objects, such as the [L-functions and Modular Forms Database](https://www.lmfdb.org/) and [group properties](https://groupprops.subwiki.org/). We could also model on wikipedia, which provides customizable templates.

## Assitance by an LLM

An LLM can be a great tool to

1. take a LaTeX file of a mathematical paper or textbook, and render all the definitions and propositions into a graph of dependencies;

1. rephrase a `definition`, `theorem` or its proofs, if any term is unfamiliar to the user, by replacing any mention of that term by (one of) its `definition`, and turn it into a coherent sentence or paragraph of mathematics.
