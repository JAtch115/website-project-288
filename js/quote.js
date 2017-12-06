"use strict";

/*
   Author:      James Atchison, Aris Fleming
    Date:       12/05/2017
    Instructor: John Kinuthia
    Course:     ISYS 288-AGA Fall 2017

    Creates JS form of site items.
*/

// Global Variables
var formDiv = document.getElementById("productsForm");
var outputDiv = document.getElementById("formOutput");
var itemPrice = 0;

// ArrayLists
var itemOptions = ["T-Shirt","Sweatshirt","Uniform","Water Bottle", "Mug"];
var qtyOptions = ["25","50","100"];

// Create Form Controls
var itemList = document.createElement("select");
itemList.setAttribute("id", "itemSelect");
itemList.setAttribute("class", "form-control")

var qtyList = document.createElement("select");
qtyList.setAttribute("id", "qtySelect");
qtyList.setAttribute("class", "form-control")

var discountCheck = document.createElement("input");
discountCheck.setAttribute("type", "checkbox");
discountCheck.setAttribute("id", "discountCheckbox");
discountCheck.setAttribute("class", "checkbox form-control");

var discountLabel = document.createElement("label");
discountLabel.setAttribute("for", discountCheck);
discountLabel.setAttribute("class", "label label-default");
discountLabel.innerHTML = "Discount";

var discountText = document.createElement("input");
discountText.setAttribute("id", "discountTextbox");
discountText.setAttribute("class", "form-control");
discountText.setAttribute("placeholder", "Enter a percentage");

var submitBtn = document.createElement("submit");
submitBtn.setAttribute("id", "formSubmit");
submitBtn.setAttribute("class", "btn btn-default button form-control");
submitBtn.setAttribute("onclick", "calculatePrice()");
submitBtn.innerHTML = "Go";

formDiv.appendChild(itemList);
formDiv.appendChild(qtyList);
formDiv.appendChild(discountLabel);
formDiv.appendChild(discountCheck);
formDiv.appendChild(discountText);
formDiv.appendChild(submitBtn);

// Populate select lists
populateItems();
populateQty();

// Functions
function calculatePrice() {
    var result = "";
    if (itemList.value == itemOptions[0]) 
    {
        if (qtyList.value == qtyOptions[0])
        {
            result = 25 * 7;
        } 
        else if (qtyList.value == qtyOptions[1])
        {
            result = 50 * 6.5;
        } 
        else if (qtyList.value == qtyOptions[2])
        {
            result = 100 * 6;
        }
        else
        {
            result = "ERROR";
        }
    }
    else if (itemList.value == itemOptions[1]) 
    {
        if (qtyList.value == qtyOptions[0])
        {
            result = 25 * 10;
        } 
        else if (qtyList.value == qtyOptions[1])
        {
            result = 50 * 9;
        } 
        else if (qtyList.value == qtyOptions[2])
        {
            result = 100 * 8;
        }
        else
        {
            result = "ERROR";
        }
    }
    else if (itemList.value == itemOptions[2]) 
    {
        if (qtyList.value == qtyOptions[0])
        {
            result = 25 * 15;
        } 
        else if (qtyList.value == qtyOptions[1])
        {
            result = 50 * 13;
        } 
        else if (qtyList.value == qtyOptions[2])
        {
            result = 100 * 11;
        }
        else
        {
            result = "ERROR";
        }
    }
    else if (itemList.value == itemOptions[3]) 
    {
        if (qtyList.value == qtyOptions[0])
        {
            result = 25 * 12;
        } 
        else if (qtyList.value == qtyOptions[1])
        {
            result = 50 * 10;
        } 
        else if (qtyList.value == qtyOptions[2])
        {
            result = 100 * 8;
        }
        else
        {
            result = "ERROR";
        }
    }
    else if (itemList.value == itemOptions[4]) 
    {
        if (qtyList.value == qtyOptions[0])
        {
            result = 25 * 15;
        } 
        else if (qtyList.value == qtyOptions[1])
        {
            result = 50 * 14;
        } 
        else if (qtyList.value == qtyOptions[2])
        {
            result = 100 * 13;
        }
        else
        {
            result = "ERROR";
        }
    }
    switch (discountCheck.checked)
    {
        case true:
            if (isNaN(parseFloat(discountText.value)))
            {
                discountText.style.backgroundColor = "#ff8a8a";
                result = "ERROR";
            }
            else
            {
                discountText.style.backgroundColor = "#ffffff";
                result = calcualteDiscount(result, discountText.value);
            }
            break;
    }
    outputDiv.innerHTML = "$" + result;
}

function calcualteDiscount(num, discount)
{
    num -= num * (discount / 100);
    return num;
}

function populateItems() 
{
    for (var i = 0; i < itemOptions.length; i++) 
    {
        var option = document.createElement("option");
        option.setAttribute("value", itemOptions[i]);
        option.text = itemOptions[i];
        itemList.appendChild(option);
    }
}

function populateQty() 
{
    for (var i = 0; i < qtyOptions.length; i++) 
    {
        var option = document.createElement("option");
        option.setAttribute("value", qtyOptions[i]);
        option.text = qtyOptions[i];
        qtyList.appendChild(option);
    }
}

