$(document).ready(function() {
  $("#formOne").submit(function(event) {
    // var person1Input = $("input#person1").val();
    // var person1InputUpper = person1Input.toUpperCase();
    //
    // $(".person1").text(person1InputUpper);

    $(".person1").text(
      $("input#person1").val()
        .toUpperCase()
      );



    event.preventDefault();
  });
});
