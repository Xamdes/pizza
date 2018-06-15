$(function()
{
  $("#input-form").submit(function(event){
    event.preventDefault();
    var newPizza = new Pizza(getToppings(),getSize());
    newPizza.cost();
    output(newPizza);
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

function output(newPizza)
{
  $("#output-size").text(newPizza.size[0].toLowerCase());
  $("#output-cost").text("$"+newPizza.price.toString());
  var toppings = ["<li>Cheese</li>"];
  newPizza.toppings.forEach(function(topping)
  {
    toppings.push("<li>"+topping[0]+"</li>");
  });
  $("#topping-list").html(toppings);
  $("#details").show();
}

//Back End

function Pizza(arrToppings,arrSize)
{
  this.toppings = arrToppings;
  this.size = arrSize;
  this.price = 0;
}

Pizza.prototype.cost = function()
{
  var sum = 0;
  this.toppings.forEach(function(topping)
  {
    sum += topping[1];
  });
  sum += this.size[1];
  this.price = sum;
  return this.price;
}

Pizza.prototype.reset = function()
{
  this.toppings = [];
  this.size = "small";
  this.cost = 0;
  return true;
}
