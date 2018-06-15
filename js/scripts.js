


$(function()
{
  $("#input-form").submit(function(event){
    event.preventDefault();
    var newPizza = new Pizza();

    newPizza.size = getSize();
    newPizza.toppings = getToppings();
    console.log(newPizza);

  });
});

//Front End

function getSize()
{
  var size = [["Small",4],["Medium",7],["Large",10]];
  return (size[parseInt($("input:radio[name=input-size]:checked").val())]);
}

function getToppings()
{
  var toppings = [["Peperoni",1],["Onions",1],["Black Olives",2], ["Green Peppers",2]];
  var selected = [];
  $("input:checkbox[name=input-toppings]:checked").each(function()
  {
    selected.push(toppings[parseInt($(this).val())]);
  });
  return selected;
}

//Back End

function Pizza()
{
  toppings = [];
  size = [];
  cost = 0;
}

Pizza.prototype.cost = function()
{
  this.toppings.forEach(functions(topping))
  {
    this.cost += topping[1];
  }
}

Pizza.prototype.reset = function()
{
  this.toppings = [];
  this.size = "small";
  this.cost = 0;
}
