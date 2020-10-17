let numberOfSocks = 17;   //number of socks

//let ar = [1,1,1,2,2,2,2,2,3,3,3,4,4,4,2,2,2,1,1,2,3,4,6,6,4,3,4,2,1,2,4,3,5,4,3,2,2,2,1,2,3,3,4,3,2,3];

let ar = [10, 10, 10, 10, 20, 30, 30, 30, 30, 30, 30, 30, 40, 40, 40, 40, 40];  //colors ar[i] of the socks in the pile.

//print the number of pairs
console.log(findPairs(ar));


// Function to find the number of pairs
function findPairs(ar)
{
      let pair=0;

      //if the given array is not sorted, the following segment will sort it first
      for(let i=0; i<ar.length; i++)
      {
        for(let j=i+1; j<ar.length; j++)
        {
          if(ar[i] > ar[j])
          {
            ar[i] = ar[i] + ar[j];
            ar[j] = ar[i] - ar[j];
            ar[i] = ar[i] - ar[j];
          }
        }
      }

      //After sorting, the following segment will find the number of pairs.
      for(let i=0; i<ar.length; i++)
      {
        if(ar[i] == ar[i+1])
        {
          pair++;
          i++;
        }
      }

      return pair;
}