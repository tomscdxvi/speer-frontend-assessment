// Billing Information

function updateBorderName() 
{
    document.getElementById("name").style.borderBottom = "thick solid #5E33D1";
}

function updateBorderBill() 
{
    document.getElementById("bill-address").style.borderBottom = "thick solid #5E33D1";
}

function updateBorderCity() 
{
    document.getElementById("city").style.borderBottom = "thick solid #5E33D1";
}

function updateBorderPost() 
{
    document.getElementById("post-code").style.borderBottom = "thick solid #5E33D1";
}


document.getElementById("name").addEventListener("focusout", removeBorderName);
document.getElementById("bill-address").addEventListener("focusout", removeBorderBill);
document.getElementById("city").addEventListener("focusout", removeBorderCity);
document.getElementById("post-code").addEventListener("focusout", removeBorderPost);


function removeBorderName()
{
    document.getElementById("name").style.borderBottom = "2px solid #000";
}

function removeBorderBill()
{
    document.getElementById("bill-address").style.borderBottom = "2px solid #000";
}

function removeBorderCity()
{
    document.getElementById("city").style.borderBottom = "2px solid #000";
}

function removeBorderPost()
{
    document.getElementById("post-code").style.borderBottom = "2px solid #000";
}


// Credit Card Information 

function updateBorderCName() 
{
    document.getElementById("c-name").style.borderBottom = "thick solid #5E33D1";
}

function updateBorderCNumber() 
{
    document.getElementById("c-number").style.borderBottom = "thick solid #5E33D1";
}

function updateBorderEMonth() 
{
    document.getElementById("e-month").style.borderBottom = "thick solid #5E33D1";
}

function updateBorderEYear() 
{
    document.getElementById("e-year").style.borderBottom = "thick solid #5E33D1";
}

function updateBorderCVV() 
{
    document.getElementById("cvv").style.borderBottom = "thick solid #5E33D1";
}

document.getElementById("c-name").addEventListener("focusout", removeBorderCName);
document.getElementById("c-number").addEventListener("focusout", removeBorderCNumber);
document.getElementById("e-month").addEventListener("focusout", removeBorderEMonth);
document.getElementById("e-year").addEventListener("focusout", removeBorderEYear);
document.getElementById("cvv").addEventListener("focusout", removeBorderCVV);

function removeBorderCName()
{
    document.getElementById("c-name").style.borderBottom = "2px solid #000";
}

function removeBorderCNumber()
{
    document.getElementById("c-number").style.borderBottom = "2px solid #000";
}

function removeBorderEMonth()
{
    document.getElementById("e-month").style.borderBottom = "2px solid #000";
}

function removeBorderEYear()
{
    document.getElementById("e-year").style.borderBottom = "2px solid #000";
}

function removeBorderCVV()
{
    document.getElementById("cvv").style.borderBottom = "2px solid #000";
}