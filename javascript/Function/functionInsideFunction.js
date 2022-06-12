//function inside function

function app(){
    const myfunc = () => {
        console.log("hey")
    }

    const myfunc2 = () => "hello brother"
    console.log("hello");
    myfunc();
    myfunc2();

}

app() // hello
      // hey
      // & return "hello brother"