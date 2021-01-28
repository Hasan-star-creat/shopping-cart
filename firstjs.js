// mobile minus 
document.getElementById('minusBtn').addEventListener('click',function(){
    
 const mobilMinus = document.getElementById('mobileAdd').value;
  const mobilMinusNumber = parseInt(mobilMinus);

  const mobilTotalMinus = mobilMinusNumber - 1 ;
  document.getElementById('mobileAdd').value = mobilTotalMinus;

  
  const mobilePrice =  document.getElementById('mobilePrice').innerText;
  const mobilePriceNumber = parseInt(mobilePrice) ;
   const mobilePriceMinus= mobilePriceNumber - 1219; 
   document.getElementById('mobilePrice').innerText = mobilePriceMinus;


})
  // mobile click added 
   document.getElementById('PlusBtn').addEventListener('click',function(){
       const mobilPluse = document.getElementById('mobileAdd').value;
       const mobilPlusNumber = parseInt(mobilPluse);
       const totalmobileAdd = mobilPlusNumber + 1;
       document.getElementById('mobileAdd').value = totalmobileAdd ;

     const mobilePrice =  document.getElementById('mobilePrice').innerText;
     const mobilePriceNumber = parseInt(mobilePrice) ;
      const mobilePriceAdd = mobilePriceNumber + 1219; 
      document.getElementById('mobilePrice').innerText = mobilePriceAdd;    
   })
   /********* iPhone 11 128GB Black End ********/ 

   /******Start iPhone 11 Silicone Case-Black ******/
     // kaching Minus
     document.getElementById('kachinMinusBtn').addEventListener('click',function(){
  const kachingAdd =   document.getElementById('kachingAdd').value;
   const kachingAddNumber = parseInt(kachingAdd);
   const totalKcingMinus = kachingAddNumber - 1;
   document.getElementById('kachingAdd').value = totalKcingMinus;
   // kaching price Minuse
   const KachingPricing =  document.getElementById('KachingPrice').innerText;
   const kachingpricingNumber = parseInt(KachingPricing);
    const totalKachingMinuse = kachingpricingNumber - 59 ;
    document.getElementById('KachingPrice').innerText =  totalKachingMinuse;

     })
     //Kaching Pluse
     document.getElementById('KachingAddBtn').addEventListener('click',function(){
        const kachingAdd =   document.getElementById('kachingAdd').value;
        const kachingAddNumber = parseInt(kachingAdd); 
        const totalKachingPluse = kachingAddNumber + 1 ;
        document.getElementById('kachingAdd').value =  totalKachingPluse ;

        // kaching price added 
     const KachingPricing =  document.getElementById('KachingPrice').innerText;
     const kachingpricingNumber = parseInt(KachingPricing);
      const kachingPriceAdded = kachingpricingNumber + 59 ;
      document.getElementById('KachingPrice').innerText = kachingPriceAdded ;

     })

 
