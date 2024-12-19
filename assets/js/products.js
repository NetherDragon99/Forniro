let cart=[];
const counter=document.createElement('div'),
  counterClone=counter.cloneNode(true),
  counterContainer=document.querySelector('nav>div:nth-child(3)>span:nth-child(4)'),
  counterContainerList=document.querySelector('.sidebar>div:nth-child(3)>span:nth-child(4)'),
  cartMenue=document.createElement('div');

//on load
document.addEventListener('DOMContentLoaded',()=>{
  
  //add counter
  counter.classList.add('counter');
  counterClone.classList.add('counter');
  counterContainer.appendChild(counter);
  counterContainerList.appendChild(counterClone);
  cart=JSON.parse(localStorage.getItem('cart')) || [];
  ShowCartCounter();

  //counter menue
  document.querySelector('header').appendChild(cartMenue);
  cartMenue.classList.add('cartMenue');
})
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
  })
})
function ShowCartCounter(){
  if (cart.length===0){
    counter.style.display='none';
    counterClone.style.display='none';
  }else{
    counter.style.display='block';
    counter.textContent=cart.length;
    counterClone.style.display='block';
    counterClone.textContent=cart.length;
  }
}

counterContainer.addEventListener('click',()=>{
  if(cartMenue.classList.contains('on')){
    cartMenue.classList.remove('on');
  }else{
    cartMenue.classList.add('on');
  }
})