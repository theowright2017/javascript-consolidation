function jumpingOnClouds(c) {
    var jumps = 0;
    var canJumpIndex = [];
    var noJump = [];
    var index = 0;
    for (var i = 0; i < c.length; i++){
        if (c[i] === 0) {
            canJumpIndex.push(i);
        } else if (c[i] === 1) {
            noJump.push(i);
        }
    }
    for (var each of c) {
      if (c[index + 2] === 0){
        jumps += 1;
        index += 2;
      } else if (c[index + 1] === 0){
        jumps += 1;
        index += 1;
      }
    }

    console.log(c[index + 1]);
    console.log(canJumpIndex, noJump);
    console.log(jumps);
}


jumpingOnClouds([0,0,1,0,1,0]);
jumpingOnClouds([0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0]);
