let check = document.getElementById("newsletter-form");
let hearth = document.getElementById("hearth");

check.addEventListener("change", function() 
{
if (check.checked) 
{
	hearth.classList.remove("d-none");
}
else
{
	hearth.classList.add("d-none");
}
});
