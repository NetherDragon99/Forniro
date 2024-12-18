let cart=[];
const counter=document.createElement('div');
document.addEventListener('DOMContentLoaded',()=>{
  const counterContainer=document.querySelector('nav>div:nth-child(3)>span:nth-child(4)');
  counter.classList.add('counter');
  counterContainer.appendChild(counter);
  cart=JSON.parse(localStorage.getItem('cart')) || [];
  ShowCartCounter()
});
const atc=document.querySelectorAll('.atc');
atc.forEach((button)=>{
  button.addEventListener('click',()=>{
    let productParent=button.closest('.product');
    let productName=productParent.querySelector('div>h4').textContent;
    console.log(productName);
    cart.push(productName)
    console.log(cart);
    localStorage.setItem('cart',JSON.stringify(cart));
    counter.textContent=cart.length;
    ShowCartCounter()
  });
});
function ShowCartCounter(){
  if (cart.length===0){
    counter.style.display='none';
  }else{
    counter.style.display='block';
    counter.textContent=cart.length;
  }
}