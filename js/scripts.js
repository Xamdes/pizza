var toppings = [["Peperoni",1],["Onions",1],["Black Olives",2], ["Green Peppers",2]];
var size = [["Small",4],["Medium",7],["Large",10]];

$(function()
{
  $("#input-form").submit(function(event){
    event.preventDefault();
    getSize();

  });
});



//Front End

function getSize()
{
  console.log(size[parseInt($("input:radio[name=input-size]:checked").val())]);
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
