function solution(dots) {
    return Math.abs(
      (Math.max(...dots.map((dot) => dot[0])) -
        Math.min(...dots.map((dot) => dot[0]))) *
        (Math.max(...dots.map((dot) => dot[1])) -
          Math.min(...dots.map((dot) => dot[1])))
    );
  }