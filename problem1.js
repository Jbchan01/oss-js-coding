/*
(Problem)
Write a JavaScript function that, given a positive integer n,
prints a right-aligned triangle pattern of asterisks (*).
Each row of the triangle should contain an increasing number of asterisks,
starting with 1 asterisk at the top and ending with n asterisks at the bottom.

(Example)
For n = 5, the output should be:
    *
   **
  ***
 ****
*****
*/

function printTriangle(n) {
    for(let i = 0; i < n; i++)  {
        for(let j = n-1; j > i; j--)  {
          document.write('&nbsp');
        }
        for(let j = 0; j <= i; j++) {
          document.write('*');
        }
        document.write('<br>');
      }
}

// Example usage:
printTriangle(5);
