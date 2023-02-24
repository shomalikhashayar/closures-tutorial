const scope = "Global";

function check() {
  const scope = "Local";
  function f() {
    return scope;
  }
  return f;
}

// console.log(check()());

const output = document.querySelector(".output");
output.innerHTML = check()();

/* Summary:

Closures is "when you have a function defined inside of another function,
that inner function has access to the variables and scope of the outer
function even if the outer function finishes executing and those
variables are no longer accesible outside of that function."


*/