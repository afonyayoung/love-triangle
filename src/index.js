/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    var sum = 0;
    for (var i=1; i <= preferences.length; i++){
        var k = preferences[i-1];
        var l = preferences[k-1]
        if (preferences[i-1]===k && preferences[k-1]===l && preferences[l-1]===i){
            sum++;
        }
    }
    return(Math.floor(sum/3));
};
