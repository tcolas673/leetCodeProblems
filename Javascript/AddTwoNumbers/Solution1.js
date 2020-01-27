// only 310 of over 1500 test cases passed
var addTwoNumbers = function(l1, l2) {
    const first = getNumber(l1);
    const second = getNumber(l2);
    let answer = new ListNode(first[0]+second[0]);
    console.log(first);
    console.log(second);
    let pos = 1;
    while(pos < first.length && second.length > pos){
       let sum = first[pos] + second[pos];
       if(sum >= 10){
           addToList(answer, sum-10);
           first[pos+1]++;
           pos++;
       } else {
           addToList(answer, sum);
           pos++;
       }
    }
    console.log(answer);
    return answer;
};

function getNumber(ll){
    let number = [];
    while(ll != null){
        number.push(ll.val);
        ll = ll.next;
    }  
    return number;
}

function addToList(ll, data){
    while(ll.next != null){
        ll = ll.next;
    }
    const newNode = new ListNode(data);
    console.log(newNode);
    console.log(ll);
    ll.next = newNode;
}