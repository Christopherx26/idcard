function generateID() {
    let userFirstName = document.getElementById("firstName").value;
    console.log(userFirstName);
          document.getElementById("postFullName").innerHTML = (userFirstName);

    let userLastName = document.getElementById("lastName").value;
    console.log(userLastName);
      document.getElementById("postFullName").innerHTML = (userLastName);

    let userAge = document.getElementById("age").value;
    console.log(userAge);
      document.getElementById("postAge").innerHTML = (userAge);

    let userPhone = document.getElementById("phone").value;
    console.log(userPhone);
      document.getElementById("postPhoneNumber").innerHTML = (userPhone);

    let userAddress = document.getElementById("address").value;
    console.log(userAddress);
      document.getElementById("postAddress").innerHTML = (userAddress);

      document.getElementById("postFullName").innerHTML = `${userFirstName} ${userLastName}`

      document.getElemnetById("postAge").HTML = `${userAge}`

      document.getElementById("postPhoneNumber").innerHTML = `${userPhone}`

      document.getElementById("postAddress").innerHTML = `${userAddress}`;
}


// for the life of me I could not figure out how to make all the info display.  I tried making seperate divs and nameing them for each different info tag.  That did not work,  i tried messing with the css properties and that did not work. I feel like the answer was to rename and assign each info to a function, but I could not see where my error was.
