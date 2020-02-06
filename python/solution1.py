class Solution(object):
    def fib(self, N):
        """
        :type N: int
        :rtype: int
        """
        if N == 0:
            return 0
        elif N == 1:
            return 1
        return self.fib(N-1)+self.fib(N-2)
#python 3
class Solution:
    def fib(self, N: int) -> int:
        
        if N == 0:
            return 0
        elif N == 1:
            return 1
        return self.fib(N-1)+self.fib(N-2