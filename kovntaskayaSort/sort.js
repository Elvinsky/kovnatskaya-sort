export default function patienceSort(arr) {
  if (arr === null) return null;
  const piles = [];

  // Helper function to find the pile where the card belongs
  function findPile(card) {
    for (let pile of piles) {
      if (card <= pile[pile.length - 1]) {
        return pile;
      }
    }
    return null;
  }

  // Iterate through the cards and distribute them into piles
  for (let card of arr) {
    const pile = findPile(card);
    if (pile) {
      pile.push(card);
    } else {
      piles.push([card]);
    }
  }

  // Merge the piles
  const result = [];
  while (piles.length > 0) {
    let smallestPileIndex = 0;

    // Find the index of the smallest pile
    for (let i = 1; i < piles.length; i++) {
      if (
        piles[i][piles[i].length - 1] <
        piles[smallestPileIndex][piles[smallestPileIndex].length - 1]
      ) {
        smallestPileIndex = i;
      }
    }

    // Move the smallest card from the smallest pile to the result
    result.push(piles[smallestPileIndex].pop());

    // If the smallest pile is now empty, remove it
    if (piles[smallestPileIndex].length === 0) {
      piles.splice(smallestPileIndex, 1);
    }
  }

  return result;
}

// Example usage:
const unsortedArray = [7, 3, 5, 2, 8, 4, 1, 9, 6];
const sortedArray = patienceSort(unsortedArray);
console.log(sortedArray);
