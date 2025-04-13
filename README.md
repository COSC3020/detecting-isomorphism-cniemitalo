# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

The worst case would require my program to check every permutation to determine if the graphs are isomorphic. The number of permutations generated would be $|V|!$, and the isValid function's fastest growing term would be $|V|^2$. Therefore, the worst case complexity would be $\Theta(|V|! * |V|^2)$ because the program checks if every permutation is valid. 

### Sources and Plagiarism

ChatGPT helped me determine how to create permutations of the graph and check them against the original graph 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
