// Dictionary<Integer, Integer> geek  = new Hashtable<Integer, Integer>(); 
// make a global dictionary if possible

class Solution {
    public int fib(final int N) {
        if(geek.get(N) != null){
            result = geek.get(N);
        }
        else if (N <= 1) {
            return N;
        } else {
            result = fib(N-1) + fib(N-2);
        }
        geek.put(N, result); 
        return result;
    }
}