/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var el1, el2, el3, count = 0, i = 0;

  	for (i = 0; i < preferences.length; i++) {
  		el1 = preferences[i];
  		el2 = preferences[el1 - 1];
  		el3 = preferences[el2 - 1];

  		if (preferences[el1 - 1] != el1)
			if (i == el3 - 1)
  				count++;
  			
  	}

  	return count / 3;
};
