storedFibs = {}
class Solution:
    def fib(self, N: int) -> int:
        if N in storedFibs:
            return storedFibs[N]
        elif N <= 1:
            result = N
        else:
            result = self.fib(N-1)+self.fib(N-2)
        storedFibs[N] = result
        return result 